import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { SOLUTIONS } from '@/constants/site';
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
                className="surface-card h-full w-full p-7 text-left flex flex-col hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Brand wash that sweeps in on hover */}
                <span className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="w-14 h-14 rounded-2xl bg-job-tag-bg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="font-bold text-text-main text-lg mb-2 pr-8">
                  {solution.title}
                </h3>
                <p className="text-text-sub text-sm leading-relaxed flex-1">
                  {solution.description}
                </p>

                <ArrowUpRight className="absolute top-7 right-7 h-5 w-5 text-text-hint group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
