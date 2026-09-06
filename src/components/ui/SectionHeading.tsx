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
        <span className="inline-block mb-[20px] px-4 py-2 text-caption font-medium tracking-widest uppercase text-accent bg-accent-soft rounded-pill">
          {eyebrow}
        </span>
      )}
      <h2 className="text-section-heading font-semibold tracking-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-[24px] text-body-lg text-text-muted max-w-text">
          {description}
        </p>
      )}
    </div>
  )
}