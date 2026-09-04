"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Sparkles, RefreshCw, ArrowRight } from "lucide-react";

interface DataFlowProps {
  className?: string;
  speed?: number;
  paused?: boolean;
}

interface FlowNode {
  id: string;
  label: string;
  sublabel: string;
  type: "input" | "output";
  color: string;
  icon: React.ReactNode;
  initialRotate: number;
}

const inputNodes: FlowNode[] = [
  { id: "whatsapp", label: "WhatsApp", sublabel: "Order audio & chat", type: "input", color: "#25D366", icon: <WhatsAppIcon />, initialRotate: -2 },
  { id: "pdf", label: "PDF Documents", sublabel: "Supplier challans", type: "input", color: "#EF4444", icon: <PDFIcon />, initialRotate: 1.5 },
  { id: "invoice", label: "Invoice Files", sublabel: "GST tax invoices", type: "input", color: "#F59E0B", icon: <InvoiceIcon />, initialRotate: -1 },
  { id: "payments", label: "Payments", sublabel: "UPI & bank receipts", type: "input", color: "#6366F1", icon: <PaymentsIcon />, initialRotate: 2 },
  { id: "excel", label: "Spreadsheets", sublabel: "Inventory XLSX", type: "input", color: "#10B981", icon: <ExcelIcon />, initialRotate: -1.5 },
];

const outputNodes: FlowNode[] = [
  { id: "orders", label: "Clean Orders", sublabel: "Pushed to ERP", type: "output", color: "#22C55E", icon: <OrdersIcon />, initialRotate: 0 },
  { id: "records", label: "Validated Records", sublabel: "3-Way match passed", type: "output", color: "#38BDF8", icon: <RecordsIcon />, initialRotate: 0 },
  { id: "reports", label: "Financial Reports", sublabel: "Auto-reconciled", type: "output", color: "#A855F7", icon: <ReportsIcon />, initialRotate: 0 },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.67" />
    </svg>
  );
}

function InvoiceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function PDFIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15h6" />
      <path d="M9 11h6" />
    </svg>
  );
}

function ExcelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  );
}

function PaymentsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  );
}

function OrdersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function RecordsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <polyline points="9 15 11 17 15 12" />
    </svg>
  );
}

function ReportsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

type CyclePhase = "inflow" | "converging" | "pulse" | "output";

