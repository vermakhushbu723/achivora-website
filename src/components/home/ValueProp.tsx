import { CheckCircle2 } from 'lucide-react';
import { STATS, VALUE_PROP } from '@/constants/site';
import { useCountUp, useReveal } from '@/hooks/useReveal';
import { Reveal, Section } from './Section';

function Stat({ value, suffix, label, active }: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const shown = useCountUp(value, active);

  return (
    <div className="text-center px-2 py-5">
      <p className="text-3xl lg:text-4xl font-black text-white leading-none tabular-nums">
        {shown.toLocaleString('en-US')}
        {suffix}
      </p>
      <p className="text-white/60 text-xs sm:text-sm font-medium mt-2">{label}</p>
    </div>
  );
}

export default function ValueProp() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.3);

  const highlights = [
    'Product thinking before a single line of code',
    'Senior engineers on every engagement',
    'Code and infrastructure you fully own',
  ];

  return (
    <Section band="canvas">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal variant="left">
          <span className="eyebrow">{VALUE_PROP.eyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-text-main leading-tight">
            {VALUE_PROP.title}
          </h2>
          {VALUE_PROP.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-text-sub leading-relaxed">
              {p}
            </p>
          ))}

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span className="text-text-main text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Stats panel */}
        <Reveal variant="right">
          <div
            ref={ref}
            className="relative rounded-3xl bg-primary-gradient p-8 shadow-card-hover overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <p className="relative text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              By the numbers
            </p>
            <p className="relative text-white font-bold text-lg mb-4">
              A decade of shipped work
            </p>

            <div className="relative grid grid-cols-2 gap-px bg-white/15 rounded-2xl overflow-hidden">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-primary/0 backdrop-blur-[1px]">
                  <Stat {...stat} active={shown} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
