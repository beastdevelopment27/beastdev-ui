import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/SectionHeading'
import { AnimatedSection, SectionHeading } from '@/components/common/SectionHeading'
import { CTABanner } from '@/components/common/CTABanner'
import { ProjectCard } from '@/components/common/Cards'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { projects, projectCategories } from '@/data/projects'
import { cn } from '@/lib/utils'
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore our portfolio of websites, SaaS platforms, dashboards, and mobile applications."
      />

      <PageHero
        title="Our Portfolio"
        description="A showcase of our best work — from startups to enterprise, we've helped businesses across industries build exceptional digital products."
      />

      <section className="pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                    activeCategory === category
                      ? 'bg-white text-zinc-900'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5 border border-white/10'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.05}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16">
            <SectionHeading
              label="Case Studies"
              title="Deep Dives Into Our Work"
              description="Explore detailed case studies to understand our approach and the results we deliver."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <Card className="overflow-hidden group hover:border-white/15 transition-all">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-8">
                    <Badge variant="outline" className="mb-3">{project.category}</Badge>
                    <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.results.slice(0, 2).map((result) => (
                        <div key={result.label} className="glass rounded-lg p-3 text-center">
                          <p className="text-2xl font-bold">{result.value}</p>
                          <p className="text-xs text-muted-foreground">{result.label}</p>
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="outline">
                      <Link to={`/portfolio/${project.id}`}>
                        Read Case Study <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Project in Mind?"
        description="Let's discuss how we can help bring your vision to life with our expertise and experience."
      />
    </>
  )
}
