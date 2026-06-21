import { Link } from 'react-router-dom'
import { Logo } from '@/components/common/Logo'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/common/SocialIcons'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Website Development', href: '/services' },
    { label: 'SaaS Development', href: '/services' },
    { label: 'Mobile Apps', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
  ],
}

const socialLinks = [
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: GithubIcon, href: '#', label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/8 mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium software development agency building modern digital solutions for startups and businesses worldwide.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@beastdev.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Beast Dev. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
