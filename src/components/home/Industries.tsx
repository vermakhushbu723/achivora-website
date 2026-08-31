import { useNavigate } from '@tanstack/react-router';
import { INDUSTRIES } from '@/constants/site';
import { icon } from './icons';
import { Reveal, Section, SectionHeading } from './Section';

export default function Industries() {
  const navigate = useNavigate();

  return (
    <Section id="industries" band="canvas">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Customized Digital Solutions For Every Industry"
        subtitle="Domain knowledge that means we are not learning your business on your budget"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {INDUSTRIES.map((industry, i) => {
          const Icon = icon(industry.icon);
          return (
            <Reveal key={industry.label} delay={i * 50}>
              <button
                onClick={() => navigate({ to: '/industries' })}
                className="surface-card w-full h-full p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <span className="w-14 h-14 rounded-2xl bg-job-tag-bg flex items-center justify-center transition-colors duration-300 group-hover:bg-primary">
                  <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
                </span>
                <span className="text-text-main font-semibold text-sm leading-snug">
                  {industry.label}
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
