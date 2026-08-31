import { TECHNOLOGIES } from '@/constants/site';
import { Section, SectionHeading } from './Section';

/** Splits the stack into three rows so the marquee reads as a dense wall. */
function rows<T>(items: T[], count: number): T[][] {
  const out: T[][] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => out[i % count].push(item));
  return out;
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
                  <span
                    key={`${track}-${tech}`}
                    className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-tint-blue border border-border text-text-main text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
