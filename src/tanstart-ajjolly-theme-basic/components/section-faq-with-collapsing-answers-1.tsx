import { cn } from 'cn';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { SectionFAQWithCollapsingAnswers1Props } from '../schema/section-faq-with-collapsing-answers-1';

//

export const SectionFAQWithCollapsingAnswers1 = ({
  heading,
  items,
  containerClassName,
}: SectionFAQWithCollapsingAnswers1Props) => (
  <section className={cn('py-32', containerClassName)}>
    <div className="container">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 font-semibold text-3xl md:mb-11 md:text-4xl">{heading}</h1>

        <Accordion>
          {items.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey:Allow
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

// Inspired by https://www.shadcnblocks.com/block/faq1
