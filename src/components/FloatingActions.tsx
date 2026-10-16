import { useEffect, useState } from 'react';
import { ArrowUp, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { SITE } from '@/constants/site';

/** Call and WhatsApp pinned to the corner, plus back-to-top after scrolling. */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
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
  );
}