export function DataFlow({ className, speed = 1, paused = false }: DataFlowProps) {
  const [phase, setPhase] = useState<CyclePhase>("inflow");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [cycleCount, setCycleCount] = useState(0);

  // Signature Cadence Moment sequence cycle (pulse fires every 5-6s)
  const runSequence = useCallback(() => {
    if (paused) return;

    setPhase("inflow");

    const t1 = setTimeout(() => {
      setPhase("converging");
    }, 2800 / speed);

    const t2 = setTimeout(() => {
      setPhase("pulse");
    }, 5400 / speed);

    const t3 = setTimeout(() => {
      setPhase("output");
    }, 7200 / speed);

    const t4 = setTimeout(() => {
      setCycleCount((c) => c + 1);
    }, 10400 / speed);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [speed, paused]);

  useEffect(() => {
    const cleanup = runSequence();
    return () => {
      if (cleanup) cleanup();
    };
  }, [cycleCount, runSequence]);

  const restartMoment = () => {
    setPhase("converging");
    setTimeout(() => setPhase("pulse"), 1200);
    setTimeout(() => setPhase("output"), 2800);
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl bg-gradient-to-b from-surface/90 to-background/95 border border-border/70 p-4 sm:p-6 overflow-hidden select-none shadow-elevation-3",
        className
      )}
      style={{ minHeight: "520px" }}
    >
      {/* Ambient background glow that dims during the quiet signature moment */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10"
        animate={{
          opacity: phase === "pulse" ? 0.08 : 0.22,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(110, 231, 183, 0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* SVG Connecting Paths & Signature Luminous Beam */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-0"
        preserveAspectRatio="none"
        viewBox="0 0 600 500"
      >
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#5AC8FA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="luminousBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#25D366" stopOpacity="0.2" />
            <stop offset="45%" stopColor="#6EE7B7" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="55%" stopColor="#5AC8FA" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
          </linearGradient>

          <filter id="cadenceGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 5 Input Conduit Lines converging into center */}
        {inputNodes.map((node, i) => {
          const y = 80 + i * 80;
          const isHighlighted = hoveredNode === node.id || phase === "converging" || phase === "pulse";
          return (
            <g key={`path-in-${node.id}`}>
              {/* Base track */}
              <path
                d={`M 140 ${y} C 210 ${y}, 250 250, 300 250`}
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1.5"
              />
              {/* Flowing illuminated stream */}
              <motion.path
                d={`M 140 ${y} C 210 ${y}, 250 250, 300 250`}
                fill="none"
                stroke={node.color}
                strokeWidth={isHighlighted ? "2" : "1.2"}
                strokeDasharray="8 12"
                animate={{
                  strokeDashoffset: [-40, 0],
                  opacity: phase === "pulse" ? 0.3 : isHighlighted ? 0.85 : 0.35,
                }}
                transition={{
                  strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.5 },
                }}
                filter="url(#cadenceGlow)"
              />
            </g>
          );
        })}

        {/* 3 Output Conduit Lines radiating from center */}
        {outputNodes.map((node, i) => {
          const y = 140 + i * 110;
          const isHighlighted = hoveredNode === node.id || phase === "output";
          return (
            <g key={`path-out-${node.id}`}>
              <path
                d={`M 300 250 C 350 250, 390 ${y}, 460 ${y}`}
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1.5"
              />
              <motion.path
                d={`M 300 250 C 350 250, 390 ${y}, 460 ${y}`}
                fill="none"
                stroke={node.color}
                strokeWidth={isHighlighted ? "2" : "1.2"}
                strokeDasharray="8 12"
                animate={{
                  strokeDashoffset: [0, -40],
                  opacity: phase === "output" ? 0.9 : isHighlighted ? 0.7 : 0.25,
                }}
                transition={{
                  strokeDashoffset: { duration: 1.8, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.5 },
                }}
                filter="url(#cadenceGlow)"
              />
            </g>
          );
        })}

        {/* SIGNATURE MOMENT: Single luminous line connecting everything across the quiet canvas */}
        <AnimatePresence>
          {phase === "pulse" && (
            <motion.path
              d="M 50 250 L 550 250"
              fill="none"
              stroke="url(#luminousBeam)"
              strokeWidth="2.5"
              filter="url(#cadenceGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0.9] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
        </AnimatePresence>
      </svg>

      {/* Main Interactive Stage */}
      <div className="relative z-10 flex items-center justify-between h-full min-h-[440px] px-1 sm:px-2">
        {/* Left Column: 5 Disconnected Inputs with subtle natural tilt */}
        <div className="flex flex-col gap-2.5 sm:gap-3 justify-center w-[150px] sm:w-[175px]">
          <div className="text-[11px] font-mono uppercase tracking-widest text-text-subtle mb-1 pl-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Inputs
          </div>
          {inputNodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            const isConverging = phase === "converging" || phase === "pulse";

            return (
              <motion.div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                animate={{
                  x: isConverging ? 16 : 0,
                  rotate: isConverging ? 0 : node.initialRotate,
                  scale: isHovered ? 1.04 : 1,
                  opacity: phase === "pulse" ? 0.6 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                }}
                className={cn(
                  "group flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl border backdrop-blur-md cursor-pointer transition-colors",
                  "bg-surface/90 border-border/80 hover:border-text-muted/40",
                  isHovered && "ring-1 ring-emerald-400/40"
                )}
                style={{
                  boxShadow: isHovered ? `0 8px 24px -6px ${node.color}35` : "0 4px 12px -2px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{
                    background: `${node.color}18`,
                    border: `1px solid ${node.color}35`,
                    color: node.color,
                  }}
                >
                  {node.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-heading font-medium text-text truncate group-hover:text-emerald-300 transition-colors">
                    {node.label}
                  </p>
                  <p className="text-[10px] text-text-muted/80 truncate font-mono">
                    {node.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center: The Cadence Core ("C") that gently breathes & pulses */}
        <div className="relative flex flex-col items-center justify-center mx-2 sm:mx-6">
          {/* Radial shockwaves during pulse moment */}
          <AnimatePresence>
            {phase === "pulse" && (
              <motion.div
                className="absolute w-36 h-36 rounded-full border border-emerald-400/40 pointer-events-none"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 2.2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>

          {/* Gentle ambient breathing ring (every 5-6 seconds) */}
          <motion.div
            className="absolute w-28 h-28 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(110, 231, 183, 0.25) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Core Orb */}
          <motion.div
            className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-surface-elevated border-2 cursor-pointer shadow-elevation-3"
            style={{
              borderColor: phase === "pulse" ? "#6EE7B7" : "rgba(110, 231, 183, 0.35)",
            }}
            animate={{
              scale: phase === "pulse" ? [1, 1.14, 1] : [1, 1.02, 1],
              boxShadow:
                phase === "pulse"
                  ? "0 0 50px 10px rgba(110, 231, 183, 0.5)"
                  : "0 0 25px -4px rgba(110, 231, 183, 0.2)",
            }}
            transition={{
              duration: phase === "pulse" ? 0.8 : 5.5,
              repeat: phase === "pulse" ? 0 : Infinity,
              ease: "easeInOut",
            }}
            onClick={restartMoment}
            title="Click to replay signature Cadence convergence"
          >
            {/* Concentric subtle inner ring */}
            <div className="absolute inset-1.5 rounded-full border border-emerald-500/20 pointer-events-none" />

            {/* Glowing Cadence "C" Glyph */}
            <span
              className={cn(
                "font-heading font-black text-2xl sm:text-3xl tracking-tighter transition-all duration-500",
                phase === "pulse"
                  ? "text-emerald-300 drop-shadow-[0_0_12px_rgba(110,231,183,0.8)] scale-110"
                  : "text-text"
              )}
            >
              C
            </span>
          </motion.div>

          <span className="mt-3 text-[11px] font-mono tracking-widest text-text-subtle uppercase">
            {phase === "pulse" ? "Connecting..." : "Cadence Core"}
          </span>
        </div>

        {/* Right Column: Structured Verified Outputs */}
        <div className="flex flex-col gap-3.5 justify-center w-[150px] sm:w-[175px]">
          <div className="text-[11px] font-mono uppercase tracking-widest text-text-subtle mb-1 pl-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Structured Output
          </div>
          {outputNodes.map((node, i) => {
            const isHovered = hoveredNode === node.id;
            const isOutputActive = phase === "output";

            return (
              <motion.div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                animate={{
                  x: isOutputActive ? 0 : 4,
                  scale: isHovered ? 1.04 : isOutputActive ? 1.02 : 0.98,
                  opacity: isOutputActive ? 1 : 0.75,
                }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 22,
                  delay: i * 0.1,
                }}
                className={cn(
                  "group flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl border backdrop-blur-md cursor-pointer transition-colors",
                  "bg-surface/90 border-border/80 hover:border-text-muted/40",
                  isOutputActive && "border-emerald-500/40 bg-surface-elevated/95",
                  isHovered && "ring-1 ring-sky-400/40"
                )}
                style={{
                  boxShadow: isHovered
                    ? `0 8px 24px -6px ${node.color}35`
                    : isOutputActive
                    ? "0 4px 16px -2px rgba(110, 231, 183, 0.15)"
                    : "0 4px 12px -2px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{
                    background: `${node.color}18`,
                    border: `1px solid ${node.color}35`,
                    color: node.color,
                  }}
                >
                  {node.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-heading font-medium text-text truncate">
                      {node.label}
                    </p>
                    {isOutputActive && (
                      <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[10px] text-text-muted/80 truncate font-mono">
                    {node.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Micro-Interactive Status Bar */}
      <div className="relative mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-text-subtle font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px]">
            {phase === "inflow" && "Capturing raw streams..."}
            {phase === "converging" && "Aligning unstructured data..."}
            {phase === "pulse" && "✦ Signature convergence locked"}
            {phase === "output" && "Structured data synchronized"}
          </span>
        </div>

        <button
          onClick={restartMoment}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-elevated/70 hover:bg-surface-elevated text-text-muted hover:text-text border border-border/60 transition-colors text-[11px]"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Replay</span>
        </button>
      </div>
    </div>
  );
}