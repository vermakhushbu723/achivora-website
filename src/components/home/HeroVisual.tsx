import { useEffect, useState } from 'react';
import {
  Bot,
  Cloud,
  Code2,
  Database,
  Smartphone,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

/**
 * Hero orbit: a glass core surrounded by two counter-rotating rings of
 * capability chips. The rings spin with CSS transforms only (cheap on the
 * compositor), each chip counter-spins so its icon stays upright, and the
 * core steps through what we build — icon, counted-up metric, and a ring
 * that fills over the dwell so the next step never arrives unannounced.
 * Everything freezes under `prefers-reduced-motion`.
 */
const DWELL = 3600;

type Orbit = { icon: LucideIcon; label: string };

const ORBIT_INNER: Orbit[] = [
  { icon: Code2, label: 'Web' },
  { icon: Smartphone, label: 'Mobile' },
  { icon: Cloud, label: 'Cloud' },
];

const ORBIT_OUTER: Orbit[] = [
  { icon: Bot, label: 'AI' },
  { icon: Database, label: 'Data' },
  { icon: ShieldCheck, label: 'Security' },
  { icon: Sparkles, label: 'Design' },
];

/** `to` drives the count-up; `suffix` and `decimals` shape how it reads.
 *  `ring` links the step to the orbit chip that should light up with it. */
const CORE_ROTATION = [
  {
    icon: Bot,
    ring: 'AI',
    title: 'AI Agents',
    to: 40,
    suffix: '%',
    decimals: 0,
    caption: 'less manual work',
  },
  {
    icon: Smartphone,
    ring: 'Mobile',
    title: 'Mobile Apps',
    to: 4.8,
    suffix: '★',
    decimals: 1,
    caption: 'average store rating',
  },
  {
    icon: Cloud,
    ring: 'Cloud',
    title: 'Cloud Platforms',
    to: 99.9,
    suffix: '%',
    decimals: 1,
    caption: 'uptime delivered',
  },
  {
    icon: Code2,
    ring: 'Web',
    title: 'Custom Software',
    to: 250,
    suffix: '+',
    decimals: 0,
    caption: 'products shipped',
  },
];

/** Counts from zero to `to` on every change, easing out so it settles softly. */
function useCountUp(to: number, decimals: number, run: boolean) {
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!run) {
      setValue(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const duration = 1100;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, decimals, run]);

  return value.toFixed(decimals);
}

function Ring({
  items,
  radius,
  duration,
  reverse,
  activeLabel,
}: {
  items: Orbit[];
  radius: number;
  duration: string;
  reverse?: boolean;
  activeLabel: string;
}) {
  return (
    <div
      className={`orbit ${reverse ? 'orbit--reverse' : ''} absolute inset-0`}
      style={{ ['--orbit-duration' as string]: duration }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;
        const Icon = item.icon;
        const isActive = item.label === activeLabel;
        return (
          <div
            key={item.label}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <div
              className={`orbit__chip ${reverse ? 'orbit__chip--reverse' : ''}`}
              style={{ ['--orbit-duration' as string]: duration }}
            >
              <span
                className={`flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border transition-all duration-500 ${
                  isActive
                    ? 'bg-primary/90 border-primary shadow-cta scale-110'
                    : 'bg-white/10 border-white/20 shadow-card'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-primary-light'}`} />
                <span className="text-white text-xs font-bold whitespace-nowrap">
                  {item.label}
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function HeroVisual() {
  const [active, setActive] = useState(0);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAnimated(false);
      return;
    }
    const timer = window.setInterval(
      () => setActive((i) => (i + 1) % CORE_ROTATION.length),
      DWELL,
    );
    return () => window.clearInterval(timer);
  }, []);

  const core = CORE_ROTATION[active];
  const CoreIcon = core.icon;
  const count = useCountUp(core.to, core.decimals, animated);

  /* Circumference of the dwell ring; re-keyed each step so it restarts. */
  const CIRC = 2 * Math.PI * 34;

  return (
    <div className="relative hidden lg:flex items-center justify-center h-[34rem]">
      {/* Glow bed */}
      <div className="absolute w-[24rem] h-[24rem] rounded-full bg-primary/25 blur-3xl pointer-events-none" />

      {/* Static guide rings the chips travel along */}
      <div className="absolute w-[17rem] h-[17rem] rounded-full border border-white/10" />
      <div className="absolute w-[26rem] h-[26rem] rounded-full border border-dashed border-white/10" />

      {/* Rotating rings */}
      <div className="absolute w-[17rem] h-[17rem]">
        <Ring items={ORBIT_INNER} radius={136} duration="26s" activeLabel={core.ring} />
      </div>
      <div className="absolute w-[26rem] h-[26rem]">
        <Ring items={ORBIT_OUTER} radius={208} duration="38s" reverse activeLabel={core.ring} />
      </div>

      {/* Core card */}
      <div className="relative z-10 animate-float">
        <div className="w-56 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-center shadow-cta">
          {/* Icon badge inside a ring that fills across the dwell */}
          <div className="relative mx-auto mb-4 h-20 w-20">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 80 80">
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="3"
              />
              <circle
                key={active}
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="oklch(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                strokeDashoffset={animated ? CIRC : 0}
                className={animated ? 'orbit__dwell' : ''}
                style={{
                  ['--dwell-circumference' as string]: `${CIRC}`,
                  ['--dwell-duration' as string]: `${DWELL}ms`,
                }}
              />
            </svg>

            <span
              key={`badge-${active}`}
              className="orbit__badge absolute inset-3 flex items-center justify-center rounded-2xl bg-primary-gradient shadow-cta"
            >
              <CoreIcon className="h-7 w-7 text-white" />
            </span>
          </div>

          <div key={core.title} className="orbit__swap">
            <p className="text-white font-extrabold text-base leading-tight">{core.title}</p>
            <p className="mt-2 text-4xl font-black text-primary-light tabular-nums">
              {count}
              <span className="text-2xl align-top">{core.suffix}</span>
            </p>
            <p className="mt-1 text-white/60 text-xs">{core.caption}</p>
          </div>

          <div className="mt-5 flex justify-center gap-1.5">
            {CORE_ROTATION.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setActive(i)}
                aria-label={`Show ${c.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-primary' : 'w-1.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
