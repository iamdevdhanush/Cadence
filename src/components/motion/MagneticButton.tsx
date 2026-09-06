'use client'

import { useRef, useEffect, useState, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: React.ReactNode
  strength?: number
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-medium rounded-btn focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed magnetic-btn relative overflow-visible'

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-hover hover:shadow-glow active:scale-[0.98]',
  secondary: 'bg-transparent border border-border text-text hover:bg-surface-alt hover:border-border-strong active:scale-[0.98]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-8 py-4 text-body-sm',
  lg: 'px-10 py-5 text-body',
}

function createStyle(position: { x: number; y: number }, isHovering: boolean) {
  return {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: isHovering ? 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  } as React.CSSProperties
}

export function MagneticButton({
  children,
  strength = 0.3,
  className,
  variant = 'primary',
  size = 'md',
  asChild,
  onMouseMove,
  onMouseLeave,
  onMouseEnter,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const ref = asChild ? spanRef : buttonRef

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: Event) => {
      const me = e as MouseEvent
      const rect = element.getBoundingClientRect()
      const x = me.clientX - rect.left - rect.width / 2
      const y = me.clientY - rect.top - rect.height / 2
      setPosition({ x: x * strength, y: y * strength })
      onMouseMove?.(me as unknown as React.MouseEvent<HTMLButtonElement>)
    }

    const handleMouseLeave = (e: Event) => {
      setPosition({ x: 0, y: 0 })
      setIsHovering(false)
      onMouseLeave?.(e as unknown as React.MouseEvent<HTMLButtonElement>)
    }

    const handleMouseEnter = (e: Event) => {
      setIsHovering(true)
      onMouseEnter?.(e as unknown as React.MouseEvent<HTMLButtonElement>)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
    element.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      element.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [strength, onMouseMove, onMouseLeave, onMouseEnter])

  const classNameStr = cn(baseStyles, variants[variant], sizes[size], className)
  const styleObj = createStyle(position, isHovering)

  if (asChild) {
    return (
      <span
        ref={spanRef}
        className={classNameStr}
        style={styleObj}
      >
        {children}
      </span>
    )
  }

  return (
    <button
      ref={buttonRef}
      className={classNameStr}
      style={styleObj}
      {...props}
    >
      {children}
    </button>
  )
}