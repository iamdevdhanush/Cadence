'use client'

import { useEffect, useRef, useState, type ReactElement, Children, isValidElement, cloneElement } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay, threshold, rootMargin, once])

  return (
    <div
      ref={ref}
      className={cn(
        'scroll-reveal',
        isVisible && 'visible',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  baseDelay?: number
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className,
  baseDelay = 0,
  staggerDelay = 100,
}: StaggerContainerProps) {
  const childArray = Children.toArray(children)
  return (
    <div className={cn('flex flex-col', className)}>
      {childArray.map((child, index) => {
        if (!isValidElement(child)) return child
        return cloneElement(child as ReactElement, {
          delay: baseDelay + index * staggerDelay,
        } as ScrollRevealProps)
      })}
    </div>
  )
}