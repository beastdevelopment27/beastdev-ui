import { useState, type FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '@/components/common/SEO'
import { PageHero } from '@/components/common/SectionHeading'
import { AnimatedSection } from '@/components/common/SectionHeading'
import { CTABanner } from '@/components/common/CTABanner'
import { FAQSection } from '@/components/common/FAQSection'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { contactFaqs } from '@/data/faqs'
import { sendContactFormToDiscord } from '@/lib/discordWebhook'

const projectTypes = [
  'Website Development',
  'SaaS Platform',
  'Mobile App',
  'UI/UX Design',
  'Backend/API',
  'Other',
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+',
  'Not sure yet',
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [projectType, setProjectType] = useState('')
  const [budget, setBudget] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)

    if (!projectType) {
      setSubmitError('Please select a project type.')
      return
    }

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const company = formData.get('company')?.toString().trim()
    const message = formData.get('message')?.toString().trim() ?? ''

    setIsSubmitting(true)

    try {
      await sendContactFormToDiscord({
        name,
        email,
        company: company || undefined,
        projectType,
        budget: budget || undefined,
        message,
      })
      setIsSubmitted(true)
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Beast Dev for a free consultation. Tell us about your project and we'll get back to you within 24 hours."
      />

      <PageHero
        title="Let's Build Together"
        description="Have a project in mind? Fill out the form below and we'll get back to you within 24 hours with a free consultation."
      />

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <Card className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="size-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" name="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Your Company" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select value={projectType} onValueChange={setProjectType} required>
                          <SelectTrigger id="projectType">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget</Label>
                        <Select value={budget} onValueChange={setBudget}>
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>{range}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your project, goals, and timeline..."
                        rows={5}
                      />
                    </div>
                    {submitError && (
                      <p className="text-sm text-red-400">{submitError}</p>
                    )}
                    <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner size="sm" className="mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="size-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </AnimatedSection>

            <AnimatedSection className="mt-6" delay={0.1}>
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Office Hours</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Monday - Friday: 7:00 AM - 11:00 PM IST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/8">
        <FAQSection faqs={contactFaqs} />
      </section>

      <CTABanner
        title="Prefer a Quick Chat?"
        description="Schedule a free 30-minute discovery call to discuss your project requirements."
        primaryLabel="Schedule a Call"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}
