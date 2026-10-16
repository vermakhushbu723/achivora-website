import { Link } from '@tanstack/react-router';
import { entriesIn, entryPath } from '@/data/catalog';
import { icon } from './icons';
import { Reveal, Section, SectionHeading } from './Section';

export default function Industries() {
  return (
    <Section id="industries" band="canvas">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Apps & Software for Every Industry"
        subtitle="Domain knowledge that means we are not learning your business on your budget"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {entriesIn('industries').map((industry, i) => {
          const Icon = icon(industry.icon);
          return (
            <Reveal key={industry.slug} delay={Math.min(i, 10) * 40}>
              <Link
                to={entryPath(industry)}
                className="surface-card h-full flex items-center gap-3 p-4 hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="w-10 h-10 rounded-xl bg-job-tag-bg flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary">
                  <Icon className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                </span>
                <span className="text-text-main font-semibold text-sm leading-snug">{industry.label}</span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
