import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { INSIGHTS } from '@/constants/site';
import { Reveal, Section, SectionHeading } from './Section';

export default function Insights() {
  const navigate = useNavigate();

  return (
    <Section id="insights" band="surface">
      <SectionHeading
        eyebrow="AI, Software & Tech Insights"
        title="Insights, Trends & Digital Strategies"
        subtitle="What our engineers and strategists are thinking about right now"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {INSIGHTS.map((post, i) => (
          <Reveal key={post.title} delay={i * 100}>
            <article className="surface-card h-full overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
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

                <h3 className="font-bold text-text-main text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-sub text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mt-4">
                  Read article
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate({ to: '/insights' })}
          className="btn-secondary text-base px-8 py-3.5"
        >
          View All Insights
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </Section>
  );
}
