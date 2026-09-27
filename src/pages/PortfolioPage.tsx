import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO } from '@/constants/site';
import { Reveal, Section } from '@/components/home/Section';
import Recognition from '@/components/home/Recognition';
import BuildTogether from '@/components/home/BuildTogether';
import HeroBackdrop from '@/components/media/HeroBackdrop';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Categories look like "Web Design · Ordering" — group by the first segment.
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(PORTFOLIO.map((p) => p.category.split(' · ')[0])))],
    [],
  );

  const projects = useMemo(
    () =>
      filter === 'All'
        ? PORTFOLIO
        : PORTFOLIO.filter((p) => p.category.split(' · ')[0] === filter),
    [filter],
  );

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative pt-12 pb-12 overflow-hidden bg-hero-gradient">
        <HeroBackdrop image="designReview" intensity="medium" />
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">
            Our Diverse Portfolio
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-5">
            Work We Are <span className="text-primary">Proud Of</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Our excellence is driven by client satisfaction. A selection of recent
            projects across web, mobile and custom software.
          </p>
        </div>
      </section>

      <Section band="canvas">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                filter === c
                  ? 'bg-primary text-white shadow-cta'
                  : 'bg-surface border border-border text-text-sub hover:text-primary hover:border-primary/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={Math.min(i, 8) * 60}>
              <article className="surface-card h-full overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b1d21]/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 tag bg-white/90 text-primary backdrop-blur-sm">
                    {project.category}
                  </span>
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <div className="p-6 flex-1">
                  <h2 className="font-bold text-text-main text-lg mb-2">{project.name}</h2>
                  <p className="text-text-sub text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Recognition />
      <BuildTogether />
    </div>
  );
}
