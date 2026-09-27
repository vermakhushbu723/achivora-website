import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { env } from '../config/env.js';
import { requireAdmin, signToken } from '../middleware/auth.js';

export const authRouter = Router();

/* Slow down credential guessing without locking the real admin out. */
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many attempts. Try again in a few minutes.' },
});

/**
 * Single-admin sign-in against the credentials in `.env`. There is no user
 * collection because there is exactly one operator; swap this for a real
 * users model the day a second person needs an account.
 */
authRouter.post('/login', loginLimiter, (req, res) => {
  const email = String(req.body.email ?? '').trim().toLowerCase();
  const password = String(req.body.password ?? '');

  if (email !== env.adminEmail.toLowerCase() || password !== env.adminPassword) {
    return res.status(401).json({ ok: false, error: 'Email or password is incorrect.' });
  }

  const token = signToken({ email, role: 'admin' });
  return res.json({ ok: true, token, admin: { email, role: 'admin' } });
});

/** Lets the dashboard confirm a stored token is still good on reload. */
authRouter.get('/me', requireAdmin, (req, res) => {
  res.json({ ok: true, admin: req.admin });
});
