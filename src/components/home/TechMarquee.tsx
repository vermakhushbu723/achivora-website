import { useState } from 'react';
import { TECHNOLOGIES } from '@/constants/site';
import { techIconSrc } from '@/constants/techIcons';
import { Section, SectionHeading } from './Section';

/** Splits the stack into three rows so the marquee reads as a dense wall. */
function rows<T>(items: T[], count: number): T[][] {
  const out: T[][] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => out[i % count].push(item));
  return out;
}

/**
 * One marquee chip: logo + name. The CDN serves most marks as `-original`,
 * a handful only as `-plain`, and a few not at all — so the image walks that
 * ladder on error and ends on a lettered tile rather than a broken icon.
 */
function TechChip({ tech }: { tech: string }) {
  const [variant, setVariant] = useState<'original' | 'plain' | 'letter'>('original');
  const src = variant === 'letter' ? null : techIconSrc(tech, variant);

  return (
    <span className="group flex items-center gap-2.5 whitespace-nowrap pl-3 pr-5 py-2.5 rounded-xl bg-tint-blue border border-border text-text-main text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default">
      <span className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center shrink-0 overflow-hidden">
        {src ? (
          <img
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-5 h-5 object-contain"
            onError={() => setVariant(variant === 'original' ? 'plain' : 'letter')}
          />
        ) : (
          <span className="text-primary font-black text-xs">{tech.charAt(0)}</span>
        )}
      </span>
      {tech}
    </span>
  );
}

export default function TechMarquee() {
  const lanes = rows(TECHNOLOGIES, 3);
  const durations = ['42s', '52s', '46s'];

  return (
    <Section id="technologies" band="surface">
      <SectionHeading
        eyebrow="Technologies We Work With"
        title="Digitize Your Business with Modern Technologies"
        subtitle="A stack chosen for what the product needs, not for what is fashionable this year"
      />

      <div className="space-y-4">
        {lanes.map((lane, laneIndex) => (
          <div
            key={laneIndex}
            className={`marquee ${laneIndex % 2 === 1 ? 'marquee--reverse' : ''}`}
            style={{ ['--marquee-duration' as string]: durations[laneIndex] }}
          >
            {[0, 1].map((track) => (
              <div className="marquee__track" key={track} aria-hidden={track === 1}>
                {lane.map((tech) => (
                  <TechChip key={`${track}-${tech}`} tech={tech} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
