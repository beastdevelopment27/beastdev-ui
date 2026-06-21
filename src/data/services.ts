import type { Service, ProcessStep } from '@/types'

export const services: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    description:
      'High-performance, conversion-focused websites built with modern frameworks. From landing pages to complex multi-page platforms, we craft digital experiences that captivate and convert.',
    icon: 'Globe',
    features: [
      'Responsive & mobile-first design',
      'Performance optimization (90+ Lighthouse)',
      'SEO-ready architecture',
      'CMS integration (Sanity, Contentful)',
      'Analytics & conversion tracking',
    ],
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    description:
      'End-to-end SaaS platform development from MVP to scale. We build subscription-based products with robust authentication, billing, and multi-tenant architecture.',
    icon: 'Cloud',
    features: [
      'Multi-tenant architecture',
      'Stripe billing integration',
      'Role-based access control',
      'Real-time features & websockets',
      'Scalable cloud deployment',
    ],
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'Native-quality mobile applications for iOS and Android using React Native and Expo. Seamless user experiences with offline support and push notifications.',
    icon: 'Smartphone',
    features: [
      'Cross-platform (iOS & Android)',
      'Offline-first architecture',
      'Push notifications',
      'App Store deployment',
      'Biometric authentication',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'User-centered design that balances aesthetics with usability. We create design systems, wireframes, and high-fidelity prototypes that guide development.',
    icon: 'Palette',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Design system creation',
      'Usability testing',
      'Figma handoff & specs',
    ],
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description:
      'Scalable server-side solutions with clean architecture. RESTful and GraphQL APIs, microservices, and database design optimized for performance and security.',
    icon: 'Server',
    features: [
      'REST & GraphQL APIs',
      'Database design & optimization',
      'Microservices architecture',
      'Cloud infrastructure (AWS, GCP)',
      'Security & compliance',
    ],
  },
  {
    id: 'api-integrations',
    title: 'API Integrations',
    description:
      'Seamless third-party integrations that extend your product capabilities. Payment gateways, CRMs, marketing tools, and custom API connections.',
    icon: 'Plug',
    features: [
      'Payment gateway integration',
      'CRM & ERP connections',
      'Webhook implementations',
      'OAuth & SSO setup',
      'Data synchronization',
    ],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description:
      'Ongoing support to keep your applications running smoothly. Bug fixes, security updates, performance monitoring, and feature enhancements on demand.',
    icon: 'Wrench',
    features: [
      '24/7 monitoring & alerts',
      'Security patch management',
      'Performance optimization',
      'Bug fixes & hotfixes',
      'Monthly reporting & analytics',
    ],
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery',
    description:
      'We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
  },
  {
    step: 2,
    title: 'Design',
    description:
      'Our designers craft intuitive interfaces and interactive prototypes, ensuring every pixel serves a purpose before development begins.',
  },
  {
    step: 3,
    title: 'Development',
    description:
      'Agile sprints with weekly demos keep you in the loop. We build with clean code, automated tests, and continuous integration.',
  },
  {
    step: 4,
    title: 'Launch',
    description:
      'Rigorous QA, performance optimization, and seamless deployment. We handle the technical details so you can focus on your launch.',
  },
  {
    step: 5,
    title: 'Support',
    description:
      'Post-launch monitoring, analytics review, and ongoing improvements. We grow with your product long after launch day.',
  },
]

export const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB',
  'AWS', 'Vercel', 'Docker', 'GraphQL', 'Tailwind CSS', 'React Native',
  'Python', 'Redis', 'Supabase', 'Stripe', 'Figma', 'Prisma',
]
