import { useEffect, useState } from 'react';
import {
  Bot,
  Cloud,
  Code2,
  Database,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Star,
  type LucideIcon,
} from 'lucide-react';

/**
 * Hero orbit: a glass core inside one rotating ring of capability chips.
 *
 * The ring spins with CSS transforms only (cheap on the compositor) and each
 * chip counter-spins so its label stays upright. The core steps through what
 * we build — icon, counted-up metric, and a ring that fills over the dwell so
 * the next step never arrives unannounced — and the chip matching the current
 * step lights up, so the two halves read as one idea. Everything freezes
 * under `prefers-reduced-motion`.
 *
 * Geometry note: the whole thing has to fit the hero's right-hand column, so
 * the orbit radius is held just under half that column's width. One ring at a
 * generous radius reads better here than two cramped ones.
 */
const DWELL = 3600;
const RADIUS = 148;

type Orbit = { icon: LucideIcon; label: string };

const ORBIT: Orbit[] = [
  { icon: Bot, label: 'AI' },
  { icon: Smartphone, label: 'Mobile' },
  { icon: Database, label: 'Data' },
  { icon: Cloud, label: 'Cloud' },
  { icon: ShieldCheck, label: 'Security' },
  { icon: Code2, label: 'Web' },
  { icon: Sparkles, label: 'Design' },
];

/** `to` drives the count-up; `ring` links the step to the chip that lights up. */
const CORE_ROTATION = [
  { icon: Bot, ring: 'AI', title: 'AI Agents', to: 40, suffix: '%', decimals: 0, caption: 'less manual work' },
  { icon: Smartphone, ring: 'Mobile', title: 'Mobile Apps', to: 4.8, suffix: 'star', decimals: 1, caption: 'average store rating' },
  { icon: Cloud, ring: 'Cloud', title: 'Cloud Platforms', to: 99.9, suffix: '%', decimals: 1, caption: 'uptime delivered' },
  { icon: Code2, ring: 'Web', title: 'Custom Software', to: 250, suffix: '+', decimals: 0, caption: 'products shipped' },
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
      setValue(to * (1 - Math.pow(1 - t, 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, decimals, run]);

  return value.toFixed(decimals);
}

export default function HeroVisual() {
  const [active, setActive] = useState(0);
  const [animated, setAnimated] = useState(true);
  /** True for one frame after a step change, which drives the enter transition. */
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAnimated(false);
      return;
    }
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % CORE_ROTATION.length);
      setEntering(true);
    }, DWELL);
    return () => window.clearInterval(timer);
  }, []);

  // Release the entering state on the next frame so the transition plays.
  useEffect(() => {
    if (!entering) return;
    const frame = requestAnimationFrame(() => setEntering(false));
    return () => cancelAnimationFrame(frame);
  }, [entering]);

  const core = CORE_ROTATION[active];
  const CoreIcon = core.icon;
  const count = useCountUp(core.to, core.decimals, animated);
  const CIRC = 2 * Math.PI * 30;

  return (
    <div className="relative hidden lg:flex items-center justify-center h-[23rem]">
      {/* Glow bed */}
      <div className="absolute w-[17rem] h-[17rem] rounded-full bg-primary/25 blur-3xl pointer-events-none" />

      {/* Track the chips travel along */}
      <div
        className="absolute rounded-full border border-dashed border-white/10"
        style={{ width: RADIUS * 2, height: RADIUS * 2 }}
      />

      {/* Rotating ring */}
      <div
        className="orbit absolute"
        style={{
          width: RADIUS * 2,
          height: RADIUS * 2,
          ['--orbit-duration' as string]: '34s',
        }}
      >
        {ORBIT.map((item, i) => {
          const angle = (360 / ORBIT.length) * i;
          const Icon = item.icon;
          const isActive = item.label === core.ring;
          return (
            <div
              key={item.label}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${RADIUS}px) rotate(-${angle}deg)`,
              }}
            >
              <div
                className="orbit__chip"
                style={{ ['--orbit-duration' as string]: '34s' }}
              >
                <span
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg backdrop-blur-md border transition-all duration-500 ${
                    isActive
                      ? 'bg-primary/90 border-primary shadow-cta scale-110'
                      : 'bg-white/10 border-white/20'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-white' : 'text-primary-light'}`} />
                  <span className="text-white text-[11px] font-bold whitespace-nowrap">
                    {item.label}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core card */}
      <div className="relative z-10 animate-float">
        <div className="w-40 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 text-center shadow-cta">
          {/* Icon badge inside a ring that fills across the dwell */}
          <div className="relative mx-auto mb-2.5 h-16 w-16">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
              <circle
                key={active}
                cx="32"
                cy="32"
                r="30"
                fill="none"
                stroke="oklch(var(--primary))"
                strokeWidth="2.5"
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
              className={`absolute inset-2.5 flex items-center justify-center rounded-xl bg-primary-gradient shadow-cta transition-all duration-500 ${
                entering ? 'scale-75 rotate-[-25deg]' : 'scale-100 rotate-0'
              }`}
            >
              <CoreIcon className="h-5 w-5 text-white" />
            </span>
          </div>

          <div
            className={`transition-all duration-500 ${
              entering ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-white font-extrabold text-sm leading-tight">{core.title}</p>
            <p className="mt-1 text-2xl font-black text-primary-light tabular-nums leading-none">
              {count}
              {core.suffix === 'star' ? (
                <Star className="inline h-4 w-4 -mt-1 ml-0.5" fill="currentColor" />
              ) : (
                <span className="text-lg align-top">{core.suffix}</span>
              )}
            </p>
            <p className="mt-1 text-white/60 text-[11px] leading-snug">{core.caption}</p>
          </div>

          <div className="mt-3 flex justify-center gap-1.5">
            {CORE_ROTATION.map((c, i) => (
              <button
                key={c.title}
                onClick={() => {
                  setActive(i);
                  setEntering(true);
                }}
                aria-label={`Show ${c.title}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active ? 'w-5 bg-primary' : 'w-1 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
