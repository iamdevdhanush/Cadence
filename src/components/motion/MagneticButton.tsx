'use client'

import { useRef, useEffect, useState, type MouseEvent, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface MagneticButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: React.ReactNode
  strength?: number
  className?: string
}

export function MagneticButton({
  children,
  strength = 0.3,
  className,
  onMouseMove,
  onMouseLeave,
  onMouseEnter,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setPosition({ x: x * strength, y: y * strength })
      onMouseMove?.(e)
    }

    const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
      setPosition({ x: 0, y: 0 })
      setIsHovering(false)
      onMouseLeave?.(e)
    }

    const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
      setIsHovering(true)
      onMouseEnter?.(e)
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

  return (
    <Button
      ref={ref}
      className={cn('magnetic-btn relative overflow-visible', className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isHovering ? 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </Button>
  )
}