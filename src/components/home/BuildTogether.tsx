import { ArrowRight, Mail } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { SITE } from '@/constants/site';
import { Reveal } from './Section';

export default function BuildTogether() {
  const navigate = useNavigate();

  const contacts = [
    { flag: '📞', label: 'Call us', value: SITE.phone, href: SITE.phoneHref },
    {
      flag: '💬',
      label: 'WhatsApp',
      value: SITE.phone,
      href: SITE.whatsapp,
      external: true,
    },
  ];

  return (
    <section className="relative py-20 bg-primary-gradient overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white border border-white/20">
              Let's Build Together
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Let's Build Smarter Digital Solutions Together
            </h2>
            <p className="mt-4 text-lg text-white/75 leading-relaxed max-w-xl">
              Need a new website, an AI solution, a mobile app or custom software?
              Tell us what you are trying to achieve and we will map out the path.
            </p>

            <button
              onClick={() => navigate({ to: '/contact' })}
              className="btn-white text-base px-8 py-3.5 mt-8"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
          </Reveal>

          <Reveal variant="right">
            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-colors"
                >
                  <p className="text-2xl mb-2">{contact.flag}</p>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                    {contact.label}
                  </p>
                  <p className="text-white font-bold text-lg mt-1">{contact.value}</p>
                </a>
              ))}

              <a
                href={SITE.emailHref}
                className="sm:col-span-2 bg-white rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
              >
                <span className="w-12 h-12 rounded-xl bg-job-tag-bg flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </span>
                <span className="min-w-0">
                  <span className="block text-text-sub text-xs font-semibold uppercase tracking-widest">
                    Email us
                  </span>
                  <span className="block text-text-main font-bold text-lg truncate">
                    {SITE.email}
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
