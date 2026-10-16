import { ArrowRight, Check } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SECTION_LABEL, entriesIn, entryPath, type CatalogEntry } from '@/data/catalog';
import { photo } from '@/constants/media';
import { icon } from '@/components/home/icons';
import { Reveal, Section, SectionHeading } from '@/components/home/Section';
import PageHero from '@/components/PageHero';
import ReachOut from '@/components/home/ReachOut';
import { AppScreensSection } from '@/components/showcase/AppShowcase';
import { resolveDomain } from '@/data/appDomains';
import { usePageMeta } from '@/hooks/usePageMeta';

/** One template for every service, solution and industry page. */
export default function CatalogDetail({ entry }: { entry: CatalogEntry }) {
  const sectionLabel = SECTION_LABEL[entry.section];
  const domain = resolveDomain(entry.slug);
  const related = entriesIn(entry.section).filter((e) => e.slug !== entry.slug);

  usePageMeta({ title: entry.title, description: entry.description, path: entryPath(entry) });

  return (
    <div className="animate-fade-in">
      <PageHero
        image={entry.photo}
        title={entry.title}
        subtitle={entry.description}
        crumbs={[{ label: sectionLabel, to: `/${entry.section}` }, { label: entry.label }]}
      >
        <Link to="/contact" className="btn-white text-base px-8 py-3.5">
          Get a Free Quote
          <ArrowRight className="h-5 w-5" />
        </Link>
      </PageHero>

      {/* Overview and what is included */}
      <Section band="surface">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
          <Reveal variant="left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-main leading-tight">
              {entry.label} by Achivora
            </h2>
            <p className="mt-4 text-text-body leading-relaxed">{entry.intro}</p>

            {entry.merged.length > 0 && (
              <p className="mt-5 text-sm text-text-sub leading-relaxed">
                <span className="font-semibold text-text-main">Also covers: </span>
                {entry.merged.map((x) => x.label).join(' · ')}
              </p>
            )}
          </Reveal>

          <Reveal variant="right">
            <div className="rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
              <img
                src={photo(entry.photo, 900)}
                alt={entry.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {entry.offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="surface-card h-full p-5">
                <span className="w-10 h-10 rounded-xl bg-job-tag-bg flex items-center justify-center mb-4">
                  <Check className="h-5 w-5 text-primary" />
                </span>
                <h3 className="font-bold text-text-main text-base mb-2">{item.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-8">
          <span className="text-sm font-semibold text-text-main mr-1">Built with:</span>
          {entry.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-tint-blue border border-border text-text-sub text-xs font-semibold"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* Product screens, for app and platform builds that have a set */}
      {domain.key !== 'default' && <AppScreensSection domain={domain} />}

      {/* FAQ + related pages */}
      <Section band="canvas">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <SectionHeading align="left" eyebrow="FAQ" title={`${entry.label} — common questions`} />
            <Accordion type="single" collapsible className="space-y-3">
              {entry.faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}`}
                  className="surface-card px-5 border border-border data-[state=open]:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-text-main hover:text-primary hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-sub text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <SectionHeading align="left" eyebrow="Explore" title={`More ${sectionLabel.toLowerCase()}`} />
            <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {related.map((item) => {
                const RelIcon = icon(item.icon);
                return (
                  <li key={item.slug}>
                    <Link
                      to={entryPath(item)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border text-sm font-semibold text-text-main hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      <RelIcon className="h-4 w-4 text-primary shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      <ReachOut />
    </div>
  );
}
