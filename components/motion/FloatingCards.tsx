"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  speed?: number;
  rotate?: boolean;
  style?: React.CSSProperties;
}

export function FloatingCard({
  children,
  className,
  depth = 1,
  speed = 1,
  rotate = false,
}: FloatingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
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

  const maxRotate = rotate ? 8 * depth : 0;
  const maxTranslate = 12 * depth;

  const transformStyle = `
    perspective(1000px)
    rotateX(${-mousePosition.y * maxRotate}deg)
    rotateY(${mousePosition.x * maxRotate}deg)
    translateX(${mousePosition.x * maxTranslate}px)
    translateY(${mousePosition.y * maxTranslate}px)
    translateZ(${depth * 20}px)
  `;

  const shadowDepth = {
    1: "0 4px 20px -4px rgb(0 0 0 / 0.4)",
    2: "0 10px 40px -10px rgb(0 0 0 / 0.5)",
    3: "0 20px 60px -15px rgb(0 0 0 / 0.6)",
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "surface-card p-6",
        "relative overflow-hidden",
        className
      )}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
        willChange: "transform",
        boxShadow: isHovering
          ? `${shadowDepth[depth as keyof typeof shadowDepth]}, 0 0 40px -10px rgba(110, 231, 183, 0.2)`
          : shadowDepth[depth as keyof typeof shadowDepth],
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileTap={{ scale: 0.98 }}
      animate={{
        y: isHovering ? -8 * depth : 0,
        boxShadow: isHovering
          ? `${shadowDepth[depth as keyof typeof shadowDepth]}, 0 0 40px -10px rgba(110, 231, 183, 0.2)`
          : shadowDepth[depth as keyof typeof shadowDepth],
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="absolute inset-0 -z-10 rounded-lg"
        style={{
          background: `linear-gradient(135deg, rgba(110, 231, 183, 0.05), rgba(90, 200, 250, 0.05))`,
          opacity: isHovering ? 1 : 0.5,
        }}
        animate={{ scale: isHovering ? 1.05 : 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      />
      {children}
    </motion.div>
  );
}

interface FloatingCardsGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: { base: number; sm: number; md: number; lg: number };
  gap?: number;
}

export function FloatingCardsGrid({
  children,
  className,
  columns = { base: 1, sm: 2, md: 3, lg: 4 },
  gap = 6,
}: FloatingCardsGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        `grid-cols-${columns.base}`,
        `sm:grid-cols-${columns.sm}`,
        `md:grid-cols-${columns.md}`,
        `lg:grid-cols-${columns.lg}`,
        className
      )}
      style={{ gap: `${gap * 4}px` }}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        const childElement = child as React.ReactElement<{ className?: string; style?: React.CSSProperties }>;
        return React.cloneElement(childElement, {
          className: cn(childElement.props.className, `stagger-${Math.min(index + 1, 8)}`),
          style: {
            ...childElement.props.style,
            animationDelay: `${index * 80}ms`,
          },
        });
      })}
    </div>
  );
}

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  offset?: number;
}

export function ParallaxCard({
  children,
  className,
  speed = 0.1,
  offset = 0,
}: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrolled = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      setScrollY(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = (scrollY - 0.5 - offset) * speed * 200;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        style={{
          transform: `translateY(${translateY}px)`,
          willChange: "transform",
        }}
        transition={{ duration: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}