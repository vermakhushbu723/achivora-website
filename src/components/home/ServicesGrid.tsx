import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { SERVICES } from '@/constants/site';
import { icon } from './icons';
import { Reveal, Section, SectionHeading } from './Section';

export default function ServicesGrid() {
  return (
    <Section id="services" band="surface">
      <SectionHeading
        eyebrow="What We Do"
        title="Web, App, AI & Software Development Services"
        subtitle="Everything you need to build, launch and grow a digital product — from one team"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => {
          const Icon = icon(service.icon);
          return (
            <Reveal key={service.title} delay={i * 70}>
              <article className="surface-card h-full p-6 flex flex-col hover:-translate-y-1.5 transition-all duration-300 group">
                <span className="w-12 h-12 rounded-2xl bg-job-tag-bg border border-border flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </span>

                <h3 className="font-bold text-text-main text-lg mb-2">
                  <Link to={service.path} className="hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-text-sub text-sm leading-relaxed mb-4">{service.description}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {service.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="inline-flex items-center gap-1.5 text-sm text-text-sub hover:text-primary transition-colors"
                      >
                        <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.path}
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold self-start"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
