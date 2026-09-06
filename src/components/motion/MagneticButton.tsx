'use client'

import { useRef, useEffect, useState, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: React.ReactNode
  strength?: number
  className?: string
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const baseStyles =
  'relative inline-flex items-center justify-center gap-3 font-medium transition-colors duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'

const variants = {
  primary:
    'bg-[#0B1020] text-white hover:bg-black rounded-pill shadow-elevated border border-black/10',
  secondary:
    'bg-surface/80 backdrop-blur-md text-[#0B1020] border border-border hover:border-[#0B1020]/30 hover:bg-surface rounded-pill shadow-subtle',
  dark:
    'bg-[#18C6A3] text-[#0B1020] font-semibold hover:bg-[#13A889] hover:text-white rounded-pill shadow-glow-emerald',
  ghost:
    'bg-transparent text-[#0B1020] hover:text-accent font-medium rounded-pill',
}

const sizes = {
  sm: 'px-4 py-2 text-xs tracking-wider uppercase font-mono',
  md: 'px-7 py-3.5 text-sm tracking-tight',
  lg: 'px-9 py-4 text-base tracking-tight',
}

export function MagneticButton({
  children,
  strength = 0.25,
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
    }

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
      setIsHovering(false)
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
    element.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      element.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [strength, ref])

  const styleObj: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isHovering
      ? 'transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)'
      : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  }

  const classNameStr = cn(baseStyles, variants[variant], sizes[size], className)

  if (asChild) {
    return (
      <span ref={spanRef} className={classNameStr} style={styleObj}>
        {children}
      </span>
    )
  }

  return (
    <button ref={buttonRef} className={classNameStr} style={styleObj} {...props}>
      {children}
    </button>
  )
}