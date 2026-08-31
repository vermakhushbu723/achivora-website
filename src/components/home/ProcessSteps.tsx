import { PROCESS } from '@/constants/site';
import { Reveal, Section, SectionHeading } from './Section';

export default function ProcessSteps() {
  return (
    <Section id="process" band="canvas">
      <SectionHeading
        eyebrow="How We Work"
        title="Smart Digital Services for Modern Businesses"
        subtitle="An expert-driven product development process, refined over 1500+ projects"
      />

      <div className="relative">
        {/* Connector rail behind the cards on wide screens */}
        <div className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-0.5 bg-border" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS.map((step, i) => (
            <Reveal key={step.title} delay={i * 110}>
              <div className="relative text-center h-full">
                <span className="relative z-10 mx-auto w-[4.5rem] h-[4.5rem] rounded-2xl bg-primary-gradient text-white font-black text-2xl flex items-center justify-center shadow-cta mb-5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="surface-card p-6 h-[calc(100%-6.5rem)] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-bold text-text-main text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-sub text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
