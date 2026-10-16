import { PORTFOLIO } from '@/constants/site';
import { Reveal, Section } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';
import PageHero from '@/components/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function PortfolioPage() {
  usePageMeta({
    title: 'Portfolio — Websites, Apps & Software We Have Built',
    description:
      'Recent Achivora projects: restaurant ordering, SaaS, e-commerce, real estate, healthcare, education and IoT websites and apps.',
    path: '/portfolio',
  });

  return (
    <div className="animate-fade-in">
      <PageHero
        image="designReview"
        title="Our Portfolio"
        subtitle="Recent websites, mobile apps and custom software built for businesses across India."
      />

      <Section band="canvas">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((project, i) => (
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

      <BuildTogether />
    </div>
  );
}
