import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/SectionHeading'
import { AnimatedSection, SectionHeading } from '@/components/common/SectionHeading'
import { CTABanner } from '@/components/common/CTABanner'
import { FAQSection } from '@/components/common/FAQSection'
import { ServiceIcon, ProcessSteps } from '@/components/common/Cards'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { services, processSteps, technologies } from '@/data/services'
import { generalFaqs } from '@/data/faqs'

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Full-stack software development services including websites, SaaS, mobile apps, UI/UX design, and more."
      />

      <PageHero
        title="Our Services"
        description="Comprehensive software development services to bring your digital vision to life, from initial concept to ongoing support."
      />

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.05}>
                <Card className="h-full hover:bg-white/[0.05] transition-all duration-300 hover:border-white/15">
                  <CardContent className="p-8">
                    <ServiceIcon name={service.icon} className="mb-6" />
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link to="/contact">
                        Get a Quote <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16">
            <SectionHeading
              label="Process"
              title="How We Work"
              description="Our structured approach ensures every project is delivered on time, on budget, and exceeds expectations."
            />
          </AnimatedSection>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12">
            <SectionHeading
              label="Tech Stack"
              title="Technologies We Use"
              description="We leverage cutting-edge tools and frameworks to build scalable, performant applications."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/8">
        <FAQSection faqs={generalFaqs} />
      </section>

      <CTABanner
        title="Need a Custom Solution?"
        description="Every project is unique. Let's discuss your requirements and create a tailored plan."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}
