import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import type { CatalogEntry } from '@/data/catalog-types';
import { icon } from '@/components/home/icons';
import { Reveal, Section } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';

/** Searchable, category-filtered listing shared by the three catalogue indexes. */
export default function CatalogIndex({
  eyebrow,
  title,
  highlight,
  tagline,
  entries,
  basePath,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  tagline: string;
  entries: readonly CatalogEntry[];
  basePath: string;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(entries.map((e) => e.category)))],
    [entries],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((e) => {
      const matchesCategory = category === 'All' || e.category === category;
      const matchesQuery =
        !q || e.label.toLowerCase().includes(q) || e.title.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [entries, query, category]);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">
            {eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5">
            {title} <span className="text-primary">{highlight}</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">{tagline}</p>

          <div className="max-w-xl mx-auto mt-9">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-hint" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${entries.length} options…`}
                className="w-full h-14 pl-12 pr-4 rounded-full bg-surface border border-border text-text-main placeholder:text-text-hint focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <Section band="canvas">
        {/* Category chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                category === c
                  ? 'bg-primary text-white shadow-cta'
                  : 'bg-surface border border-border text-text-sub hover:text-primary hover:border-primary/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="text-center text-text-sub text-sm mb-8">
          Showing <span className="font-bold text-text-main">{visible.length}</span> of{' '}
          {entries.length}
        </p>

        {visible.length === 0 ? (
          <p className="text-center text-text-sub py-16">Nothing matches that search.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((entry, i) => {
              const Icon = icon(entry.icon);
              return (
                <Reveal key={entry.slug} delay={Math.min(i, 8) * 60}>
                  <button
                    onClick={() => navigate({ to: `${basePath}/${entry.slug}` })}
                    className="surface-card h-full w-full p-7 text-left flex flex-col hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-primary-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                    <span className="w-14 h-14 rounded-2xl bg-job-tag-bg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-primary" />
                    </span>

                    <span className="tag bg-tint-blue text-remote-txt self-start mb-3">
                      {entry.category}
                    </span>

                    <h2 className="font-bold text-text-main text-lg mb-2 leading-snug">
                      {entry.label}
                    </h2>
                    <p className="text-text-sub text-sm leading-relaxed flex-1 line-clamp-3">
                      {entry.tagline}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-bold mt-4">
                      Learn more
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
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
