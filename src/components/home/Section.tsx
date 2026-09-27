import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Band = 'canvas' | 'surface' | 'gradient';

const BAND: Record<Band, string> = {
  canvas: 'bg-tint-blue',
  surface: 'bg-surface',
  gradient: 'bg-primary-gradient',
};

/** Standard marketing band: consistent vertical rhythm and max width. */
export function Section({
  id,
  band = 'canvas',
  className = '',
  children,
}: {
  id?: string;
  band?: Band;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-12 ${BAND[band]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/**
 * Eyebrow + title + subtitle stack used at the top of nearly every section.
 * `onDark` flips the palette for gradient bands.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  onDark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  onDark?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'is-shown' : ''} mb-8 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      {eyebrow && (
        <span
          className={
            onDark
              ? 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white border border-white/20'
              : 'eyebrow'
          }
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-2xl md:text-3xl font-extrabold leading-tight ${
          onDark ? 'text-white' : 'text-text-main'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-lg leading-relaxed ${
            align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-3xl'
          } ${onDark ? 'text-white/75' : 'text-text-sub'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Wraps any block in the shared scroll-reveal transition. */
export function Reveal({
  children,
  delay = 0,
  variant = 'up',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  variant?: 'up' | 'left' | 'right';
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const base =
    variant === 'left' ? 'reveal-left' : variant === 'right' ? 'reveal-right' : 'reveal';

  return (
    <div
      ref={ref}
      className={`${base} ${shown ? 'is-shown' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
