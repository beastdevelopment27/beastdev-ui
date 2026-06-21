import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link to="/" className={cn('flex items-center gap-2.5 group', className)}>
      <div className="relative flex size-9 items-center justify-center rounded-lg bg-white text-zinc-900 font-bold text-lg transition-transform group-hover:scale-105">
        B
        <div className="absolute inset-0 rounded-lg bg-white/20 blur-md -z-10" />
      </div>
      {showText && (
        <span className="font-semibold text-lg tracking-tight">
          Beast <span className="text-muted-foreground font-normal">Dev</span>
        </span>
      )}
    </Link>
  )
}
