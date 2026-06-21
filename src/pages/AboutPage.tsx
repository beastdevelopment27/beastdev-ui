import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/SectionHeading'
import { AnimatedSection, SectionHeading } from '@/components/common/SectionHeading'
import { CTABanner } from '@/components/common/CTABanner'
import { ServiceIcon } from '@/components/common/Cards'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { teamMembers, companyStats, companyValues } from '@/data/team'
import { technologies } from '@/data/services'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Beast Dev — our story, mission, values, and the team behind our software development agency."
      />

      <PageHero
        title="About Beast Dev"
        description="We're a team of passionate developers, designers, and strategists dedicated to building exceptional digital products."
      />

      {/* Stats */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <Card className="p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeading
                label="Our Story"
                title="Built on Passion for Craft"
                align="left"
              />
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Beast Dev was founded in 2018 with a simple belief: great software should be accessible to every business, not just tech giants. What started as a two-person team has grown into a full-service development agency serving clients worldwide.
                </p>
                <p>
                  We've delivered projects across industries — from fintech and healthcare to e-commerce and SaaS. Our approach combines technical excellence with deep business understanding, ensuring every product we build drives measurable results.
                </p>
                <p>
                  Today, we're a team of 2 who share a commitment to quality, innovation, and client success. We don't just write code — we partner with you to build products that matter.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Beast Dev team collaborating"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with world-class digital products that drive growth, efficiency, and innovation. We bridge the gap between ambitious ideas and production-ready software.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted development partner for startups and businesses worldwide — known for exceptional quality, transparent communication, and products that stand the test of time.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16">
            <SectionHeading
              label="Values"
              title="What We Stand For"
              description="The principles that guide every decision we make and every line of code we write."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <Card className="p-6 h-full text-center">
                  <ServiceIcon name={value.icon} className="mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12">
            <SectionHeading
              label="Tech Stack"
              title="Technologies We Master"
              description="We stay current with the latest tools to deliver cutting-edge solutions."
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

      {/* Team */}
      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16">
            <SectionHeading
              label="Team"
              title="Meet the Team"
            />
          </AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.1}>
                <Card className="px-8 py-6 hover:border-white/15 transition-all">
                  <p className="font-semibold text-lg text-center">{member.name}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Work With Us?"
        description="We're always looking for exciting projects and great partnerships. Let's talk about yours."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
