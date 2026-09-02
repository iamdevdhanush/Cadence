import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-subtle": "var(--color-text-subtle)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-muted": "var(--color-accent-muted)",
        "accent-secondary": "var(--color-accent-secondary)",
        "accent-secondary-hover": "var(--color-accent-secondary-hover)",
        border: "var(--color-border)",
        "border-hover": "var(--color-border-hover)",
      },
      boxShadow: {
        "elevation-1": "var(--shadow-elevation-1)",
        "elevation-2": "var(--shadow-elevation-2)",
        "elevation-3": "var(--shadow-elevation-3)",
        "elevation-4": "var(--shadow-elevation-4)",
        "glow-accent": "var(--shadow-glow-accent)",
        "glow-accent-secondary": "var(--shadow-glow-accent-secondary)",
      },
      transitionTimingFunction: {
        premium: "var(--ease-premium)",
        "premium-out": "var(--ease-premium-out)",
        "premium-in": "var(--ease-premium-in)",
        spring: "var(--ease-spring)",
        gentle: "var(--ease-gentle)",
      },
      transitionDuration: {
        instant: "var(--duration-instant)",
        fast: "var(--duration-fast)",
        standard: "var(--duration-standard)",
        smooth: "var(--duration-smooth)",
        cinematic: "var(--duration-cinematic)",
        dramatic: "var(--duration-dramatic)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "25%": { transform: "translateY(-8px) translateX(4px)" },
          "50%": { transform: "translateY(-4px) translateX(-6px)" },
          "75%": { transform: "translateY(-10px) translateX(2px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px -5px rgb(110 231 183 / 0.2)" },
          "50%": { boxShadow: "0 0 40px -5px rgb(110 231 183 / 0.4)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;