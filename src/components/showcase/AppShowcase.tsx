import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import { icon } from '@/components/home/icons';
import { resolveDomain, type AppDomain, type AppRoleSpec } from '@/data/appDomains';
import { Reveal, Section, SectionHeading } from '@/components/home/Section';

/* ── The apps that make up this product ─────────────────────────────────── */

export function AppSuiteSection({ domain }: { domain: AppDomain }) {
  return (
    <Section band="canvas">
      <SectionHeading
        eyebrow="Core Solution"
        title={`What we build for your ${domain.label}`}
        subtitle={`${domain.roles.length} connected apps, one platform — designed, built and shipped together`}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {domain.roles.map((role, i) => {
          const RoleIcon = icon(role.icon);
          return (
            <Reveal key={role.title} delay={i * 80}>
              <div className="surface-card h-full p-5 text-center hover:-translate-y-1.5 transition-all duration-300 group">
                <span className="w-16 h-16 rounded-2xl bg-job-tag-bg mx-auto flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary">
                  <RoleIcon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
                </span>
                <h3 className="font-bold text-text-main text-lg mb-2">{role.title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{role.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ── Per-app screen carousel ────────────────────────────────────────────── */

function RoleScreens({ role, flip }: { role: AppRoleSpec; flip: boolean }) {
  const [index, setIndex] = useState(0);
  const total = role.screens.length;
  const RoleIcon = icon(role.icon);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 items-center ${
        flip ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Copy */}
      <Reveal variant={flip ? 'right' : 'left'}>
        <span className="eyebrow">
          <RoleIcon className="h-3.5 w-3.5" />
          {role.title}
        </span>
        <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-text-main leading-tight">
          {role.title}
        </h3>
        <p className="mt-3 text-text-body leading-relaxed">{role.description}</p>

        <ul className="mt-6 space-y-3">
          {role.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-job-tag-bg flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-primary" />
              </span>
              <span className="text-text-main text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Screens */}
      <Reveal variant={flip ? 'left' : 'right'}>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
          </div>

          {/* Active phone centred, neighbours peeking behind */}
          <div className="relative flex justify-center items-center gap-4 overflow-hidden py-4">
            {role.screens.map((screen, i) => {
              const offset = i - index;
              if (Math.abs(offset) > 1) return null;
              return (
                <div
                  key={screen.label}
                  className="transition-all duration-500"
                  style={{
                    transform: `scale(${offset === 0 ? 1 : 0.82}) translateX(${offset * 8}px)`,
                    opacity: offset === 0 ? 1 : 0.45,
                    zIndex: offset === 0 ? 10 : 1,
                  }}
                >
                  <PhoneMockup spec={screen.spec} />
                </div>
              );
            })}
          </div>

          {total > 1 ? (
            <>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={prev}
                  aria-label={`Previous ${role.title} screen`}
                  className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>

                <span className="text-text-sub text-sm font-semibold min-w-[9rem] text-center">
                  {role.screens[index].label}
                </span>

                <button
                  onClick={next}
                  aria-label={`Next ${role.title} screen`}
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-cta"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex justify-center gap-1.5 mt-3">
                {role.screens.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setIndex(i)}
                    aria-label={`Screen ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-text-hint'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-text-sub text-sm font-semibold mt-4">
              {role.screens[0].label}
            </p>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export function AppScreensSection({ domain }: { domain: AppDomain }) {
  return (
    <Section band="surface">
      <SectionHeading
        eyebrow="App Screens"
        title={`See the ${domain.label} in action`}
        subtitle="Real screens from the platform — step through each app to see how it works"
      />

      <div className="space-y-20">
        {domain.roles.map((role, i) => (
          <RoleScreens key={role.title} role={role} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

/* ── Compact homepage strip ─────────────────────────────────────────────── */

const PREVIEW_SLUGS = [
  'food-delivery-app-development',
  'fintech-app-development',
  'crm-development',
  'ai-agent-development',
];

export function AppPreviewStrip() {
  // One flagship screen from four different products, so the strip shows range.
  const cards = PREVIEW_SLUGS.map((slug) => {
    const domain = resolveDomain(slug);
    return { label: domain.label, spec: domain.roles[0].screens[0].spec };
  });

  return (
    <Section band="canvas">
      <SectionHeading
        eyebrow="Product Showcase"
        title="Apps we design and ship"
        subtitle="Delivery, fintech, enterprise and AI — every screen below is a product we build"
      />

      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[36rem] h-72 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative flex gap-6 overflow-x-auto pb-4 lg:justify-center snap-x">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 90} className="snap-center">
              <figure className="flex flex-col items-center">
                <PhoneMockup
                  spec={card.spec}
                  className="transition-transform duration-500 hover:-translate-y-2"
                />
                <figcaption className="mt-4 text-text-main font-bold text-sm">
                  {card.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
