import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '@/components/common/SEO'
import { AnimatedSection, SectionHeading } from '@/components/common/SectionHeading'
import { CTABanner } from '@/components/common/CTABanner'
import { FAQSection } from '@/components/common/FAQSection'
import { ServiceCard, ProjectCard, TestimonialCard, ProcessSteps } from '@/components/common/Cards'
import { Button } from '@/components/ui/button'
import { services, processSteps } from '@/data/services'
import { projects } from '@/data/projects'
import { testimonials, trustedCompanies } from '@/data/testimonials'
import { generalFaqs } from '@/data/faqs'

const whyChooseUs = [
  'Expert team with 8+ years of experience',
  '150+ successful projects delivered',
  'Agile methodology with weekly demos',
  'Transparent pricing with no hidden fees',
  'Post-launch support and maintenance',
  'Modern tech stack and best practices',
]

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Beast Dev builds modern websites, SaaS platforms, mobile apps, and custom software for startups and businesses."
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-white/3 blur-3xl" />
        <div className="container relative mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground mb-8">
                <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                Available for new projects
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient mb-6"
            >
              Building Modern Digital Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              We create websites, SaaS platforms, mobile applications, and custom software for startups and businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg">
                <Link to="/contact">
                  Get Started <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-y border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustedCompanies.map((company, i) => (
              <motion.span
                key={company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-lg font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16">
            <SectionHeading
              label="Services"
              title="What We Build"
              description="From concept to launch, we deliver end-to-end digital solutions tailored to your business goals."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.05}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <Button asChild variant="outline">
              <Link to="/services">View All Services <ArrowRight className="size-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeading
                label="Why Us"
                title="Why Choose Beast Dev"
                description="We combine technical excellence with business understanding to deliver products that drive real results."
                align="left"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3 glass rounded-lg p-4">
                    <Check className="size-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16">
            <SectionHeading
              label="Portfolio"
              title="Featured Projects"
              description="Explore our latest work and see how we help businesses transform their digital presence."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <Button asChild variant="outline">
              <Link to="/portfolio">View All Projects <ArrowRight className="size-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16">
            <SectionHeading
              label="Process"
              title="Our Development Process"
              description="A proven methodology that ensures quality, transparency, and on-time delivery."
            />
          </AnimatedSection>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16">
            <SectionHeading
              label="Testimonials"
              title="What Our Clients Say"
              description="Don't just take our word for it — hear from the businesses we've helped grow."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.1}>
                <TestimonialCard testimonial={t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 md:py-28 border-t border-white/8">
        <FAQSection faqs={generalFaqs.slice(0, 4)} />
      </section>

      <CTABanner />
    </>
  )
}
