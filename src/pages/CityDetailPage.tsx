import { useEffect } from 'react';
import { ArrowRight, Check, ChevronRight, MapPin, Phone } from 'lucide-react';
import { useNavigate, useParams } from '@tanstack/react-router';
import { CITY_CATALOG } from '@/data/cities';
import { SITE } from '@/constants/site';
import { icon } from '@/components/home/icons';
import { Reveal, Section, SectionHeading } from '@/components/home/Section';
import ProcessSteps from '@/components/home/ProcessSteps';
import Recognition from '@/components/home/Recognition';
import BuildTogether from '@/components/home/BuildTogether';
import NotFoundPage from './NotFoundPage';
import HeroBackdrop from '@/components/media/HeroBackdrop';

export default function CityDetailPage() {
  const { slug } = useParams({ strict: false }) as { slug?: string };
  const navigate = useNavigate();
  const entry = CITY_CATALOG.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!entry) return <NotFoundPage />;

  const Icon = icon(entry.icon);

  // Other services in the same city, plus the same service in nearby cities.
  const sameCity = CITY_CATALOG.filter(
    (c) => c.city === entry.city && c.slug !== entry.slug,
  );
  const sameService = CITY_CATALOG.filter(
    (c) => c.serviceSlug === entry.serviceSlug && c.city !== entry.city,
  ).slice(0, 8);

  const reasons = [
    {
      title: `A team that knows the ${entry.city} market`,
      description: `We work with businesses across ${entry.state}, so we understand the customers you are actually selling to.`,
    },
    {
      title: 'Meet in person or work remotely',
      description: `Happy to visit you in ${entry.city} for workshops and reviews, or run the whole engagement remotely if that suits you better.`,
    },
    {
      title: 'Transparent, India-based pricing',
      description: 'Quoted in rupees, scoped before we start, with no surprise line items when the invoice arrives.',
    },
    {
      title: 'Support in your timezone',
      description: 'IST working hours, with an agreed response time for anything urgent after launch.',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative pt-12 pb-12 overflow-hidden bg-hero-gradient">
        <HeroBackdrop image="cityNight" intensity="medium" />
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={entry.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <button onClick={() => navigate({ to: '/' })} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="h-3.5 w-3.5" />
            <button onClick={() => navigate({ to: '/locations' })} className="hover:text-white transition-colors">
              Locations
            </button>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/90">{entry.city}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white border border-white/20">
              <MapPin className="h-3.5 w-3.5" />
              {entry.city}, {entry.state}
            </span>

            <div className="flex items-start gap-5 mt-5">
              <span className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 items-center justify-center shrink-0">
                <Icon className="h-8 w-8 text-white" />
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1]">
                {entry.service} in <span className="text-primary">{entry.city}</span>
              </h1>
            </div>

            <p className="mt-5 text-lg text-white/75 leading-relaxed">{entry.tagline}</p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button onClick={() => navigate({ to: '/contact' })} className="btn-white text-base px-8 py-3.5">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-200 text-base"
              >
                <Phone className="h-5 w-5" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why us in this city */}
      <Section band="surface">
        <SectionHeading
          eyebrow={`Serving ${entry.city}`}
          title={`Why businesses in ${entry.city} work with Achivora`}
          subtitle={`We have delivered projects for clients across ${entry.state} and the wider region.`}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <div className="surface-card h-full p-5 flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-job-tag-bg flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-bold text-text-main text-base mb-2">{reason.title}</h3>
                  <p className="text-text-sub text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ProcessSteps />

      {/* Other services in this city */}
      {sameCity.length > 0 && (
        <Section band="surface">
          <SectionHeading
            eyebrow="More In This City"
            title={`Other services we offer in ${entry.city}`}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sameCity.map((item, i) => {
              const ItemIcon = icon(item.icon);
              return (
                <Reveal key={item.slug} delay={i * 60}>
                  <button
                    onClick={() => navigate({ to: `/locations/${item.slug}` })}
                    className="surface-card h-full w-full p-6 text-left flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <span className="w-11 h-11 rounded-xl bg-job-tag-bg flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary">
                      <ItemIcon className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                    </span>
                    <span className="font-bold text-text-main text-sm leading-snug">
                      {item.service}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </Section>
      )}

      {/* Same service, other cities */}
      {sameService.length > 0 && (
        <Section band="canvas">
          <SectionHeading
            eyebrow="Other Locations"
            title={`${entry.service} in other cities`}
          />

          <div className="flex flex-wrap justify-center gap-2">
            {sameService.map((item) => (
              <button
                key={item.slug}
                onClick={() => navigate({ to: `/locations/${item.slug}` })}
                className="px-4 py-2 rounded-full bg-surface border border-border text-text-sub text-sm font-semibold hover:text-primary hover:border-primary/40 transition-colors"
              >
                {item.city}
              </button>
            ))}
          </div>
        </Section>
      )}

      <Recognition />
      <BuildTogether />
    </div>
  );
}
