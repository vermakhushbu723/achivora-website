import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { submitForm, type ApiError } from '@/lib/api';

const FIELD =
  'w-full h-11 px-3.5 rounded-xl bg-input-bg border border-border text-text-main text-sm placeholder:text-text-hint focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors';

/**
 * Job application form.
 *
 * "Apply Now" used to be a mailto link, which meant the application only
 * arrived if the visitor had a mail client configured and nothing was ever
 * recorded. This posts to the API instead, so every application lands in
 * the admin inbox next to the other forms.
 */
export default function ApplyDialog({
  role,
  open,
  onOpenChange,
}: {
  role: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);

    try {
      await submitForm('application', {
        role,
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        experience: data.get('experience'),
        portfolio: data.get('portfolio'),
        coverNote: data.get('coverNote'),
      });
      toast.success('Application received', {
        description: `We will review your profile for ${role} and get back to you.`,
      });
      form.reset();
      onOpenChange(false);
    } catch (err) {
      const { message, fields } = err as ApiError;
      toast.error('Could not send the application', {
        description: fields ? Object.values(fields)[0] : message,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-surface border-border">
        <DialogHeader>
          <DialogTitle className="text-text-main">Apply for {role}</DialogTitle>
          <DialogDescription className="text-text-sub">
            Tell us a little about yourself. Fields marked * are required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 mt-1">
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="ap-name" className="block text-xs font-semibold text-text-main mb-1.5">
                Full Name <span className="text-error">*</span>
              </label>
              <input id="ap-name" name="name" required placeholder="Your name" className={FIELD} />
            </div>
            <div>
              <label htmlFor="ap-email" className="block text-xs font-semibold text-text-main mb-1.5">
                Email <span className="text-error">*</span>
              </label>
              <input
                id="ap-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={FIELD}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="ap-phone" className="block text-xs font-semibold text-text-main mb-1.5">
                Phone
              </label>
              <input id="ap-phone" name="phone" type="tel" placeholder="+91 00000 00000" className={FIELD} />
            </div>
            <div>
              <label htmlFor="ap-exp" className="block text-xs font-semibold text-text-main mb-1.5">
                Experience
              </label>
              <input id="ap-exp" name="experience" placeholder="e.g. 4 years" className={FIELD} />
            </div>
          </div>

          <div>
            <label htmlFor="ap-portfolio" className="block text-xs font-semibold text-text-main mb-1.5">
              Portfolio / LinkedIn / Resume link
            </label>
            <input
              id="ap-portfolio"
              name="portfolio"
              placeholder="https://"
              className={FIELD}
            />
          </div>

          <div>
            <label htmlFor="ap-note" className="block text-xs font-semibold text-text-main mb-1.5">
              Why this role?
            </label>
            <textarea
              id="ap-note"
              name="coverNote"
              rows={4}
              placeholder="A few lines about your work and what you are looking for…"
              className={`${FIELD} h-auto py-2.5 resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="btn-primary w-full py-2.5 text-sm disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {sending ? 'Sending…' : 'Submit Application'}
            <Send className="h-4 w-4" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
