import { useEffect } from 'react';
import { ArrowRight, Check, ChevronRight, Minus } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { CatalogEntry } from '@/data/catalog-types';
import { icon } from '@/components/home/icons';
import { useCountUp, useReveal } from '@/hooks/useReveal';
import { Reveal, Section, SectionHeading } from '@/components/home/Section';
import ProcessSteps from '@/components/home/ProcessSteps';
import ReachOut from '@/components/home/ReachOut';
import { AppScreensSection, AppSuiteSection } from '@/components/showcase/AppShowcase';
import { APP_DOMAINS, resolveDomain } from '@/data/appDomains';

/**
 * App / platform builds get the phone-mockup showcase; a pure marketing or
 * consulting service does not, since there is no product UI to show.
 */
function showsAppScreens(entry: CatalogEntry) {
  if (APP_DOMAINS.some((d) => d.slugs.includes(entry.slug))) return true;

  const haystack = `${entry.label} ${entry.title}`.toLowerCase();
  const productish = ['Mobile', 'Vertical', 'Product', 'Commerce', 'Business', 'Education', 'Media'];
  return (
    productish.includes(entry.category) ||
    /\bapp\b|application|platform|marketplace|delivery|booking|commerce|portal|software/.test(
      haystack,
    )
  );
}

/**
 * One template renders every service / solution / industry detail page,
 * mirroring the section order of the reference site's service pages.
 */
