import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, ChevronRight, Clock } from 'lucide-react';
import { useNavigate, useParams } from '@tanstack/react-router';
import { BLOG_POSTS } from '@/data/blog';
import { Reveal, Section, SectionHeading } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';
import NotFoundPage from './NotFoundPage';

export default function BlogPostPage() {
  const { slug } = useParams({ strict: false }) as { slug?: string };
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFoundPage />;

  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug,
  ).slice(0, 3);
  const fallback = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const more = related.length ? related : fallback;

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={post.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <button onClick={() => navigate({ to: '/' })} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="h-3.5 w-3.5" />
            <button onClick={() => navigate({ to: '/insights' })} className="hover:text-white transition-colors">
              Insights
            </button>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white border border-white/20">
            {post.category}
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 mt-6 text-white/60 text-sm">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <Section band="surface">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-card-hover aspect-[16/9] mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <article>
            {post.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 40}>
                <p
                  className={
                    i === 0
                      ? 'text-xl text-text-main leading-relaxed font-medium mb-6'
                      : 'text-text-body leading-relaxed mb-6'
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </article>

          <div className="flex flex-col sm:flex-row gap-3 mt-10 pt-8 border-t border-border">
            <button
              onClick={() => navigate({ to: '/insights' })}
              className="btn-secondary text-base px-6 py-3"
            >
              <ArrowLeft className="h-5 w-5" />
              All Insights
            </button>
            <button
              onClick={() => navigate({ to: '/contact' })}
              className="btn-primary text-base px-6 py-3"
            >
              Talk To Our Experts
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Section>

      {/* Related posts */}
      <Section band="canvas">
        <SectionHeading eyebrow="Keep Reading" title="Related articles" />

        <div className="grid md:grid-cols-3 gap-6">
          {more.map((item, i) => (
            <Reveal key={item.slug} delay={i * 80}>
              <button
                onClick={() => navigate({ to: `/insights/${item.slug}` })}
                className="surface-card h-full w-full overflow-hidden flex flex-col text-left group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 tag bg-white/90 text-primary backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-bold text-text-main text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-sub text-sm leading-relaxed">{item.excerpt}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <BuildTogether />
    </div>
  );
}
