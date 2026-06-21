import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </div>
  )
}

interface PageHeroProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
