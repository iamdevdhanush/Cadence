"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DataFlowNode {
  id: string;
  label: string;
  type: "input" | "process" | "output";
  position: { x: number; y: number };
  color: string;
  icon: React.ReactNode;
}

interface DataFlowProps {
  className?: string;
  speed?: number;
  paused?: boolean;
}

const inputNodes: DataFlowNode[] = [
  { id: "whatsapp", label: "WhatsApp", type: "input", position: { x: 10, y: 20 }, color: "#25D366", icon: <WhatsAppIcon /> },
  { id: "pdf", label: "PDF", type: "input", position: { x: 10, y: 40 }, color: "#E84E4E", icon: <PDFIcon /> },
  { id: "invoice", label: "Invoice", type: "input", position: { x: 10, y: 60 }, color: "#F59E0B", icon: <InvoiceIcon /> },
  { id: "excel", label: "Excel", type: "input", position: { x: 10, y: 80 }, color: "#217346", icon: <ExcelIcon /> },
  { id: "payments", label: "Payments", type: "input", position: { x: 10, y: 100 }, color: "#6366F1", icon: <PaymentsIcon /> },
];

const outputNodes: DataFlowNode[] = [
  { id: "orders", label: "Orders", type: "output", position: { x: 90, y: 25 }, color: "#22C55E", icon: <OrdersIcon /> },
  { id: "records", label: "Records", type: "output", position: { x: 90, y: 55 }, color: "#3B82F6", icon: <RecordsIcon /> },
  { id: "reports", label: "Reports", type: "output", position: { x: 90, y: 85 }, color: "#A855F7", icon: <ReportsIcon /> },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.67" />
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

function ConnectionLine({
  from,
  to,
  progress,
  color,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  progress: number;
  color: string;
}) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const cp1x = from.x + (midX - from.x) * 0.5;
  const cp1y = from.y;
  const cp2x = to.x - (to.x - midX) * 0.5;
  const cp2y = to.y;

  const pathLength = 1000;

  return (
    <motion.path
      d={`M${from.x}% ${from.y}% C${cp1x}% ${cp1y}% ${cp2x}% ${cp2y}% ${to.x}% ${to.y}%`}
      stroke={color}
      strokeWidth="1.5"
      fill="none"
      strokeDasharray={pathLength}
      strokeDashoffset={pathLength * (1 - progress)}
      style={{
        filter: "drop-shadow(0 0 4px currentColor)",
        opacity: progress > 0.1 ? 1 : 0,
      }}
      initial={false}
      animate={{ pathLength: progress }}
      transition={{ duration: 0 }}
    />
  );
}

function Node({ node, isProcess = false, className }: { node: DataFlowNode; isProcess?: boolean; className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "flex flex-col items-center gap-2 px-3 py-2 rounded-lg",
        "bg-surface border border-border",
        "transition-all duration-300 ease-premium",
        "cursor-default select-none",
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${node.color}15, transparent)`,
        borderColor: `${node.color}40`,
      }}
      whileHover={{ scale: 1.05, y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        boxShadow: hovered ? `0 0 30px -5px ${node.color}80` : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center justify-center w-10 h-10 rounded-lg"
        style={{
          background: `linear-gradient(135deg, ${node.color}30, ${node.color}10)`,
          border: `1px solid ${node.color}40`,
        }}
        animate={{ scale: hovered ? 1.15 : 1, rotate: isProcess ? [0, 2, -2, 0] : 0 }}
        transition={{ duration: isProcess ? 2 : 0.3, repeat: isProcess ? Infinity : 0, repeatDelay: 3 }}
      >
        {node.icon}
      </motion.div>
      <span className="text-xs font-medium text-text whitespace-nowrap" style={{ color: node.color }}>
        {node.label}
      </span>
    </motion.div>
  );
}

export function DataFlow({ className, speed = 1, paused = false }: DataFlowProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"input-to-process" | "process-to-output">("input-to-process");
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;

    const animate = () => {
      const cycleDuration = 4000 / speed;
      const startTime = Date.now();

      const tick = () => {
        const elapsed = (Date.now() - startTime) % cycleDuration;
        const normalizedProgress = elapsed / cycleDuration;

        if (normalizedProgress < 0.5) {
          setPhase("input-to-process");
          setProgress(normalizedProgress * 2);
        } else {
          setPhase("process-to-output");
          setProgress((normalizedProgress - 0.5) * 2);
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
    <div className={cn("relative w-full h-full min-h-[400px]", className)}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,7 L9,3.5 Z" fill="#6EE7B7" />
          </marker>
          <marker
            id="arrowhead-output"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,7 L9,3.5 Z" fill="#5AC8FA" />
          </marker>
        </defs>

        {inputNodes.map((input) =>
          outputNodes.map((output) => (
            <ConnectionLine
              key={`${input.id}-${output.id}`}
              from={{ x: input.position.x + 8, y: input.position.y }}
              to={{ x: output.position.x - 8, y: output.position.y }}
              progress={phase === "input-to-process" ? progress : phase === "process-to-output" ? progress : 0}
              color="rgba(110, 231, 183, 0.6)"
            />
          ))
        )}

        <motion.path
          d="M50% 15% C50% 35% 50% 65% 50% 85%"
          stroke="rgba(110, 231, 183, 0.3)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5, 10"
          animate={{ strokeDashoffset: [-20, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="relative z-10 flex items-center justify-between h-full px-8">
        <div className="flex flex-col justify-center gap-6 h-full">
          {inputNodes.map((node) => (
            <Node key={node.id} node={node} />
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          style={{ position: "relative", zIndex: 10 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #6EE7B7, #5AC8FA)",
                opacity: 0.15,
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #6EE7B7, #5AC8FA)",
                opacity: 0.1,
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-surface border-2"
              style={{ borderColor: "rgba(110, 231, 183, 0.5)" }}>
              <span className="font-heading font-bold text-xl text-accent">C</span>
            </div>
          </div>
          <span className="font-heading font-medium text-sm text-text-subtle uppercase tracking-widest">
            Cadence
          </span>
        </motion.div>

        <div className="flex flex-col justify-center gap-6 h-full items-end">
          {outputNodes.map((node) => (
            <Node key={node.id} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
}