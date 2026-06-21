import type { FAQ } from '@/types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedSection, SectionHeading } from '@/components/common/SectionHeading'

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  description?: string
  className?: string
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  description = 'Find answers to common questions about our services and process.',
  className,
}: FAQSectionProps) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12">
          <SectionHeading title={title} description={description} />
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
