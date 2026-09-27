import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { connectDb } from './config/db.js';
import { authRouter } from './routes/auth.js';
import { submissionsRouter } from './routes/submissions.js';

const app = express();

app.set('trust proxy', 1);
app.use(express.json({ limit: '256kb' }));
app.use(
  cors({
    origin: (origin, cb) =>
      // No origin = a same-origin or server-side call, which is fine.
      !origin || env.corsOrigins.includes(origin)
        ? cb(null, true)
        : cb(new Error(`Origin ${origin} is not allowed.`)),
  }),
);

app.get('/api/health', (_req, res) =>
  res.json({ ok: true, service: 'achivora-api', time: new Date().toISOString() }),
);

app.use('/api/auth', authRouter);
app.use('/api/submissions', submissionsRouter);

app.use('/api', (_req, res) => res.status(404).json({ ok: false, error: 'Unknown endpoint.' }));

/* One place to turn a thrown error into a JSON response. */
app.use((err, _req, res, _next) => {
  console.error('[api]', err.message);
  const status = err.status ?? 500;
  res.status(status).json({
    ok: false,
    error: status === 500 ? 'Something went wrong on our side.' : err.message,
  });
});

async function start() {
  try {
    await connectDb();
  } catch (err) {
    // The API still boots so the dev server is not blocked; every DB-backed
    // route will report the failure instead of hanging.
    console.error('[db] connection failed:', err.message);
  }

  app.listen(env.port, () => {
    console.log(`[api] listening on http://localhost:${env.port}`);
  });
}

start();
