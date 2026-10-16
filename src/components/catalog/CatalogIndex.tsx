import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { entriesIn, entryPath, type CatalogSection } from '@/data/catalog';
import { photo, type PhotoKey } from '@/constants/media';
import { icon } from '@/components/home/icons';
import { Reveal, Section } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';
import PageHero from '@/components/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';

const COPY: Record<CatalogSection, { title: string; description: string; image: PhotoKey }> = {
  services: {
    title: 'Web, App & Digital Marketing Services',
    description:
      'Website development, mobile apps, UI/UX design, SEO, digital marketing and cloud services from one team in Noida, India.',
    image: 'teamDesk',
  },
  solutions: {
    title: 'Business Software & AI Solutions',
    description:
      'Custom CRM, ERP, HRMS and POS software, AI development, AI agents and SaaS products built around how your business works.',
    image: 'dataChart',
  },
  industries: {
    title: 'Software & App Development by Industry',
    description:
      'Websites and apps for e-commerce, healthcare, real estate, education, logistics, fintech, food delivery and more.',
    image: 'cityIndia',
  },
};

/** Card grid listing one section of the catalogue. */
export default function CatalogIndex({ section }: { section: CatalogSection }) {
  const { title, description, image } = COPY[section];
  const entries = entriesIn(section);

  usePageMeta({ title, description, path: `/${section}` });

  return (
    <div className="animate-fade-in">
      <PageHero image={image} title={title} subtitle={description} />

      <Section band="canvas">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry, i) => {
            const Icon = icon(entry.icon);
            return (
              <Reveal key={entry.slug} delay={Math.min(i, 8) * 50}>
                <Link
                  to={entryPath(entry)}
                  className="media-card surface-card h-full flex flex-col overflow-hidden hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <span className="relative block h-32 overflow-hidden">
                    <img
                      src={photo(entry.photo, 600)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="media-card__img absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-surface via-surface/35 to-transparent" />
                  </span>

                  <span className="relative px-6 pb-6 -mt-7 flex flex-col flex-1">
                    <span className="w-12 h-12 rounded-2xl bg-job-tag-bg border border-border flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </span>
                    <h2 className="font-bold text-text-main text-lg mb-2 leading-snug">{entry.label}</h2>
                    <p className="text-text-sub text-sm leading-relaxed flex-1">{entry.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-bold mt-4">
                      Learn more
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <BuildTogether />
    </div>
  );
}
