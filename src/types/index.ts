export type ProjectCategory = 'Websites' | 'SaaS' | 'Dashboards' | 'Mobile Apps'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Project {
  id: string
  name: string
  category: ProjectCategory
  description: string
  shortDescription: string
  thumbnail: string
  technologies: string[]
  overview: string
  features: string[]
  screenshots: string[]
  results: { label: string; value: string }[]
  testimonial?: Testimonial
  client: string
  year: string
  duration: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  social: { linkedin?: string; twitter?: string; github?: string }
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  oneTimePrice: number
  features: string[]
  highlighted?: boolean
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface Stat {
  label: string
  value: string
}

export interface NavLink {
  label: string
  href: string
}
