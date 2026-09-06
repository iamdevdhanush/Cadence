'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface Node {
  id: string
  label: string
  x: number
  y: number
  type: 'input' | 'core' | 'output'
}

interface Connection {
  from: string
  to: string
  delay?: number
}

interface ConnectionLinesProps {
  nodes: Node[]
  connections: Connection[]
  className?: string
  width?: number
  height?: number
  animate?: boolean
}

const defaultNodes: Node[] = [
  { id: 'whatsapp', label: 'WhatsApp', x: 10, y: 20, type: 'input' },
  { id: 'pdf', label: 'PDF', x: 10, y: 45, type: 'input' },
  { id: 'invoice', label: 'Invoice', x: 10, y: 70, type: 'input' },
  { id: 'spreadsheet', label: 'Spreadsheet', x: 10, y: 85, type: 'input' },
  { id: 'cadence', label: 'CADENCE', x: 50, y: 50, type: 'core' },
  { id: 'workflows', label: 'Automated Workflows', x: 90, y: 15, type: 'output' },
  { id: 'reports', label: 'Reports', x: 90, y: 35, type: 'output' },
  { id: 'notifications', label: 'Notifications', x: 90, y: 65, type: 'output' },
  { id: 'clean-data', label: 'Clean Data', x: 90, y: 85, type: 'output' },
]

const defaultConnections: Connection[] = [
  { from: 'whatsapp', to: 'cadence' },
  { from: 'pdf', to: 'cadence' },
  { from: 'invoice', to: 'cadence' },
  { from: 'spreadsheet', to: 'cadence' },
  { from: 'cadence', to: 'workflows' },
  { from: 'cadence', to: 'reports' },
  { from: 'cadence', to: 'notifications' },
  { from: 'cadence', to: 'clean-data' },
]

export function ConnectionLines({
  nodes = defaultNodes,
  connections = defaultConnections,
  className,
  width = 100,
  height = 100,
  animate = true,
}: ConnectionLinesProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [pathLengths, setPathLengths] = useState<Record<string, number>>({})

  useEffect(() => {
    if (!svgRef.current || !animate) return

    const paths = svgRef.current.querySelectorAll('.connection-path')
    const lengths: Record<string, number> = {}

    paths.forEach((path, index) => {
      const svgPath = path as SVGPathElement
      const length = svgPath.getTotalLength()
      const id = `path-${index}`
      lengths[id] = length
      svgPath.style.strokeDasharray = `${length}`
      svgPath.style.strokeDashoffset = `${length}`
    })

    setPathLengths(lengths)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          paths.forEach((path, index) => {
            const svgPath = path as SVGPathElement
            const id = `path-${index}`
            const length = lengths[id]
            if (length) {
              setTimeout(() => {
                svgPath.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
                svgPath.style.strokeDashoffset = '0'
              }, index * 150)
            }
          })
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(svgRef.current)
    return () => observer.disconnect()
  }, [animate, nodes, connections])

  const getNode = (id: string) => nodes.find((n) => n.id === id)

  const getPath = (fromId: string, toId: string) => {
    const from = getNode(fromId)
    const to = getNode(toId)
    if (!from || !to) return ''

    const startX = from.x
    const startY = from.y
    const endX = to.x
    const endY = to.y

    const midX = (startX + endX) / 2
    const midY = (startY + endY) / 2

    const cp1x = from.type === 'input' ? midX - 15 : midX + 15
    const cp1y = startY
    const cp2x = to.type === 'output' ? midX + 15 : midX - 15
    const cp2y = endY

    return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`
  }

  const getNodeColor = (type: Node['type']) => {
    switch (type) {
      case 'input':
        return 'rgba(24, 199, 161, 0.6)'
      case 'core':
        return '#18C7A1'
      case 'output':
        return 'rgba(24, 199, 161, 0.8)'
      default:
        return 'rgba(15, 23, 42, 0.6)'
    }
  }

  const getNodeBorder = (type: Node['type']) => {
    switch (type) {
      case 'core':
        return '#18C7A1'
      default:
        return 'rgba(15, 23, 42, 0.15)'
    }
  }

  const getNodeBg = (type: Node['type']) => {
    switch (type) {
      case 'core':
        return 'rgba(24, 199, 161, 0.1)'
      default:
        return 'rgba(15, 23, 42, 0.03)'
    }
  }

  return (
    <>
      <div className={cn('relative', className)} style={{ width: '100%', height: '100%', maxWidth: '600px' }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="coreGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18C7A1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#18C7A1" stopOpacity="0" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {connections.map((conn, index) => {
            const path = getPath(conn.from, conn.to)
            const fromNode = getNode(conn.from)
            const toNode = getNode(conn.to)
            if (!path || !fromNode || !toNode) return null

            const isFromCore = fromNode.type === 'core'
            const isToCore = toNode.type === 'core'

            return (
              <path
                key={index}
                d={path}
                stroke={isFromCore || isToCore ? '#18C7A1' : 'rgba(24, 199, 161, 0.4)'}
                strokeWidth={isFromCore || isToCore ? 1.5 : 1}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                className="connection-path"
                style={{
                  opacity: animate ? 0 : 1,
                  filter: isFromCore || isToCore ? 'drop-shadow(0 0 4px #18C7A1)' : 'none',
                } as React.CSSProperties}
              />
            )
          })}

          {nodes.map((node) => {
            const isCore = node.type === 'core'

            return (
              <g key={node.id} filter={isCore ? 'url(#glow)' : 'none'}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isCore ? 22 : 14}
                  fill={getNodeBg(node.type)}
                  stroke={getNodeBorder(node.type)}
                  strokeWidth={isCore ? 2 : 1}
                  style={{
                    transition: 'all 0.3s ease',
                  } as React.CSSProperties}
                />
                {isCore && animate && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={26}
                    fill="none"
                    stroke="#18C7A1"
                    strokeWidth="1"
                    strokeOpacity={0.3}
                    style={{ animation: 'pulse-core 3s ease-in-out infinite' } as React.CSSProperties}>
                    <animate
                      attributeName="r"
                      values="22;28;22"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-opacity"
                      values="0.3;0.1;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                <text
                  x={node.x}
                  y={node.y + (isCore ? 5 : 4)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isCore ? '#18C7A1' : '#0F172A'}
                  fontSize={isCore ? 10 : 8}
                  fontWeight={isCore ? 600 : 500}
                  fontFamily="Geist, system-ui, sans-serif"
                  style={{ letterSpacing: isCore ? '0.05em' : '0' }}
                >
                  {node.label}
                </text>
              </g>
            )
          })}
        </svg>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes pulse-core {
            0%, 100% { r: 22; stroke-opacity: 0.3; }
            50% { r: 28; stroke-opacity: 0.1; }
          }
        ` }} />
      </div>
    </>
  )
}