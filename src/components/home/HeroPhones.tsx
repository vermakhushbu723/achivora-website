import { useEffect, useState } from 'react';
import PhoneMockup from '@/components/showcase/PhoneMockup';
import { resolveDomain } from '@/data/appDomains';

/**
 * Three phones fanned out beside the hero copy. The centre device cycles
 * through products on a timer so the hero shows range without the visitor
 * having to click anything; the outer two sit back to give it depth.
 */
const ROTATION = [
  'food-delivery-app-development',
  'fintech-app-development',
  'taxi-service-application',
  'crm-development',
  'ai-agent-development',
  'matrimonial-application',
];

const cards = ROTATION.map((slug) => {
  const domain = resolveDomain(slug);
  return { label: domain.label, spec: domain.roles[0].screens[0].spec };
});

export default function HeroPhones() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(
      () => setActive((i) => (i + 1) % cards.length),
      3200,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const left = cards[(active - 1 + cards.length) % cards.length];
  const right = cards[(active + 1) % cards.length];
  const centre = cards[active];

  return (
    <div
      className="relative hidden lg:flex items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Glow behind the devices */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[26rem] h-[26rem] rounded-full bg-primary/25 blur-3xl" />
      </div>

      {/* Back-left device */}
      <div
        key={`l-${left.label}`}
        className="absolute -translate-x-[168px] scale-[0.78] opacity-40 blur-[1px] animate-fade-in"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <PhoneMockup spec={left.spec} />
      </div>

      {/* Back-right device */}
      <div
        key={`r-${right.label}`}
        className="absolute translate-x-[168px] scale-[0.78] opacity-40 blur-[1px] animate-fade-in"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <PhoneMockup spec={right.spec} />
      </div>

      {/* Foreground device. The float wrapper is stable so its loop never
          restarts; only the inner screen is re-keyed, so each product fades in. */}
      <div className="relative animate-float" style={{ zIndex: 10 }}>
        <div key={centre.label} className="animate-fade-in">
          <PhoneMockup spec={centre.spec} />
        </div>

        <p className="mt-5 text-center text-white font-bold text-sm">{centre.label}</p>

        {/* Progress dots double as manual controls */}
        <div className="flex justify-center gap-1.5 mt-3">
          {cards.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              aria-label={`Show ${c.label}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-primary' : 'w-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
