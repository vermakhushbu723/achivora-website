import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { SOLUTIONS } from '@/constants/site';
import { photoForSlug } from '@/constants/media';
import { icon } from './icons';
import { Reveal, Section, SectionHeading } from './Section';

export default function SolutionsGrid() {
  const navigate = useNavigate();

  return (
    <Section id="solutions" band="surface">
      <SectionHeading
        eyebrow="Intelligent Business Solutions"
        title="Custom-Built Solutions for a Smarter, Scalable Business"
        subtitle="Ready-to-deploy platforms, tailored to how your teams actually operate"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SOLUTIONS.map((solution, i) => {
          const Icon = icon(solution.icon);
          return (
            <Reveal key={solution.title} delay={i * 80}>
              <button
                onClick={() => navigate({ to: '/solutions' })}
                className="media-card surface-card h-full w-full text-left flex flex-col hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Photograph banner, faded into the card surface */}
                <span className="relative block h-32 overflow-hidden">
                  <img
                    src={photoForSlug(solution.title, 600)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="media-card__img absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                </span>

                {/* Brand wash that sweeps in on hover */}
                <span className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <span className="relative px-7 pb-7 -mt-7 flex flex-col flex-1">
                  <span className="w-14 h-14 rounded-2xl bg-job-tag-bg border border-border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-primary" />
                  </span>

                  <h3 className="font-bold text-text-main text-lg mb-2 pr-8">
                    {solution.title}
                  </h3>
                  <p className="text-text-sub text-sm leading-relaxed flex-1">
                    {solution.description}
                  </p>
                </span>

                <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all drop-shadow" />
              </button>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
