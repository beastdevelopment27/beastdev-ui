export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface TeamMember {
  id: string
  name: string
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
