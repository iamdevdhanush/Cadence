"use client";

import { useRef, useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends Omit<MotionProps<"button">, "onMouseMove" | "onMouseLeave" | "onMouseEnter"> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  magneticStrength?: number;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  magneticStrength = 0.3,
  disabled = false,
  onClick,
  style,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const variantStyles = {
    primary: "btn-primary magnetic-btn",
    secondary: "btn-secondary",
    ghost: "btn-secondary bg-transparent",
  };

  const magneticStyle = {
    transform: `translate(${mousePosition.x * magneticStrength}px, ${mousePosition.y * magneticStrength}px)`,
    transition: isHovering
      ? "transform 0.15s cubic-bezier(0.2, 0, 0, 1)"
      : "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };

  return (
    <motion.button
      ref={ref}
      className={cn(variantStyles[variant], className)}
      style={{ ...style, ...magneticStyle } as React.CSSProperties}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}