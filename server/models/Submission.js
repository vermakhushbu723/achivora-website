import mongoose from 'mongoose';

/**
 * Every public form lands in one collection.
 *
 * The three forms share most of their shape — who got in touch, how to
 * reach them, and what they said — so splitting them into three collections
 * would mean three near-identical admin screens and no way to see the inbox
 * as one list. `formType` keeps them apart where it matters, and `extra`
 * holds the handful of fields only one form collects.
 */
const submissionSchema = new mongoose.Schema(
  {
    formType: {
      type: String,
      required: true,
      enum: ['contact', 'enquiry', 'application'],
      index: true,
    },

    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    phone: { type: String, trim: true, maxlength: 40 },
    message: { type: String, trim: true, maxlength: 5000 },

    /* Form-specific fields: budget + NDA for an enquiry, role + experience
       for an application, subject for a contact note. */
    extra: { type: mongoose.Schema.Types.Mixed, default: {} },

    status: {
      type: String,
      enum: ['new', 'in-progress', 'done', 'archived'],
      default: 'new',
      index: true,
    },
    notes: { type: String, default: '', maxlength: 2000 },

    /* Light provenance, useful when the same person writes in twice. */
    meta: {
      page: { type: String, default: '' },
      userAgent: { type: String, default: '' },
      ip: { type: String, default: '' },
    },
  },
  { timestamps: true },
);

/* The admin list is always "newest first, optionally filtered by type". */
submissionSchema.index({ createdAt: -1 });
submissionSchema.index({ formType: 1, createdAt: -1 });

export const Submission = mongoose.model('Submission', submissionSchema);
