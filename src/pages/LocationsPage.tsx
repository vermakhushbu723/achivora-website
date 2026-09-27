import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { CITY_CATALOG, CITY_LIST } from '@/data/cities';
import { Reveal, Section, SectionHeading } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';
import HeroBackdrop from '@/components/media/HeroBackdrop';

export default function LocationsPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CITY_LIST.filter(
      (c) =>
        !q || c.city.toLowerCase().includes(q) || c.state.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative pt-12 pb-12 overflow-hidden bg-hero-gradient">
        <HeroBackdrop image="cityIndia" intensity="medium" />
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">
            Explore By Location
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-5">
            Serving Businesses <span className="text-primary">Across India</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            {CITY_LIST.length} cities, {CITY_CATALOG.length} service pages. Find the
            team nearest to you.
          </p>

          <div className="max-w-xl mx-auto mt-9">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-hint" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a city or state…"
                className="w-full h-14 pl-12 pr-4 rounded-full bg-surface border border-border text-text-main placeholder:text-text-hint focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <Section band="canvas">
        <SectionHeading
          eyebrow="Our Coverage"
          title="Cities We Work In"
          subtitle="Pick a city to see the services we deliver there"
        />

        {cities.length === 0 ? (
          <p className="text-center text-text-sub py-10">No city matches that search.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, i) => {
              const services = CITY_CATALOG.filter((c) => c.city === city.city);
              return (
                <Reveal key={city.city} delay={Math.min(i, 8) * 50}>
                  <div className="surface-card h-full p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-11 h-11 rounded-xl bg-job-tag-bg flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </span>
                      <div>
                        <h3 className="font-bold text-text-main text-lg leading-tight">
                          {city.city}
                        </h3>
                        <p className="text-text-hint text-xs">{city.state}</p>
                      </div>
                    </div>

                    <ul className="space-y-1.5">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <button
                            onClick={() => navigate({ to: `/locations/${s.slug}` })}
                            className="group inline-flex items-center gap-1.5 text-text-sub text-sm hover:text-primary transition-colors text-left"
                          >
                            <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" />
                            {s.service}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </Section>

      <BuildTogether />
    </div>
  );
}