export default function CatalogDetail({
  entry,
  breadcrumb,
  basePath,
  related,
}: {
  entry: CatalogEntry;
  breadcrumb: string;
  basePath: string;
  related: readonly CatalogEntry[];
}) {
  const navigate = useNavigate();
  const Icon = icon(entry.icon);
  const { ref: statsRef, shown: statsShown } = useReveal<HTMLDivElement>(0.3);
  const withAppScreens = showsAppScreens(entry);
  const domain = resolveDomain(entry.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [entry.slug]);

  return (
    <div className="animate-fade-in">
      {/* ── 1. Hero ───────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-12 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={entry.image}
            alt=""
            aria-hidden="true"
            className="hero-pan absolute inset-0 w-full h-full object-cover"
          />
          {/* Scrim first, brand wash second: the headline has to stay readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/88 via-black/72 to-black/82" />
          <div className="absolute inset-0 bg-primary/15 mix-blend-overlay" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/60 mb-6">
            <button onClick={() => navigate({ to: '/' })} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="h-3.5 w-3.5" />
            <button onClick={() => navigate({ to: basePath })} className="hover:text-white transition-colors">
              {breadcrumb}
            </button>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/90">{entry.label}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white border border-white/20">
              {entry.category}
            </span>

            <div className="flex items-start gap-5 mt-5">
              <span className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 items-center justify-center shrink-0">
                <Icon className="h-8 w-8 text-white" />
              </span>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1]">
                  {entry.title}
                </h1>
                <p className="mt-3 text-primary font-bold text-lg">{entry.subheading}</p>
              </div>
            </div>

            <p className="mt-5 text-lg text-white/75 leading-relaxed">{entry.tagline}</p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button onClick={() => navigate({ to: '/contact' })} className="btn-white text-base px-8 py-3.5">
                Let's Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigate({ to: basePath })}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-200 text-base"
              >
                All {breadcrumb}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Overview + capability cards ────────────────────────────── */}
      <Section band="surface">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-9">
          <Reveal variant="left">
            <span className="eyebrow">Best in India</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-text-main leading-tight">
              Why teams choose Achivora for {entry.label}
            </h2>
            {entry.intro.map((p) => (
              <p key={p} className="mt-4 text-text-body leading-relaxed">
                {p}
              </p>
            ))}

            <button
              onClick={() => navigate({ to: '/contact' })}
              className="btn-primary text-base px-7 py-3 mt-7"
            >
              Schedule A Free Consultation
              <ArrowRight className="h-5 w-5" />
            </button>
          </Reveal>

          <Reveal variant="right">
            <div className="rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
              <img
                src={entry.image}
                alt={entry.label}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {entry.capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 70}>
              <div className="surface-card h-full p-5 hover:-translate-y-1.5 transition-all duration-300">
                <span className="block text-primary font-black text-2xl tabular-nums mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-text-main text-lg mb-2">{cap.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{cap.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 2b. App suite + screen showcase (product builds only) ─────── */}
      {withAppScreens && (
        <>
          <AppSuiteSection domain={domain} />
          <AppScreensSection domain={domain} />
        </>
      )}

      {/* ── 3. Sub-services ───────────────────────────────────────────── */}
      <Section band="canvas">
        <SectionHeading
          eyebrow={`${entry.label} in India`}
          title={`Our custom ${entry.label} services`}
          subtitle="Individually scoped, or bundled into one end-to-end engagement"
        />

        <div className="grid md:grid-cols-2 gap-5">
          {entry.subServices.map((sub, i) => (
            <Reveal key={sub.title} delay={i * 50}>
              <div className="surface-card h-full p-6 flex gap-4 hover:-translate-y-1 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-job-tag-bg flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-bold text-text-main text-base mb-1.5">{sub.title}</h3>
                  <p className="text-text-sub text-sm leading-relaxed">{sub.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 4. Tools & technologies ───────────────────────────────────── */}
      <Section band="surface">
        <SectionHeading
          eyebrow="Tools & Technologies"
          title="The stack we build on"
          subtitle="Chosen for what the product needs, not for what is fashionable this year"
        />

        <div className="flex flex-wrap justify-center gap-3">
          {entry.tech.map((t, i) => (
            <Reveal key={t} delay={i * 40}>
              <span className="inline-block px-5 py-2.5 rounded-full bg-tint-blue border border-border text-text-main text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default">
                {t}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 5. What's included ────────────────────────────────────────── */}
      <Section band="canvas">
        <SectionHeading
          eyebrow="What You Get"
          title={`What our ${entry.label} engagement includes`}
          subtitle="Everything below is part of the standard scope, not a paid add-on"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entry.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 70}>
              <div className="surface-card h-full p-5 hover:-translate-y-1.5 transition-all duration-300">
                <span className="w-11 h-11 rounded-xl bg-job-tag-bg flex items-center justify-center mb-4">
                  <Check className="h-5 w-5 text-primary" />
                </span>
                <h3 className="font-bold text-text-main text-base mb-2">{feature.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 6. Why choose us ──────────────────────────────────────────── */}
      <Section band="surface">
        <SectionHeading
          eyebrow="Why Choose Achivora"
          title={`Why we are the right ${entry.label} partner`}
          subtitle="The operating model behind every Achivora project"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {entry.benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 80}>
              <div className="surface-card h-full p-6">
                <span className="block text-primary font-black text-2xl tabular-nums mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-text-main text-base mb-2">{benefit.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 7. Step-by-step process ───────────────────────────────────── */}
      <ProcessSteps />

      {/* ── 8. Custom vs template comparison ──────────────────────────── */}
      <Section band="surface">
        <SectionHeading
          eyebrow="Make the Right Call"
          title="Custom vs template-based — what is right for you?"
          subtitle="An honest comparison, including the cases where the cheaper option is the correct one"
        />

        <Reveal>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full surface-card overflow-hidden border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-primary-gradient text-white">
                  <th className="text-left font-bold text-sm px-6 py-4">Aspect</th>
                  <th className="text-left font-bold text-sm px-6 py-4">Custom Build</th>
                  <th className="text-left font-bold text-sm px-6 py-4">Template-Based</th>
                </tr>
              </thead>
              <tbody>
                {entry.comparison.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={i % 2 === 1 ? 'bg-tint-blue/60' : 'bg-surface'}
                  >
                    <td className="px-6 py-4 font-bold text-text-main text-sm border-t border-border">
                      {row.aspect}
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm border-t border-border">
                      <span className="inline-flex items-start gap-2">
                        <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        {row.custom}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm border-t border-border">
                      <span className="inline-flex items-start gap-2">
                        <Minus className="h-4 w-4 text-text-hint shrink-0 mt-0.5" />
                        {row.template}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* ── 9. Performance & SEO ──────────────────────────────────────── */}
      <Section band="canvas">
        <SectionHeading
          eyebrow="Performance & SEO Ready"
          title="Built to rank and built to load fast"
          subtitle="Speed and search structure are part of the build, not a later clean-up project"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entry.performance.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="surface-card h-full p-5 hover:-translate-y-1.5 transition-all duration-300">
                <span className="w-11 h-11 rounded-xl bg-remote-bg flex items-center justify-center mb-4">
                  <Check className="h-5 w-5 text-remote-txt" />
                </span>
                <h3 className="font-bold text-text-main text-base mb-2">{item.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 10. Compliance ────────────────────────────────────────────── */}
      <Section band="surface">
        <SectionHeading
          eyebrow="Compliance Ready"
          title="Accessible, secure and compliant by default"
          subtitle="Compliance is no longer optional, so we build it in rather than bolt it on"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {entry.compliance.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="surface-card h-full p-5 flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-job-tag-bg flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-bold text-text-main text-base mb-2">{item.title}</h3>
                  <p className="text-text-sub text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 11. Mid-page consultation CTA ─────────────────────────────── */}
      <section className="relative py-10 bg-primary-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
            Not sure what is right for you?
          </h2>
          <p className="text-lg text-white/75 mb-7 max-w-2xl mx-auto">
            Consult with us. Our team will look at what you have, what you need, and
            tell you honestly which option makes sense.
          </p>
          <button onClick={() => navigate({ to: '/contact' })} className="btn-white text-base px-8 py-3.5">
            Book a Free 15-min Consultation
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* ── 12. Industries served ─────────────────────────────────────── */}
      <Section band="canvas">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Tailored solutions for every sector"
          subtitle="Domain knowledge that means we are not learning your business on your budget"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {entry.industriesServed.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="surface-card h-full p-5 hover:-translate-y-1.5 transition-all duration-300">
                <h3 className="font-bold text-text-main text-base mb-2">{item.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 13. Achievements ──────────────────────────────────────────── */}
      <section className="py-10 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="eyebrow">Our Ratings and Recognition</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-text-main leading-tight">
              Achievements & Recognitions
            </h2>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {entry.achievements.map((stat) => (
              <AchievementStat key={stat.label} stat={stat} active={statsShown} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. FAQs ──────────────────────────────────────────────────── */}
      <Section band="canvas">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers for common questions"
          subtitle={`What clients usually ask before starting a ${entry.label} project`}
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {entry.faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="surface-card px-5 border border-border data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-text-main hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-text-sub text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* ── Related ───────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <Section band="surface">
          <SectionHeading
            eyebrow="Explore More"
            title={`Other ${breadcrumb.toLowerCase()} we offer`}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((item, i) => {
              const RelIcon = icon(item.icon);
              return (
                <Reveal key={item.slug} delay={i * 60}>
                  <button
                    onClick={() => navigate({ to: `${basePath}/${item.slug}` })}
                    className="surface-card h-full w-full p-6 text-left hover:-translate-y-1.5 transition-all duration-300 group"
                  >
                    <span className="w-11 h-11 rounded-xl bg-job-tag-bg flex items-center justify-center mb-4 transition-colors group-hover:bg-primary">
                      <RelIcon className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                    </span>
                    <h3 className="font-bold text-text-main text-sm leading-snug mb-2">
                      {item.label}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-primary text-xs font-bold">
                      View
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </Section>
      )}

      {/* ── 15. Reach out form ────────────────────────────────────────── */}
      <ReachOut />
    </div>
  );
}

/** Counts up once the achievements strip scrolls into view. */
function AchievementStat({
  stat,
  active,
}: {
  stat: { value: string; suffix: string; label: string };
  active: boolean;
}) {
  const target = Number(stat.value);
  const shown = useCountUp(target, active);

  return (
    <div className="surface-card p-6 text-center">
      <p className="text-3xl lg:text-4xl font-black text-primary leading-none tabular-nums">
        {shown.toLocaleString('en-IN')}
        {stat.suffix}
      </p>
      <p className="text-text-sub text-sm font-medium mt-2">{stat.label}</p>
    </div>
  );
}
