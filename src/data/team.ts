import type { TeamMember } from '@/types'

export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    bio: 'Full-stack engineer with 12+ years building products for startups and Fortune 500 companies. Passionate about turning complex ideas into elegant software.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    id: 'tm2',
    name: 'Maya Patel',
    role: 'Lead Designer',
    bio: 'Award-winning UI/UX designer specializing in design systems and user research. Previously led design at two Y Combinator startups.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: 'tm3',
    name: 'Jordan Kim',
    role: 'Senior Developer',
    bio: 'TypeScript enthusiast and open-source contributor. Expert in React, Node.js, and cloud architecture with a focus on performance and scalability.',
    avatar: 'https://images.unsplash.com/photo-1519081908943-4d5d5c2a1f2?w=200&h=200&fit=crop',
    social: { linkedin: '#', github: '#' },
  },
  {
    id: 'tm4',
    name: 'Sophie Laurent',
    role: 'Project Manager',
    bio: 'Agile-certified PM with a background in software engineering. Ensures every project stays on track, on budget, and exceeds client expectations.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    social: { linkedin: '#', twitter: '#' },
  },
]

export const companyStats = [
  { label: 'Projects Delivered', value: '150+' },
  { label: 'Happy Clients', value: '80+' },
  { label: 'Years Experience', value: '8+' },
  { label: 'Team Members', value: '12' },
]

export const companyValues = [
  {
    title: 'Quality',
    description: 'We never compromise on code quality, design standards, or user experience. Every line of code and every pixel is crafted with intention.',
    icon: 'Award',
  },
  {
    title: 'Innovation',
    description: 'We stay at the forefront of technology, adopting new tools and methodologies that deliver better results for our clients.',
    icon: 'Lightbulb',
  },
  {
    title: 'Reliability',
    description: 'Deadlines matter. We deliver on time, communicate proactively, and stand behind our work with comprehensive support.',
    icon: 'Shield',
  },
  {
    title: 'Transparency',
    description: 'No hidden fees, no surprises. We keep you informed at every stage with clear timelines, regular updates, and honest feedback.',
    icon: 'Eye',
  },
]
