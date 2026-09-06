'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'motion/react'

interface FlowNode {
  id: string
  label: string
  position: { x: number; y: number }
  type: 'input' | 'process' | 'output'
  color: string
}

interface FlowConnection {
  from: string
  to: string
}

const nodeData: FlowNode[] = [
  { id: 'whatsapp', label: 'WhatsApp', position: { x: 50, y: 100 }, type: 'input', color: '#25D366' },
  { id: 'email', label: 'Email', position: { x: 50, y: 200 }, type: 'input', color: '#EA4335' },
  { id: 'pdf', label: 'PDF', position: { x: 50, y: 300 }, type: 'input', color: '#FF6B00' },
  { id: 'sheets', label: 'Sheets', position: { x: 50, y: 400 }, type: 'input', color: '#34A853' },
  { id: 'cadence', label: 'CADENCE', position: { x: 400, y: 250 }, type: 'process', color: '#18C7A1' },
  { id: 'crm', label: 'CRM', position: { x: 750, y: 100 }, type: 'output', color: '#18C7A1' },
  { id: 'erp', label: 'ERP', position: { x: 750, y: 200 }, type: 'output', color: '#18C7A1' },
  { id: 'reports', label: 'Reports', position: { x: 750, y: 300 }, type: 'output', color: '#18C7A1' },
  { id: 'notifications', label: 'Notifications', position: { x: 750, y: 400 }, type: 'output', color: '#18C7A1' },
]

const connections: FlowConnection[] = [
  { from: 'whatsapp', to: 'cadence' },
  { from: 'email', to: 'cadence' },
  { from: 'pdf', to: 'cadence' },
  { from: 'sheets', to: 'cadence' },
  { from: 'cadence', to: 'crm' },
  { from: 'cadence', to: 'erp' },
  { from: 'cadence', to: 'reports' },
  { from: 'cadence', to: 'notifications' },
]

interface NodeFlowProps {
  className?: string
  width?: number
  height?: number
}

export function NodeFlow({ className, width = 800, height = 500 }: NodeFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: string; progress: number; connection: FlowConnection }>>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      const randomConnection = connections[Math.floor(Math.random() * connections.length)]
      setParticles((prev) => [
        ...prev.slice(-19),
        { id: `${randomConnection.from}-${randomConnection.to}-${Date.now()}`, progress: 0, connection: randomConnection },
      ])
    }, 800)

    const animateInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, progress: p.progress + 0.02 }))
          .filter((p) => p.progress <= 1)
      )
    }, 30)

    return () => {
      clearInterval(interval)
      clearInterval(animateInterval)
    }
  }, [isVisible])

  const getNode = (id: string) => nodeData.find((n) => n.id === id)

  const getPath = (fromId: string, toId: string) => {
    const from = getNode(fromId)
    const to = getNode(toId)
    if (!from || !to) return ''

    const startX = from.position.x
    const startY = from.position.y
    const endX = to.position.x
    const endY = to.position.y

    const midX = (startX + endX) / 2
    const cp1x = from.type === 'input' ? midX - 50 : midX + 50
    const cp1y = startY
    const cp2x = to.type === 'output' ? midX + 50 : midX - 50
    const cp2y = endY

    return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`
  }

  const getPointOnPath = (path: string, progress: number) => {
    const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    tempPath.setAttribute('d', path)
    const length = tempPath.getTotalLength()
    const point = tempPath.getPointAtLength(length * progress)
    return { x: point.x, y: point.y }
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width: '100%', maxWidth: width, height, margin: '0 auto' }}
      role="img"
      aria-label="Cadence automation workflow visualization"
    >
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18C7A1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#18C7A1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#18C7A1" stopOpacity="0.3" />
          </linearGradient>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke="url(#lineGradient)" strokeWidth={1.5} strokeLinecap="round" fill="none" opacity={0.6}>
          {connections.map((conn, index) => {
            const path = getPath(conn.from, conn.to)
            return (
              <motion.path
                key={index}
                d={path}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              />
            )
          })}
        </g>

        <AnimatePresence>
          {particles.map((particle) => {
            const path = getPath(particle.connection.from, particle.connection.to)
            const point = getPointOnPath(path, particle.progress)
            if (!point) return null

            return (
              <motion.circle
                key={particle.id}
                cx={point.x}
                cy={point.y}
                r={4}
                fill="#18C7A1"
                filter="url(#nodeGlow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )
          })}
        </AnimatePresence>

        {nodeData.map((node) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * nodeData.indexOf(node) + 0.5, type: 'spring', stiffness: 100, damping: 15 }}
            whileHover={{ scale: 1.1 }}
          >
            <circle
              cx={node.position.x}
              cy={node.position.y}
              r={node.type === 'process' ? 30 : 20}
              fill={node.type === 'process' ? 'rgba(24, 199, 161, 0.1)' : `rgba(${parseInt(node.color.slice(1, 3), 16)}, ${parseInt(node.color.slice(3, 5), 16)}, ${parseInt(node.color.slice(5, 7), 16)}, 0.1)`}
              stroke={node.type === 'process' ? '#18C7A1' : node.color}
              strokeWidth={node.type === 'process' ? 2 : 1.5}
              filter={node.type === 'process' ? 'url(#nodeGlow)' : 'none'}
            />
            {node.type === 'process' && (
              <motion.circle
                cx={node.position.x}
                cy={node.position.y}
                r={34}
                fill="none"
                stroke="#18C7A1"
                strokeWidth={1}
                strokeOpacity={0.2}
                animate={{ r: [34, 40, 34], strokeOpacity: [0.2, 0.05, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            <text
              x={node.position.x}
              y={node.position.y + 4}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={node.type === 'process' ? '#18C7A1' : '#0F172A'}
              fontSize={node.type === 'process' ? 11 : 9}
              fontWeight={node.type === 'process' ? 600 : 500}
              fontFamily="Geist, system-ui, sans-serif"
              style={{ letterSpacing: node.type === 'process' ? '0.05em' : '0' }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}