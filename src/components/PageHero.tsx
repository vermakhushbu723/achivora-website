import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import type { PhotoKey } from '@/constants/media';
import HeroBackdrop from '@/components/media/HeroBackdrop';

/** The photo-backed banner at the top of every inner page. */
export default function PageHero({
  image,
  title,
  subtitle,
  crumbs,
  children,
}: {
  image: PhotoKey;
  title: ReactNode;
  subtitle?: string;
  /** Trail between "Home" and the current page, which is not linked. */
  crumbs?: { label: string; to?: string }[];
  /** CTAs under the subtitle. */
  children?: ReactNode;
}) {
  return (
    <section className="relative py-12 overflow-hidden bg-hero-gradient">
      <HeroBackdrop image={image} intensity="strong" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/60 mb-5">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-2">
                <ChevronRight className="h-3.5 w-3.5" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-white transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-white/75 leading-relaxed">{subtitle}</p>
          )}
          {children && <div className="flex flex-wrap gap-3 mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
