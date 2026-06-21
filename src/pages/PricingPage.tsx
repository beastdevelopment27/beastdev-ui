import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/SectionHeading'
import { AnimatedSection } from '@/components/common/SectionHeading'
import { CTABanner } from '@/components/common/CTABanner'
import { FAQSection } from '@/components/common/FAQSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { pricingPlans } from '@/data/pricing'
import { pricingFaqs } from '@/data/faqs'
import { cn } from '@/lib/utils'

export default function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(false)

  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent pricing plans for websites, business platforms, and SaaS development."
      />

      <PageHero
        title="Simple, Transparent Pricing"
        description="Choose the plan that fits your needs. All plans include dedicated support and quality assurance."
      >
        <div className="flex items-center justify-center gap-3 mt-8">
          <Label htmlFor="billing-toggle" className={cn(!isMonthly && 'text-foreground', isMonthly && 'text-muted-foreground')}>
            One Time
          </Label>
          <Switch id="billing-toggle" checked={isMonthly} onCheckedChange={setIsMonthly} />
          <Label htmlFor="billing-toggle" className={cn(isMonthly && 'text-foreground', !isMonthly && 'text-muted-foreground')}>
            Monthly
          </Label>
        </div>
      </PageHero>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.id} delay={i * 0.1}>
                <Card
                  className={cn(
                    'relative h-full flex flex-col',
                    plan.highlighted && 'border-white/20 glow scale-[1.02]'
                  )}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-zinc-900 text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                    <div className="mb-8">
                      <span className="text-4xl font-bold">
                        ${isMonthly ? plan.monthlyPrice : plan.oneTimePrice}
                      </span>
                      <span className="text-muted-foreground text-sm ml-1">
                        {isMonthly ? '/month' : ' one-time'}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="size-4 shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant={plan.highlighted ? 'default' : 'outline'}
                      className="w-full"
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/8">
        <FAQSection
          faqs={pricingFaqs}
          title="Pricing FAQ"
          description="Common questions about our pricing and payment options."
        />
      </section>

      <CTABanner
        title="Need a Custom Quote?"
        description="Every project is unique. Contact us for a tailored proposal based on your specific requirements."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
