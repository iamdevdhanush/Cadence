"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.1,
  className = "",
  style,
  ...props
}: ScrollRevealProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  const getVariants = () => {
    const baseTransition = {
      duration,
      ease: [0.4, 0, 0.2, 1] as const,
      delay,
    };

    switch (direction) {
      case "up":
        return {
          initial: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
      case "down":
        return {
          initial: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
      case "left":
        return {
          initial: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0, transition: baseTransition },
        };
      case "right":
        return {
          initial: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0, transition: baseTransition },
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: baseTransition },
        };
      case "fade":
        return {
          initial: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay, ease: "easeOut" } },
        };
      default:
        return {
          initial: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={isInView ? variants.visible : variants.initial}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0,
  className = "",
  ...props
}: StaggerContainerProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  duration?: number;
  className?: string;
}

export function StaggerItem({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className = "",
  ...props
}: StaggerItemProps) {
  const getVariants = () => {
    const baseTransition = {
      duration,
      ease: [0.4, 0, 0.2, 1] as const,
      delay,
    };

    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0, transition: baseTransition },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0, transition: baseTransition },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: baseTransition },
        };
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay, ease: [0.4, 0, 0.2, 1] as const } },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
    }
  };

  return (
    <motion.div variants={getVariants()} className={className} {...props}>
      {children}
    </motion.div>
  );
}