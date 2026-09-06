'use client'

import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

export function HeroWorkflow3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeNode, setActiveNode] = useState<string | null>('core')

  // Mouse tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 100 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3] max-w-[620px] mx-auto perspective-1000 select-none"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {/* Ambient background glow inside composition */}
        <div
          className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Dynamic SVG Connection Splines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 600 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#18C6A3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#18C6A3" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#18C6A3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Node 1 to Core */}
          <path
            d="M 170 120 C 230 120, 240 210, 290 220"
            stroke="url(#streamGrad1)"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-[dash_20s_linear_infinite]"
          />

          {/* Node 2 to Core */}
          <path
            d="M 160 320 C 220 320, 240 240, 290 230"
            stroke="url(#streamGrad1)"
            strokeWidth="2"
          />

          {/* Core to Output 1 */}
          <path
            d="M 390 210 C 440 200, 440 130, 480 125"
            stroke="url(#streamGrad2)"
            strokeWidth="2"
          />

          {/* Core to Output 2 */}
          <path
            d="M 390 230 C 430 240, 440 310, 475 325"
            stroke="url(#streamGrad2)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Animated pulse packet along path 1 */}
          <motion.circle
            r="4"
            fill="#18C6A3"
            filter="url(#glowFilter)"
            animate={{
              cx: [170, 230, 290],
              cy: [120, 160, 220],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Animated pulse packet along path 2 */}
          <motion.circle
            r="4"
            fill="#3B82F6"
            filter="url(#glowFilter)"
            animate={{
              cx: [390, 440, 480],
              cy: [210, 160, 125],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: 1.2,
              ease: 'easeInOut',
            }}
          />
        </svg>

        {/* NODE 1: Inbound Webhook / Intake (Top Left) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-8 left-4 z-20"
          style={{ transform: 'translateZ(40px)' }}
          onMouseEnter={() => setActiveNode('inbound')}
        >
          <div className="p-4 rounded-card-sm bg-surface/90 backdrop-blur-xl border border-border shadow-elevated w-56 hover:border-accent transition-colors duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-text-light">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Stream Ingest
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">
                200 OK
              </span>
            </div>
            <div className="font-mono text-xs font-semibold text-text truncate">
              WhatsApp & EDI Stream
            </div>
            <div className="mt-2 text-[11px] text-text-muted font-mono flex items-center justify-between pt-2 border-t border-border/60">
              <span>Payload: 4.8 KB</span>
              <span className="text-accent font-medium">99.8% Parsed</span>
            </div>
          </div>
        </motion.div>

        {/* NODE 2: Unstructured Document Ingest (Bottom Left) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-10 left-2 z-20"
          style={{ transform: 'translateZ(30px)' }}
          onMouseEnter={() => setActiveNode('docs')}
        >
          <div className="p-4 rounded-card-sm bg-surface/90 backdrop-blur-xl border border-border shadow-elevated w-52 hover:border-accent transition-colors duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] tracking-wider uppercase text-text-light">
                Doc Intelligence
              </span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <div className="font-mono text-xs font-semibold text-text">
              Bills of Lading & Invoices
            </div>
            <div className="mt-2 text-[11px] text-text-muted font-mono flex items-center justify-between pt-2 border-t border-border/60">
              <span>OCR + VLM</span>
              <span className="text-blue-600 font-medium">42ms OCR</span>
            </div>
          </div>
        </motion.div>

        {/* CENTRAL NODE: Cadence Neural Orchestrator (Center) */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          style={{ transform: 'translate3d(-50%, -50%, 60px)' }}
          onMouseEnter={() => setActiveNode('core')}
        >
          <div className="relative p-6 rounded-card bg-[#0B1020] text-white shadow-floating border border-white/10 w-64 hover:border-accent/80 transition-all duration-300 group">
            {/* Ambient emerald core glow */}
            <div className="absolute -inset-1 rounded-card bg-gradient-to-r from-accent/20 to-blue-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
                    Cadence Core
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/50">v4.8.2</span>
              </div>

              <div className="text-base font-bold tracking-tight text-white mb-1">
                Autonomous Engine
              </div>
              <div className="text-xs text-white/70 font-mono mb-4">
                Routing • Validation • Edge Ops
              </div>

              {/* Progress and telemetry bar */}
              <div className="space-y-1.5 pt-3 border-t border-white/10 text-[11px] font-mono">
                <div className="flex justify-between text-white/60">
                  <span>Confidence Score</span>
                  <span className="text-accent font-bold">99.85%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '96%' }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-white/40 pt-1">
                  <span>Latency: 114ms</span>
                  <span>Zero Fault Loop</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* NODE 3: Enterprise ERP Output (Top Right) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-10 right-4 z-20"
          style={{ transform: 'translateZ(45px)' }}
          onMouseEnter={() => setActiveNode('erp')}
        >
          <div className="p-4 rounded-card-sm bg-surface/90 backdrop-blur-xl border border-border shadow-elevated w-56 hover:border-accent transition-colors duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] tracking-wider uppercase text-text-light">
                ERP / NetSuite Sync
              </span>
              <span className="font-mono text-[10px] text-accent font-semibold">Auto-Committed</span>
            </div>
            <div className="font-mono text-xs font-semibold text-text">
              Sales Order #84920
            </div>
            <div className="mt-2 text-[11px] text-text-muted font-mono flex items-center justify-between pt-2 border-t border-border/60">
              <span>Lines: 18</span>
              <span className="text-text font-medium">$42,900.00</span>
            </div>
          </div>
        </motion.div>

        {/* NODE 4: Action Dispatch / Telemetry (Bottom Right) */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-8 right-2 z-20"
          style={{ transform: 'translateZ(35px)' }}
          onMouseEnter={() => setActiveNode('dispatch')}
        >
          <div className="p-4 rounded-card-sm bg-surface/90 backdrop-blur-xl border border-border shadow-elevated w-52 hover:border-accent transition-colors duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] tracking-wider uppercase text-text-light">
                Mission Dispatch
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <div className="font-mono text-xs font-semibold text-text">
              Real-time Fleet Portal
            </div>
            <div className="mt-2 text-[11px] text-text-muted font-mono flex items-center justify-between pt-2 border-t border-border/60">
              <span>Driver Bot Sync</span>
              <span className="text-accent font-medium">Instant ACK</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Accent Badges (Foreground Depth) */}
        <motion.div
          animate={{ rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-4 left-1/3 z-40 hidden sm:block"
          style={{ transform: 'translateZ(70px)' }}
        >
          <div className="px-3 py-1.5 rounded-pill bg-white/95 backdrop-blur-md border border-border shadow-elevated flex items-center gap-2 text-[11px] font-mono text-text font-medium">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>240 OPS / SEC</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ rotate: [0, -3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute top-4 right-1/4 z-40 hidden sm:block"
          style={{ transform: 'translateZ(75px)' }}
        >
          <div className="px-3 py-1.5 rounded-pill bg-white/95 backdrop-blur-md border border-border shadow-elevated flex items-center gap-2 text-[11px] font-mono text-text font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>SUB-SECOND SETTLEMENT</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
