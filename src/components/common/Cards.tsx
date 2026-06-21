import { Link } from 'react-router-dom'
import {
  Globe, Cloud, Smartphone, Palette, Server, Plug, Wrench,
  Check, ArrowRight, Award, Lightbulb, Shield, Eye,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Service } from '@/types'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  Globe, Cloud, Smartphone, Palette, Server, Plug, Wrench,
  Award, Lightbulb, Shield, Eye,
}

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Globe
  return (
    <div className={cn('flex size-12 items-center justify-center rounded-xl bg-white/10', className)}>
      <Icon className="size-6" />
    </div>
  )
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group hover:bg-white/[0.05] transition-all duration-300 hover:border-white/15">
      <CardContent className="p-6">
        <ServiceIcon name={service.icon} className="mb-4 group-hover:bg-white/15 transition-colors" />
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="size-4 text-foreground shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>
        <Button asChild variant="ghost" size="sm" className="px-0 hover:bg-transparent">
          <Link to="/services">
            Learn more <ArrowRight className="size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export function ProcessSteps({ steps }: { steps: import('@/types').ProcessStep[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {steps.map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative text-center"
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-white text-zinc-900 font-bold text-lg mx-auto mb-4">
            {step.step}
          </div>
          <h3 className="font-semibold mb-2">{step.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
