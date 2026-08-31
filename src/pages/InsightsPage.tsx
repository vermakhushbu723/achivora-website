import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, Clock, Search } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { BLOG_POSTS } from '@/data/blog';
import { Reveal, Section } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';

export default function InsightsPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))],
    [],
  );

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const [featured, ...rest] = posts;

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
            AI, Software & Tech Insights
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5">
            Insights, Trends & <span className="text-primary">Strategies</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            {BLOG_POSTS.length} articles from our engineers and strategists on what is
            actually working right now.
          </p>

          <div className="max-w-xl mx-auto mt-9">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-hint" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
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

        {posts.length === 0 ? (
          <p className="text-center text-text-sub py-16">
            No articles match that search yet.
          </p>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <Reveal>
                <button
                  onClick={() => navigate({ to: `/insights/${featured.slug}` })}
                  className="surface-card w-full overflow-hidden grid md:grid-cols-2 text-left group mb-10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 tag bg-primary text-white">
                      Featured
                    </span>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <span className="tag bg-tint-blue text-remote-txt self-start mb-3">
                      {featured.category}
                    </span>
                    <h2 className="font-extrabold text-text-main text-2xl leading-snug mb-3 group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-text-body leading-relaxed mb-4">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-text-hint text-xs">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {featured.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {featured.readTime}
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={Math.min(i, 8) * 60}>
                  <button
                    onClick={() => navigate({ to: `/insights/${post.slug}` })}
                    className="surface-card h-full w-full overflow-hidden flex flex-col text-left group hover:-translate-y-1.5 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 tag bg-white/90 text-primary backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-text-hint text-xs mb-3">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-bold text-text-main text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-text-sub text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-bold mt-4">
                        Read article
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Section>

      <BuildTogether />
    </div>
  );
}
