import { Award, Heart, Target } from 'lucide-react';
import { STATS, VALUE_PROP } from '@/constants/site';
import { photo } from '@/constants/media';
import { Reveal, Section, SectionHeading } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';
import PageHero from '@/components/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';

const VALUES = [
  {
    icon: Target,
    title: 'Business first',
    description: 'We start from the outcome you need and pick the technology after, not before.',
  },
  {
    icon: Award,
    title: 'Quality you can see',
    description: 'Code review, testing and a working demo every two weeks — no surprises at the end.',
  },
  {
    icon: Heart,
    title: 'Long-term partners',
    description: 'Most clients stay with us after launch for support, updates and new features.',
  },
];

/** The company's real history: founded in 2024. */
const MILESTONES = [
  { year: '2024', title: 'Founded in Noida', description: 'Started building websites and apps for Indian businesses.' },
  { year: '2025', title: 'First 20 projects', description: 'Grew into a full in-house team of developers, designers and QA.' },
  { year: '2026', title: '35+ projects', description: 'Serving clients in 20+ cities with a 98% retention rate.' },
];

export default function AboutPage() {
  usePageMeta({
    title: 'About Achivora — Web & App Development Company in Noida',
    description:
      'Achivora is a web design, app and software development company in Noida Sector 62, founded in 2024. 35+ projects delivered for businesses across India.',
    path: '/about',
  });

  return (
    <div className="animate-fade-in">
      <PageHero
        image="teamWhiteboard"
        title="About Achivora"
        subtitle="A web, app and software development team in Noida, building digital products for businesses across India."
      />

      <Section band="surface">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Reveal variant="left">
            <div className="rounded-2xl overflow-hidden shadow-card border border-border aspect-[4/3]">
              <img
                src={photo('teamStandup', 1000)}
                alt="The Achivora team at work"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal variant="right">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-main leading-tight">
              Your technology partner since 2024
            </h2>
            {VALUE_PROP.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-text-sub leading-relaxed">
                {p}
              </p>
            ))}

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-7">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl font-black text-primary tabular-nums">
                    {s.value}
                    {s.suffix}
                  </dd>
                  <dd className="text-xs text-text-sub mt-1">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section band="canvas">
        <SectionHeading title="How we work" />
        <div className="grid sm:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="surface-card h-full p-6">
                <span className="w-12 h-12 bg-job-tag-bg rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="text-lg font-bold text-text-main mb-2">{v.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <ol className="max-w-3xl mx-auto mt-12 grid sm:grid-cols-3 gap-6">
          {MILESTONES.map((m) => (
            <li key={m.title} className="border-l-2 border-primary pl-4">
              <p className="text-xl font-black text-primary">{m.year}</p>
              <p className="font-bold text-text-main mt-1">{m.title}</p>
              <p className="text-sm text-text-sub mt-1">{m.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <BuildTogether />
    </div>
  );
}
