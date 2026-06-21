import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '@/components/common/SEO'
import { AnimatedSection, SectionHeading } from '@/components/common/SectionHeading'
import { CTABanner } from '@/components/common/CTABanner'
import { ProjectCard } from '@/components/common/Cards'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { projects } from '@/data/projects'

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    )
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2)

  return (
    <>
      <SEO title={project.name} description={project.description} />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="size-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-background/60" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Button asChild variant="ghost" size="sm" className="mb-6">
              <Link to="/portfolio">
                <ArrowLeft className="size-4" /> Back to Portfolio
              </Link>
            </Button>
            <Badge variant="outline" className="mb-4">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {project.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span>Client: <strong className="text-foreground">{project.client}</strong></span>
              <span>Year: <strong className="text-foreground">{project.year}</strong></span>
              <span>Duration: <strong className="text-foreground">{project.duration}</strong></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.overview}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h3 className="text-lg font-semibold mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12">
            <SectionHeading title="Key Features" align="left" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <AnimatedSection key={feature} delay={i * 0.05}>
                <div className="flex items-start gap-3 glass rounded-lg p-4">
                  <Check className="size-5 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 md:py-20 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12">
            <SectionHeading title="Screenshots" description="A visual tour of the project." />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6">
            {project.screenshots.map((screenshot, i) => (
              <AnimatedSection key={screenshot} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={screenshot}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-20 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12">
            <SectionHeading title="Results & Metrics" description="Measurable impact delivered by this project." />
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((result, i) => (
              <AnimatedSection key={result.label} delay={i * 0.1}>
                <Card className="p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold mb-2">{result.value}</p>
                  <p className="text-sm text-muted-foreground">{result.label}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 md:py-20 border-t border-white/8">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection>
              <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: project.testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-5 fill-white text-white" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                  &ldquo;{project.testimonial.content}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={project.testimonial.avatar}
                    alt={project.testimonial.name}
                    className="size-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{project.testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {project.testimonial.role}, {project.testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-20 border-t border-white/8">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="mb-12">
              <SectionHeading title="Related Projects" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedProjects.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 0.1}>
                  <ProjectCard project={p} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Inspired by This Project?"
        description="Let's create something equally impressive for your business."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View More Work"
        secondaryHref="/portfolio"
      />
    </>
  )
}
