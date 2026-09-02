"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxGridProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "vertical" | "horizontal" | "both";
  layers?: number;
}

export function ParallaxGrid({
  children,
  className,
  speed = 0.3,
  direction = "vertical",
  layers = 3,
}: ParallaxGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = 1 - (rect.bottom / (rect.height + viewportHeight));
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    element.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {[...Array(layers)].map((_, i) => {
        const layerIndex = i + 1;
        const layerSpeed = speed * (layerIndex / layers) * 0.5;
        const translateX = direction !== "vertical" ? (mousePosition.x - 0.5) * layerSpeed * 100 : 0;
        const translateY = direction !== "horizontal" ? (mousePosition.y - 0.5) * layerSpeed * 100 : 0;
        const scrollTranslateY = direction !== "horizontal" ? scrollProgress * layerSpeed * 200 : 0;

        return (
          <motion.div
            key={i}
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `translate3d(${translateX}px, ${translateY + scrollTranslateY}px, 0)`,
              willChange: "transform",
            }}
            transition={{ duration: 0 }}
          >
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) return child;
              return React.cloneElement(child as React.ReactElement<any>, {
                className: cn(child.props.className, `parallax-layer-${layerIndex}`),
              });
            })}
          </motion.div>
        );
      })}
      <div className="relative z-10 pointer-events-auto">{children}</div>
    </div>
  );
}

interface ScrollProgressProps {
  children: (progress: number) => React.ReactNode;
  className?: string;
  start?: "top top" | "top center" | "top bottom" | "center center" | "bottom bottom";
  end?: "top top" | "top center" | "top bottom" | "center center" | "bottom bottom";
  scrub?: number;
}

export function ScrollProgress({
  children,
  className,
  start = "top bottom",
  end = "bottom top",
  scrub = 1,
}: ScrollProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      let p = 0;

      if (start === "top bottom") {
        p = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (rect.height + viewportHeight)));
      } else if (start === "top center") {
        p = Math.max(0, Math.min(1, (viewportHeight / 2 - rect.top) / rect.height));
      }

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [start, end]);

  const smoothedProgress = progress;

  return (
    <div ref={ref} className={className}>
      {children(smoothedProgress)}
    </div>
  );
}

interface ScrollTransformProps {
  children: React.ReactNode;
  className?: string;
  y?: [number, number];
  x?: [number, number];
  scale?: [number, number];
  rotate?: [number, number];
  opacity?: [number, number];
  start?: "top bottom" | "top center" | "center center" | "bottom top";
  end?: "top bottom" | "top center" | "center center" | "bottom top";
}

export function ScrollTransform({
  children,
  className,
  y = [0, 0],
  x = [0, 0],
  scale = [1, 1],
  rotate = [0, 0],
  opacity = [1, 1],
  start = "top bottom",
  end = "bottom top",
}: ScrollTransformProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      let p = 0;

      if (start === "top bottom") {
        p = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (rect.height + viewportHeight)));
      } else if (start === "top center") {
        p = Math.max(0, Math.min(1, (viewportHeight / 2 - rect.top) / rect.height));
      }

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [start, end]);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  const easedProgress = ease(progress);

  const transform = {
    transform: `
      translate3d(${lerp(x[0], x[1], easedProgress)}px, ${lerp(y[0], y[1], easedProgress)}px, 0)
      scale(${lerp(scale[0], scale[1], easedProgress)})
      rotate(${lerp(rotate[0], rotate[1], easedProgress)}deg)
    `,
    opacity: lerp(opacity[0], opacity[1], easedProgress),
    willChange: "transform, opacity",
  };

  return (
    <div ref={ref} className={cn("relative", className)} style={transform}>
      {children}
    </div>
  );
}