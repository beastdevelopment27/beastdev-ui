import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '@/components/common/SEO'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[400px] rounded-full bg-white/3 blur-3xl" />

        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="text-[120px] md:text-[180px] font-bold leading-none text-gradient opacity-20 select-none"
            >
              404
            </motion.p>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 -mt-8 md:-mt-12">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="size-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <ArrowLeft className="size-4" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
