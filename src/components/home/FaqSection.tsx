import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { FAQS } from '@/constants/site';
import { Reveal, Section, SectionHeading } from './Section';

export default function FaqSection() {
  // The six most-asked questions, in two columns; the rest live on /faq.
  const top = FAQS.slice(0, 6);
  const columns = [top.slice(0, 3), top.slice(3)];

  return (
    <Section id="faq" band="canvas">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Got Questions? We've Got Answers"
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

      <div className="text-center mt-8">
        <Link to="/faq" className="inline-flex items-center gap-1.5 text-primary font-bold text-sm">
          See all questions
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
