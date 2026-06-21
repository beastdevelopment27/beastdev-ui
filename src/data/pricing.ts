import type { PricingPlan } from '@/types'

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for businesses launching their online presence with a professional landing page.',
    monthlyPrice: 499,
    oneTimePrice: 2499,
    features: [
      'Single landing page',
      'Responsive design',
      'Contact form integration',
      'Basic SEO optimization',
      'Google Analytics setup',
      '30-day post-launch support',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Ideal for growing businesses that need a comprehensive web presence with content management.',
    monthlyPrice: 999,
    oneTimePrice: 5999,
    highlighted: true,
    features: [
      'Multi-page website (up to 10 pages)',
      'Custom design & branding',
      'CMS integration (Sanity/Contentful)',
      'Advanced SEO & performance',
      'Blog & content management',
      'Analytics dashboard',
      '60-day post-launch support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Full-scale digital product development for startups building SaaS platforms and complex applications.',
    monthlyPrice: 2499,
    oneTimePrice: 14999,
    features: [
      'SaaS platform development',
      'Admin dashboard',
      'User authentication & roles',
      'API integration & development',
      'Payment processing (Stripe)',
      'Custom features & integrations',
      '90-day post-launch support',
    ],
  },
]
