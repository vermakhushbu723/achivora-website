import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { SERVICES } from '@/constants/site';
import { photoForSlug } from '@/constants/media';
import { icon } from './icons';
import { Reveal, Section, SectionHeading } from './Section';

export default function ServicesGrid() {
  const navigate = useNavigate();

  return (
    <Section id="services" band="surface">
      <SectionHeading
        eyebrow="What We Do"
        title="Advanced Digital Solutions for Business Success"
        subtitle="End-to-end AI, software and digital services to build smarter businesses"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => {
          const Icon = icon(service.icon);
          return (
            <Reveal key={service.title} delay={i * 80}>
              <article className="media-card surface-card h-full flex flex-col overflow-hidden hover:-translate-y-1.5 transition-all duration-300 group">
                {/* Photograph banner; the accent tile overlaps its lower edge */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={photoForSlug(service.title, 600)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="media-card__img absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                </div>

                <div className="relative px-7 pb-7 -mt-7 flex flex-col flex-1">
                <div
                  className="w-14 h-14 rounded-2xl border border-border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: service.bg }}
                >
                  <Icon className="h-7 w-7" style={{ color: service.accent }} />
                </div>

                <h3 className="font-bold text-text-main text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-text-sub text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.links.map((link) => (
                    <li key={link}>
                      <span className="inline-flex items-center gap-1.5 text-sm text-text-sub hover:text-primary transition-colors cursor-default">
                        <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate({ to: '/services' })}
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold self-start"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate({ to: '/contact' })}
          className="btn-primary text-base px-8 py-3.5"
        >
          Consult Experts
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </Section>
  );
}
