'use client'

import { forwardRef, type ButtonHTMLAttributes, type ComponentPropsWithoutRef, type ElementType } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  asChild?: boolean
}

type PolymorphicButtonProps<C extends ElementType> = Omit<ComponentPropsWithoutRef<C>, keyof ButtonProps> & ButtonProps & {
  as?: C
}

const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-medium rounded-btn focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-hover hover:shadow-glow active:scale-[0.98]',
  secondary: 'bg-transparent border border-border text-text hover:bg-surface-alt hover:border-border-strong active:scale-[0.98]',
  ghost: 'bg-transparent text-text-muted hover:bg-surface-alt hover:text-text active:scale-[0.98]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-8 py-4 text-body-sm',
  lg: 'px-10 py-5 text-body',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, asChild, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={!asChild && (disabled || isLoading)}
        {...(asChild ? {} : props)}
      >
        {isLoading && !asChild && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Comp>
    )
  }
)

Button.displayName = 'Button'