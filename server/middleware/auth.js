import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

/** Signs the short admin session token handed back by `POST /api/auth/login`. */
export const signToken = (payload) =>
  jwt.sign(payload, env.jwtSecret, { expiresIn: env.jwtExpiry });

/**
 * Guards every read of submitted data. The submission endpoints themselves
 * stay public — that is the point of a contact form — but nothing that
 * lists, edits or deletes what came in is reachable without a token.
 */
export function requireAdmin(req, res, next) {
  const header = req.headers.authorization ?? '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ ok: false, error: 'Sign in to continue.' });
  }

  try {
    req.admin = jwt.verify(token, env.jwtSecret);
    return next();
  } catch {
    return res.status(401).json({ ok: false, error: 'Session expired. Sign in again.' });
  }
}
