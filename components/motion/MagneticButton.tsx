"use client";

import { useRef, useEffect, useState, type ReactNode, type MouseEvent } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "onMouseMove" | "onMouseLeave" | "onMouseEnter"> {
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
  magneticStrength = 0.15,
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

    const handleMouseMove = (e: globalThis.MouseEvent) => {
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
    primary: "magnetic-btn-primary",
    secondary: "magnetic-btn-secondary",
    ghost: "magnetic-btn-ghost",
  };

  const magneticStyle = {
    transform: `translate(${mousePosition.x * magneticStrength}px, ${mousePosition.y * magneticStrength}px)`,
    transition: isHovering
      ? "transform 0.1s cubic-bezier(0.2, 0, 0, 1)"
      : "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
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
      whileTap={{ scale: 0.97 }}
      whileHover={{
        scale: 1.02,
        boxShadow: variant === "primary" 
          ? "0 0 40px -10px rgba(110, 231, 183, 0.5), 0 20px 40px -10px rgba(0, 0, 0, 0.3)"
          : variant === "secondary"
          ? "0 20px 40px -10px rgba(0, 0, 0, 0.3), 0 0 30px -10px rgba(110, 231, 183, 0.2)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}