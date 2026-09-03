"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, stagger } from "motion/react";
import { cn } from "@/lib/utils";

interface DataFlowProps {
  className?: string;
  speed?: number;
  paused?: boolean;
}

interface FlowNode {
  id: string;
  label: string;
  type: "input" | "output";
  color: string;
  icon: React.ReactNode;
  delay: number;
}

const inputNodes: FlowNode[] = [
  { id: "whatsapp", label: "WhatsApp", type: "input", color: "#25D366", icon: <WhatsAppIcon />, delay: 0 },
  { id: "invoice", label: "Invoice", type: "input", color: "#F59E0B", icon: <InvoiceIcon />, delay: 0.15 },
  { id: "pdf", label: "PDF", type: "input", color: "#E84E4E", icon: <PDFIcon />, delay: 0.3 },
  { id: "excel", label: "Excel", type: "input", color: "#217346", icon: <ExcelIcon />, delay: 0.45 },
  { id: "payments", label: "Payment", type: "input", color: "#6366F1", icon: <PaymentsIcon />, delay: 0.6 },
];

const outputNodes: FlowNode[] = [
  { id: "orders", label: "Orders", type: "output", color: "#22C55E", icon: <OrdersIcon />, delay: 0 },
  { id: "records", label: "Records", type: "output", color: "#3B82F6", icon: <RecordsIcon />, delay: 0.15 },
  { id: "reports", label: "Reports", type: "output", color: "#A855F7", icon: <ReportsIcon />, delay: 0.3 },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.67" />
    </svg>
  );
}

function InvoiceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
      <line x1="12" y1="9" x2="12" y2="17" />
    </svg>
  );
}

function PDFIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function ExcelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  );
}

function PaymentsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="7" y1="4" x2="7" y2="20" />
      <line x1="17" y1="4" x2="17" y2="20" />
    </svg>
  );
}

function OrdersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M16 11V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6" />
      <path d="M8 11v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6" />
      <rect x="2" y="3" width="20" height="18" rx="2" />
    </svg>
  );
}

function RecordsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function ReportsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function FlowCard({
  node,
  phase,
  progress,
  isHovered,
  onHoverChange,
  index,
  total,
}: {
  node: FlowNode;
  phase: "idle" | "input" | "transform" | "output";
  progress: number;
  isHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
  index: number;
  total: number;
}) {
  const isInput = node.type === "input";
  const isActive = phase === (isInput ? "input" : "output");
  const isTransforming = phase === "transform";

  const cardProgress = isInput
    ? Math.max(0, Math.min(1, (progress - node.delay) / (0.6 - node.delay)))
    : Math.max(0, Math.min(1, (progress - 0.6 - node.delay) / 0.4));

  const transformProgress = Math.max(0, Math.min(1, (progress - 0.6) / 0.4));

  return (
    <motion.div
      className={cn(
        "flex flex-col items-center gap-2 px-3 py-2.5 rounded-xl",
        "bg-surface border transition-all duration-300 ease-premium",
        "cursor-default select-none relative overflow-visible"
      )}
      style={{
        background: `linear-gradient(135deg, ${node.color}15, transparent)`,
        borderColor: `${node.color}40`,
        opacity: isInput ? (isTransforming ? 1 - transformProgress * 0.5 : 1) : cardProgress,
        transform: `translateX(${isInput ? (1 - cardProgress) * 20 : (cardProgress - 1) * 20}px) scale(${0.9 + cardProgress * 0.1})`,
        filter: isTransforming && isInput ? `blur(${transformProgress * 2}px)` : "none",
        zIndex: isInput ? 10 - index : 10 + index,
      }}
      whileHover={{ scale: 1.08, y: -6 }}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      animate={{
        boxShadow: isHovered
          ? `0 20px 40px -10px ${node.color}40, 0 0 60px -15px ${node.color}30`
          : "0 4px 20px -4px rgb(0 0 0 / 0.4)",
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="flex items-center justify-center w-11 h-11 rounded-lg relative"
        style={{
          background: `linear-gradient(135deg, ${node.color}30, ${node.color}10)`,
          border: `1px solid ${node.color}40`,
        }}
        animate={{
          scale: isHovered ? 1.15 : isActive ? [1, 1.1, 1] : 1,
          rotate: isTransforming && isInput ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          duration: isTransforming && isInput ? 1.5 : 0.3,
          repeat: isTransforming && isInput ? Infinity : 0,
          repeatDelay: 2,
        }}
      >
        <motion.span
          animate={{
            opacity: isTransforming && isInput ? [1, 0.3, 1] : 1,
            scale: isTransforming && isInput ? [1, 0.8, 1] : 1,
          }}
          transition={{
            duration: isTransforming && isInput ? 1.5 : 0.3,
            repeat: isTransforming && isInput ? Infinity : 0,
            repeatDelay: 2,
          }}
        >
          {node.icon}
        </motion.span>
      </motion.div>
      <span
        className="text-xs font-medium text-text whitespace-nowrap"
        style={{ color: node.color, opacity: isTransforming && isInput ? 0.5 + 0.5 * Math.sin(Date.now() / 200) : 1 }}
      >
        {node.label}
      </span>
    </motion.div>
  );
}

function CadenceCore({
  phase,
  progress,
}: {
  phase: "idle" | "input" | "transform" | "output";
  progress: number;
}) {
  const transformProgress = Math.max(0, Math.min(1, (progress - 0.6) / 0.4));
  const pulseProgress = progress % 1;

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center gap-3"
      style={{ position: "relative", zIndex: 20 }}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, #6EE7B7, #5AC8FA)",
            opacity: 0.1,
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, #6EE7B7, #5AC8FA)",
            opacity: 0.08,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: "rgba(110, 231, 183, 0.3)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <motion.div
          className="relative flex items-center justify-center w-24 h-24 rounded-full bg-surface border-2"
          style={{ borderColor: "rgba(110, 231, 183, 0.5)" }}
          animate={{
            scale: [1, 1.03, 1],
            boxShadow: [
              "0 0 20px -5px rgba(110, 231, 183, 0.2)",
              "0 0 40px -5px rgba(110, 231, 183, 0.4)",
              "0 0 20px -5px rgba(110, 231, 183, 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span
            className="font-heading font-bold text-2xl text-accent relative z-10"
            animate={{
              opacity: phase === "transform" ? [1, 0, 1] : 1,
              scale: phase === "transform" ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
          >
            C
          </motion.span>
          <motion.span
            className="font-heading font-bold text-2xl text-accent relative z-10"
            animate={{
              opacity: phase === "transform" ? [0, 1, 0] : 0,
              scale: phase === "transform" ? [0.5, 1, 0.5] : 0.5,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            style={{ position: "absolute" }}
          >
            ✦
          </motion.span>
        </motion.div>
      </div>

      <motion.span
        className="font-heading font-medium text-sm text-text-subtle uppercase tracking-widest"
        animate={{
          opacity: phase === "idle" || phase === "input" ? 1 : 0.5,
          color: phase === "transform" ? "#6EE7B7" : "var(--color-text-subtle)",
        }}
        transition={{ duration: 0.5 }}
      >
        Cadence
      </motion.span>
    </motion.div>
  );
}

function ConnectionLines({
  phase,
  progress,
}: {
  phase: "idle" | "input" | "transform" | "output";
  progress: number;
}) {
  const inputProgress = Math.max(0, Math.min(1, progress / 0.6));
  const transformProgress = Math.max(0, Math.min(1, (progress - 0.6) / 0.4));
  const outputProgress = Math.max(0, Math.min(1, (progress - 1) / 0.5));

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" preserveAspectRatio="none" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#5AC8FA" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.6" />
        </linearGradient>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,7 L9,3.5 Z" fill="url(#flowGradient)" />
        </marker>
      </defs>

      <g filter="url(#glow)">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {inputNodes.map((input, i) => (
          <motion.path
            key={input.id}
            d={`M12% ${18 + i * 14}% C35% ${18 + i * 14}%, 42% 50%, 48% 50%`}
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset={1000 * (1 - inputProgress)}
            markerEnd="url(#arrowhead)"
            style={{
              opacity: inputProgress > 0.1 ? 1 : 0,
              filter: "drop-shadow(0 0 6px rgba(110, 231, 183, 0.6))",
            }}
            initial={false}
            animate={{ pathLength: inputProgress }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}

        {outputNodes.map((output, i) => (
          <motion.path
            key={output.id}
            d={`M52% 50% C58% 50%, 65% ${25 + i * 14}%, 88% ${25 + i * 14}%`}
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset={1000 * (1 - outputProgress)}
            markerEnd="url(#arrowhead)"
            style={{
              opacity: outputProgress > 0.1 ? 1 : 0,
              filter: "drop-shadow(0 0 6px rgba(110, 231, 183, 0.6))",
            }}
            initial={false}
            animate={{ pathLength: outputProgress }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}

        <motion.path
          d="M48% 45% C48% 48%, 52% 52%, 52% 55%"
          stroke="rgba(110, 231, 183, 0.3)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="10, 20"
          animate={{ strokeDashoffset: [-30, 30] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </g>
    </svg>
  );
}

export function DataFlow({ className, speed = 1, paused = false }: DataFlowProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"idle" | "input" | "transform" | "output">("idle");
  const animationRef = useRef<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSide, setHoveredSide] = useState<"input" | "output" | null>(null);

  useEffect(() => {
    if (paused) return;

    const animate = () => {
      const cycleDuration = 5000 / speed;
      const startTime = Date.now();

      const tick = () => {
        const elapsed = (Date.now() - startTime) % cycleDuration;
        const normalizedProgress = elapsed / cycleDuration;

        setProgress(normalizedProgress);

        if (normalizedProgress < 0.6) {
          setPhase("input");
        } else if (normalizedProgress < 1) {
          setPhase(normalizedProgress < 0.7 ? "transform" : "output");
        } else {
          setPhase("idle");
        }

        animationRef.current = requestAnimationFrame(tick);
      };

      animationRef.current = requestAnimationFrame(tick);
    };

    animate();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [speed, paused]);

  return (
    <div className={cn("relative w-full h-full min-h-[500px] lg:min-h-[600px]", className)}>
      <ConnectionLines phase={phase} progress={progress} />

      <div className="relative z-10 flex items-center justify-between h-full px-6 lg:px-12">
        <div className="flex flex-col justify-center gap-4 h-full min-w-[180px]">
          {inputNodes.map((node, index) => (
            <FlowCard
              key={node.id}
              node={node}
              phase={phase}
              progress={progress}
              isHovered={hoveredIndex === index && hoveredSide === "input"}
              onHoverChange={(hovered) => {
                setHoveredIndex(hovered ? index : null);
                setHoveredSide(hovered ? "input" : null);
              }}
              index={index}
              total={inputNodes.length}
            />
          ))}
        </div>

        <CadenceCore phase={phase} progress={progress} />

        <div className="flex flex-col justify-center gap-4 h-full min-w-[180px] items-end">
          {outputNodes.map((node, index) => (
            <FlowCard
              key={node.id}
              node={node}
              phase={phase}
              progress={progress}
              isHovered={hoveredIndex === index && hoveredSide === "output"}
              onHoverChange={(hovered) => {
                setHoveredIndex(hovered ? index : null);
                setHoveredSide(hovered ? "output" : null);
              }}
              index={index}
              total={outputNodes.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}