'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'muted' | 'outline'
  size?: 'sm' | 'md'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center gap-1.5 font-medium rounded-pill'

    const variants = {
      default: 'bg-accent-soft text-accent border border-accent/20',
      accent: 'bg-accent text-white',
      muted: 'bg-surface-alt text-text-muted border border-border',
      outline: 'bg-transparent text-text border border-border',
    }

    const sizes = {
      sm: 'px-2.5 py-0.5 text-caption',
      md: 'px-3 py-1 text-sm',
    }

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'