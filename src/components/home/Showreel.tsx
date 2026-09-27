import { Sparkles } from 'lucide-react';
import { photo } from '@/constants/media';
import { STATS } from '@/constants/site';
import { Reveal } from './Section';

/**
 * Full-width photographic band between the product sections.
 *
 * Video is reserved for the hero, so this one carries a still with a slow
 * pan — the same sense of motion at none of the bandwidth.
 */
export default function Showreel() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={photo('teamDesk', 1600)}
        alt=""
        loading="lazy"
        decoding="async"
        className="hero-pan absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Scrim keeps the copy legible over whatever frame is on screen */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/60" />
      <div className="absolute inset-0 bg-primary/15 mix-blend-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white border border-white/20">
            <Sparkles className="h-3.5 w-3.5" />
            Inside Achivora
          </span>

          <h2 className="mt-3 text-2xl md:text-3xl font-black text-white leading-[1.15] max-w-2xl">
            A team that ships, not a vendor that bills
          </h2>
          <p className="mt-3 text-sm text-white/75 leading-relaxed max-w-xl">
            Designers, engineers and QA working in one room on your roadmap —
            with a demo at the end of every sprint, not a status report.
          </p>

          {/* Site-wide stats, restated over the footage */}
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3 py-3"
              >
                <p className="text-xl font-black text-primary-light tabular-nums">
                  {stat.value}
                  {stat.suffix ?? ''}
                </p>
                <p className="text-white/70 text-xs mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

    </section>
  );
}
