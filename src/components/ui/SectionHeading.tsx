'use client'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
  maxWidth?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
  maxWidth = true,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-text', maxWidth && 'max-w-text', className)} style={{ textAlign: align }}>
      {eyebrow && (
        <span className="inline-block mb-4 px-3 py-1 text-xs font-medium tracking-widest uppercase text-accent bg-accent/10 rounded-pill">
          {eyebrow}
        </span>
      )}
      <h2 className="text-section-heading font-semibold tracking-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-body-lg text-muted/90 max-w-text">
          {description}
        </p>
      )}
    </div>
  )
}