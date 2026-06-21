import { Skeleton } from '@/components/ui/skeleton'

export function ProjectCardSkeleton() {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
      </div>
    </div>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="glass rounded-xl p-6 space-y-4">
      <Skeleton className="size-10 rounded-lg" />
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <div className="space-y-2 pt-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
      </div>
    </div>
  )
}
