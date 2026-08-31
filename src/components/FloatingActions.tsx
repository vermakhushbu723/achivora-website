import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle, Phone, X } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useNavigate } from '@tanstack/react-router';
import { SITE } from '@/constants/site';

/**
 * Sticky helpers pinned to the viewport: WhatsApp, call, a quick-inquiry tab
 * on the right edge, and a back-to-top button that appears after scrolling.
 */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Quick Inquiry tab, vertical on the right edge */}
      <button
        onClick={() => setInquiryOpen(true)}
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 items-center gap-2 bg-primary text-white font-semibold text-sm px-3 py-4 rounded-l-xl shadow-cta hover:bg-primary-dark transition-colors"
        style={{ writingMode: 'vertical-rl' }}
      >
        <MessageCircle className="h-4 w-4 rotate-90" />
        Quick Inquiry
      </button>

      {/* Floating action stack */}
      <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="w-12 h-12 rounded-full bg-surface border border-border text-text-main shadow-card flex items-center justify-center hover:bg-job-tag-bg hover:text-primary transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        <a
          href={SITE.phoneHref}
          aria-label="Call us"
          className="w-12 h-12 rounded-full bg-primary text-white shadow-cta flex items-center justify-center hover:bg-primary-dark transition-colors"
        >
          <Phone className="h-5 w-5" />
        </a>

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-success text-white shadow-card flex items-center justify-center hover:brightness-110 transition-all"
        >
          <SiWhatsapp className="h-5 w-5" />
        </a>
      </div>

      {/* Quick inquiry dialog */}
      {inquiryOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191919]/60 backdrop-blur-sm"
          onClick={() => setInquiryOpen(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-md bg-surface rounded-2xl border border-border shadow-card-hover p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setInquiryOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-lg flex items-center justify-center text-text-sub hover:bg-tint-blue hover:text-text-main transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="eyebrow">Quick Inquiry</span>
            <h3 className="mt-3 text-2xl font-extrabold text-text-main leading-tight">
              Let's build something great together
            </h3>
            <p className="mt-2 text-text-sub text-sm leading-relaxed">
              Tell us briefly what you need and we will get back within one working
              day. Your idea stays protected under our NDA.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={() => {
                  setInquiryOpen(false);
                  navigate({ to: '/contact' });
                }}
                className="btn-primary w-full py-3"
              >
                Open the full enquiry form
              </button>
              <a href={SITE.emailHref} className="btn-secondary w-full py-3">
                Email {SITE.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
