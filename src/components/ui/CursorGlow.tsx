'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'motion/react'

export function CursorGlow() {
  const [mounted, setMounted] = useState(false)
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-multiply blur-[90px]"
        style={{
          x: mouseX,
          y: mouseY,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(24, 198, 163, 0.08) 45%, transparent 70%)',
        }}
      />
    </div>
  )
}
