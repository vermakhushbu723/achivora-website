import { useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { BLOG_POSTS } from '@/data/blog';
import { Reveal, Section } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';
import PageHero from '@/components/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function InsightsPage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('All');

  usePageMeta({
    title: 'Blog — Web Development, SEO & Digital Marketing Tips',
    description:
      'Practical articles on website design, SEO, digital marketing, e-commerce and AI for Indian businesses, from the Achivora team.',
    path: '/insights',
  });

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))],
    [],
  );

  const posts = useMemo(
    () => (category === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category)),
    [category],
  );

  const [featured, ...rest] = posts;

  return (
    <div className="animate-fade-in">
      <PageHero
        image="writing"
        title="Blog"
        subtitle="Practical writing on websites, SEO, marketing and AI for growing businesses."
      />

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
          <p className="text-center text-text-sub py-10">
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

                  <div className="p-6 flex flex-col justify-center">
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
