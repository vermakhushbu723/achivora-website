import { Star } from 'lucide-react';
import { RECOGNITION } from '@/constants/site';
import { Reveal, Section, SectionHeading } from './Section';

export default function Recognition() {
  return (
    <Section id="recognition" band="surface">
      <SectionHeading
        eyebrow="Our Ratings & Recognition"
        title="Recognized as a Leading Website Designing Company in India"
        subtitle="We are proud to be recognized by the platforms our clients trust most when choosing a partner"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {RECOGNITION.map((item, i) => (
          <Reveal key={item.source} delay={i * 70}>
            <div className="surface-card h-full p-6 hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-warning text-warning"
                  />
                ))}
              </div>
              <p className="font-bold text-text-main text-base mb-2">{item.source}</p>
              <p className="text-text-sub text-sm leading-relaxed">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
