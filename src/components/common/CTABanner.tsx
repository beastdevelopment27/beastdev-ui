import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/common/SectionHeading'

interface CTABannerProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTABanner({
  title = 'Ready to Build Something Amazing?',
  description = 'Let us help you bring your vision to life. Get in touch for a free consultation and project estimate.',
  primaryLabel = 'Get Started',
  primaryHref = '/contact',
  secondaryLabel = 'View Pricing',
  secondaryHref = '/pricing',
}: CTABannerProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl glass-strong glow p-8 md:p-16 text-center">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-white/5" />
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                {title}
              </motion.h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link to={primaryHref}>
                    {primaryLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
