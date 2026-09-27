import dns from 'node:dns';
import mongoose from 'mongoose';
import { env } from './env.js';

/** Public resolvers, used only if the system one cannot answer SRV queries. */
const FALLBACK_DNS = ['8.8.8.8', '1.1.1.1'];

const isSrvLookupFailure = (err) =>
  /querySrv|queryTxt|ENOTFOUND|ECONNREFUSED|EAI_AGAIN|ESERVFAIL/i.test(err?.message ?? '');

async function connect() {
  await mongoose.connect(env.mongoUri, {
    dbName: env.dbName,
    serverSelectionTimeoutMS: 15000,
  });
}

/**
 * Connects once and keeps the handle. Queries are not buffered: if Mongo is
 * unreachable the request fails fast with a clear error instead of hanging.
 *
 * A `mongodb+srv://` URI needs an SRV record, and some networks (corporate
 * DNS, VPNs, container resolvers) refuse that query type while ordinary
 * lookups work fine. When that is what failed — rather than a bad password
 * or a closed IP allowlist — the second attempt goes through a public
 * resolver instead of leaving the API without a database.
 */
export async function connectDb() {
  mongoose.set('strictQuery', true);
  mongoose.set('bufferCommands', false);

  try {
    await connect();
  } catch (err) {
    if (!isSrvLookupFailure(err)) throw err;

    console.warn(`[db] SRV lookup failed (${err.message}); retrying via ${FALLBACK_DNS[0]}`);
    dns.setServers(FALLBACK_DNS);
    await connect();
  }

  const { host, name } = mongoose.connection;
  console.log(`[db] connected to ${host}/${name}`);

  mongoose.connection.on('error', (err) => console.error('[db] error:', err.message));
  mongoose.connection.on('disconnected', () => console.warn('[db] disconnected'));
}
