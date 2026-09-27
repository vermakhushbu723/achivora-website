import dotenv from 'dotenv';

dotenv.config();

/**
 * Every tunable in one place, with defaults that let `npm run dev` work on a
 * fresh clone. Anything secret belongs in `.env`, which is git-ignored.
 */
export const env = {
  port: Number(process.env.PORT ?? 5000),
  mongoUri:
    process.env.MONGODB_URI ??
    'mongodb+srv://tbswebtechnology:Khushbu%40123@cluster0.5aecd.mongodb.net/',
  dbName: process.env.MONGODB_DB ?? 'achivora',

  /* Admin sign-in. Change these before this ever leaves a laptop. */
  adminEmail: process.env.ADMIN_EMAIL ?? 'admin@achivora.com',
  adminPassword: process.env.ADMIN_PASSWORD ?? 'achivora@admin',
  jwtSecret: process.env.JWT_SECRET ?? 'achivora-dev-secret-change-me',
  jwtExpiry: process.env.JWT_EXPIRY ?? '7d',

  /* The Vite dev server; the API is same-origin in production. */
  corsOrigins: (process.env.CORS_ORIGINS ?? 'http://localhost:3000,http://localhost:4173')
    .split(',')
    .map((o) => o.trim()),
};
