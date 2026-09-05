import { useNavigate } from '@tanstack/react-router';
import { CLIENTS, HERO, SITE } from '@/constants/site';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden py-28 lg:py-0">
        {/* Background video, with the gradient underneath as the poster state
            so the section never flashes empty while the file loads. */}
        <div className="absolute inset-0 bg-hero-gradient" />

        {SITE.heroVideo && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src={SITE.heroVideo} type="video/mp4" />
          </video>
        )}

        {/* Readability scrim — darker on the left where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b1d21]/94 via-[#1b1d21]/80 to-[#1b1d21]/55" />

        {/* Brand wash + faint grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-32 w-[30rem] h-[30rem] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-sky/20 blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-20">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
            {/* Copy */}
            <div>
              <h1 className="uppercase text-white/85 font-medium tracking-[0.18em] text-sm sm:text-base animate-fade-in-up">
                {HERO.eyebrow}
              </h1>

              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] animate-fade-in-up animation-delay-200">
                Where Innovation
                <span className="block text-primary">Meets Imagination</span>
              </h2>

              <p className="hidden md:block mt-6 text-lg text-white/70 leading-relaxed max-w-xl animate-fade-in-up animation-delay-400">
                {HERO.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up animation-delay-600">
                <button
                  onClick={() => navigate({ to: HERO.primaryCta.path })}
                  className="btn-primary text-base px-8 py-3.5"
                >
                  {HERO.primaryCta.label}
                </button>
                <button
                  onClick={() => navigate({ to: HERO.secondaryCta.path })}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-200 text-base"
                >
                  {HERO.secondaryCta.label}
                </button>
              </div>
            </div>

            {/* Capability orbit */}
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ── Client strip: black band with an infinite wordmark marquee ── */}
      <div className="bg-[#1b1d21] py-6">
        <div className="marquee" style={{ ['--marquee-duration' as string]: '30s' }}>
          {/* Two identical tracks give a seamless loop */}
          {[0, 1].map((track) => (
            <div className="marquee__track" key={track} aria-hidden={track === 1}>
              {CLIENTS.map((client) => (
                <span
                  key={`${track}-${client}`}
                  className="text-white/40 hover:text-white transition-colors font-extrabold text-xl tracking-tight whitespace-nowrap"
                >
                  {client}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
