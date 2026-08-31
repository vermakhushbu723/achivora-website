import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS } from '@/constants/site';
import { Reveal, Section, SectionHeading } from './Section';

export default function FaqSection() {
  // Two balanced columns, mirroring the reference layout on desktop.
  const mid = Math.ceil(FAQS.length / 2);
  const columns = [FAQS.slice(0, mid), FAQS.slice(mid)];

  return (
    <Section id="faq" band="canvas">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Got Questions? We've Got Answers"
        subtitle="The things clients ask us most often, answered plainly"
      />

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {columns.map((column, colIndex) => (
          <Reveal key={colIndex} delay={colIndex * 100}>
            <Accordion type="single" collapsible className="space-y-3">
              {column.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${colIndex}-${i}`}
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
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
