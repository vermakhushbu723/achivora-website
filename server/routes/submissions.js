import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { Submission } from '../models/Submission.js';
import { requireAdmin } from '../middleware/auth.js';

export const submissionsRouter = Router();

/* A public write endpoint needs a ceiling, or the first bot that finds it
   fills the collection overnight. */
const submitLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 12,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many submissions. Please try again shortly.' },
});

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Shared validation for the three public forms. */
function validate(body) {
  const errors = {};
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const phone = String(body.phone ?? '').trim();

  if (name.length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL.test(email)) errors.email = 'Please enter a valid email address.';
  if (phone && phone.replace(/\D/g, '').length < 7) errors.phone = 'Please check the phone number.';

  return { errors, clean: { name, email, phone } };
}

/* ── Public: one endpoint per form ────────────────────────────────────── */

const PUBLIC_FORMS = {
  contact: (body) => ({
    message: String(body.message ?? '').trim(),
    extra: { subject: String(body.subject ?? '').trim() },
  }),
  enquiry: (body) => ({
    message: String(body.brief ?? body.message ?? '').trim(),
    extra: {
      budget: String(body.budget ?? '').trim(),
      nda: Boolean(body.nda),
    },
  }),
  application: (body) => ({
    message: String(body.coverNote ?? body.message ?? '').trim(),
    extra: {
      role: String(body.role ?? '').trim(),
      experience: String(body.experience ?? '').trim(),
      portfolio: String(body.portfolio ?? '').trim(),
    },
  }),
};

for (const [formType, shape] of Object.entries(PUBLIC_FORMS)) {
  submissionsRouter.post(`/${formType}`, submitLimiter, async (req, res, next) => {
    try {
      const { errors, clean } = validate(req.body);
      if (Object.keys(errors).length) {
        return res.status(422).json({ ok: false, errors });
      }

      const doc = await Submission.create({
        formType,
        ...clean,
        ...shape(req.body),
        meta: {
          page: String(req.body.page ?? ''),
          userAgent: req.headers['user-agent'] ?? '',
          ip: req.ip ?? '',
        },
      });

      return res.status(201).json({ ok: true, id: doc._id });
    } catch (err) {
      return next(err);
    }
  });
}

/* ── Admin: everything below needs a token ────────────────────────────── */

submissionsRouter.use(requireAdmin);

/** Paged, filterable list for the admin table. */
submissionsRouter.get('/', async (req, res, next) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(5, Number(req.query.limit) || 20));
    const { formType, status, q } = req.query;

    const filter = {};
    if (formType && formType !== 'all') filter.formType = formType;
    if (status && status !== 'all') filter.status = status;
    if (q) {
      const rx = new RegExp(String(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      filter.$or = [{ name: rx }, { email: rx }, { phone: rx }, { message: rx }];
    }

    const [items, total] = await Promise.all([
      Submission.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      Submission.countDocuments(filter),
    ]);

    res.json({ ok: true, items, total, page, pages: Math.ceil(total / limit) || 1 });
  } catch (err) {
    next(err);
  }
});

/** Counts behind the dashboard tiles. */
submissionsRouter.get('/stats', async (_req, res, next) => {
  try {
    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const [byType, byStatus, total, thisWeek, recent] = await Promise.all([
      Submission.aggregate([{ $group: { _id: '$formType', count: { $sum: 1 } } }]),
      Submission.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
      Submission.countDocuments(),
      Submission.countDocuments({ createdAt: { $gte: since } }),
      Submission.find().sort({ createdAt: -1 }).limit(6).lean(),
    ]);

    const toMap = (rows) => Object.fromEntries(rows.map((r) => [r._id, r.count]));

    res.json({
      ok: true,
      total,
      thisWeek,
      byType: toMap(byType),
      byStatus: toMap(byStatus),
      recent,
    });
  } catch (err) {
    next(err);
  }
});

submissionsRouter.get('/:id', async (req, res, next) => {
  try {
    const doc = await Submission.findById(req.params.id).lean();
    if (!doc) return res.status(404).json({ ok: false, error: 'Not found.' });
    res.json({ ok: true, item: doc });
  } catch (err) {
    next(err);
  }
});

/** Only the fields the admin screen actually edits. */
submissionsRouter.patch('/:id', async (req, res, next) => {
  try {
    const update = {};
    if (req.body.status) update.status = req.body.status;
    if (req.body.notes !== undefined) update.notes = String(req.body.notes).slice(0, 2000);

    const doc = await Submission.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    }).lean();

    if (!doc) return res.status(404).json({ ok: false, error: 'Not found.' });
    res.json({ ok: true, item: doc });
  } catch (err) {
    next(err);
  }
});

submissionsRouter.delete('/:id', async (req, res, next) => {
  try {
    const doc = await Submission.findByIdAndDelete(req.params.id).lean();
    if (!doc) return res.status(404).json({ ok: false, error: 'Not found.' });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});
