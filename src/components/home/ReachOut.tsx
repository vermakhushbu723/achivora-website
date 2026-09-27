import { useState, type FormEvent } from 'react';
import { MapPin, Send, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { BUDGET_OPTIONS, SITE } from '@/constants/site';
import { submitForm, type ApiError } from '@/lib/api';
import { Reveal, Section } from './Section';

const FIELD =
  'w-full h-12 px-4 rounded-xl bg-input-bg border border-border text-text-main placeholder:text-text-hint focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors';

export default function ReachOut() {
  const [sending, setSending] = useState(false);
  const [nda, setNda] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Capture the form now: React clears currentTarget once the handler returns.
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);

    try {
      await submitForm('enquiry', {
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        budget: data.get('budget'),
        brief: data.get('brief'),
        nda,
      });
      toast.success("Thanks - we'll get back to you within one working day.");
      form.reset();
      setNda(false);
    } catch (err) {
      const { message, fields } = err as ApiError;
      // A 422 names the offending input; anything else is a single message.
      toast.error(fields ? Object.values(fields)[0] : message);
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="reach-out" band="surface">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Reveal variant="left">
          <span className="eyebrow">Reach Out</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-text-main leading-tight">
            Partnering for Business Success
          </h2>
          <p className="mt-4 text-lg text-text-sub leading-relaxed">
            Let our experts discover the right solution for you. Share a brief and
            you will have a written estimate and timeline within two working days.
          </p>

          <div className="mt-8 space-y-4">
            {SITE.offices.map((office) => (
              <div key={office.country} className="surface-card p-5 flex gap-4">
                <span className="w-10 h-10 rounded-xl bg-job-tag-bg flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="font-bold text-text-main text-sm">{office.country}</p>
                  <p className="text-text-sub text-sm mt-0.5">{office.address}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-remote-bg">
            <ShieldCheck className="h-5 w-5 text-success shrink-0 mt-0.5" />
            <p className="text-sm text-text-main">
              Your ideas are fully protected under our Non-Disclosure Agreement.
            </p>
          </div>
        </Reveal>

        <Reveal variant="right">
          <form onSubmit={handleSubmit} className="surface-card p-5 sm:p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ro-name" className="block text-sm font-semibold text-text-main mb-2">
                  Full Name <span className="text-error">*</span>
                </label>
                <input id="ro-name" name="name" required placeholder="Your name" className={FIELD} />
              </div>
              <div>
                <label htmlFor="ro-email" className="block text-sm font-semibold text-text-main mb-2">
                  Email <span className="text-error">*</span>
                </label>
                <input id="ro-email" name="email" type="email" required placeholder="you@company.com" className={FIELD} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ro-phone" className="block text-sm font-semibold text-text-main mb-2">
                  Phone Number <span className="text-error">*</span>
                </label>
                <input id="ro-phone" name="phone" type="tel" required placeholder="+91 00000 00000" className={FIELD} />
              </div>
              <div>
                <label htmlFor="ro-budget" className="block text-sm font-semibold text-text-main mb-2">
                  Your Budget?
                </label>
                <select id="ro-budget" name="budget" defaultValue="" className={`${FIELD} cursor-pointer`}>
                  <option value="" disabled>
                    Select a range
                  </option>
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="ro-brief" className="block text-sm font-semibold text-text-main mb-2">
                Project Brief
              </label>
              <textarea
                id="ro-brief"
                name="brief"
                rows={5}
                placeholder="Tell us what you are building and what success looks like…"
                className={`${FIELD} h-auto py-3 resize-none`}
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={nda}
                onChange={(e) => setNda(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-border text-primary accent-primary"
              />
              <span className="text-sm text-text-sub">
                Send me a copy of the NDA before we talk.
              </span>
            </label>

            <button
              type="submit"
              disabled={sending}
              className="btn-primary w-full text-base py-3.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {sending ? 'Sending…' : 'Submit Enquiry'}
              <Send className="h-5 w-5" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
