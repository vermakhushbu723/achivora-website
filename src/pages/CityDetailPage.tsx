import { ArrowRight, Check, Phone } from 'lucide-react';
import { Link, useParams } from '@tanstack/react-router';
import { CITIES } from '@/data/cities';
import { findEntry, entryPath } from '@/data/catalog';
import { SITE } from '@/constants/site';
import { icon } from '@/components/home/icons';
import { Section, SectionHeading } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';
import PageHero from '@/components/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';
import NotFoundPage from './NotFoundPage';

/** The services each city page points to — the keywords the old per-service city pages targeted. */
const CITY_SERVICES = [
  findEntry('services', 'web-development'),
  findEntry('services', 'web-design'),
  findEntry('services', 'mobile-app-development'),
  findEntry('industries', 'e-commerce-development'),
  findEntry('services', 'seo-services'),
  findEntry('services', 'digital-marketing'),
].filter((e) => e !== undefined);

export default function CityDetailPage() {
  const { slug } = useParams({ strict: false }) as { slug?: string };
  const entry = CITIES.find((c) => c.slug === slug);

  usePageMeta({
    title: entry ? `Web Development Company in ${entry.city}` : 'Page not found',
    description: entry
      ? `Website design, web development, mobile app development, e-commerce, SEO and digital marketing for businesses in ${entry.city}, ${entry.state}.`
      : '',
    path: `/locations/${slug ?? ''}`,
  });

  if (!entry) return <NotFoundPage />;

  const others = CITIES.filter((c) => c.slug !== entry.slug);
  const reasons = [
    `Fixed quotes in rupees, agreed before work starts`,
    `In-person meetings across Delhi NCR, video calls everywhere else`,
    `Support in IST working hours after launch`,
    `You own the code, design and hosting accounts`,
  ];

  return (
    <div className="animate-fade-in">
      <PageHero
        image="cityNight"
        title={
          <>
            Web Development Company in <span className="text-primary">{entry.city}</span>
          </>
        }
        subtitle={`Achivora helps businesses in ${entry.city}, ${entry.state} with website design, mobile apps, e-commerce stores, SEO and digital marketing.`}
        crumbs={[{ label: 'Locations', to: '/locations' }, { label: entry.city }]}
      >
        <Link to="/contact" className="btn-white text-base px-8 py-3.5">
          Get a Free Quote
          <ArrowRight className="h-5 w-5" />
        </Link>
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-200 text-base"
        >
          <Phone className="h-5 w-5" />
          {SITE.phone}
        </a>
      </PageHero>

      <Section band="surface">
        <SectionHeading
          title={`Our services in ${entry.city}`}
          subtitle={`Everything a ${entry.city} business needs to get found and sell online, from one team.`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CITY_SERVICES.map((s) => {
            const Icon = icon(s.icon);
            return (
              <Link
                key={s.slug}
                to={entryPath(s)}
                className="surface-card h-full p-5 flex gap-4 hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="w-11 h-11 rounded-xl bg-job-tag-bg flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary">
                  <Icon className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-bold text-text-main text-base mb-1">
                    {s.label} in {entry.city}
                  </span>
                  <span className="block text-text-sub text-sm leading-relaxed">{s.intro.split('. ')[0].replace(/\.$/, '')}.</span>
                </span>
              </Link>
            );
          })}
        </div>

        <ul className="grid sm:grid-cols-2 gap-3 mt-10 max-w-3xl mx-auto">
          {reasons.map((r) => (
            <li key={r} className="flex items-start gap-3 text-sm text-text-main">
              <Check className="h-5 w-5 text-success shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </Section>

      <Section band="canvas">
        <SectionHeading title="Other cities we serve" />
        <div className="flex flex-wrap justify-center gap-2">
          {others.map((c) => (
            <Link
              key={c.slug}
              to="/locations/$slug"
              params={{ slug: c.slug }}
              className="px-4 py-2 rounded-full bg-surface border border-border text-text-sub text-sm font-semibold hover:text-primary hover:border-primary/40 transition-colors"
            >
              {c.city}
            </Link>
          ))}
        </div>
      </Section>

      <BuildTogether />
    </div>
  );
}
