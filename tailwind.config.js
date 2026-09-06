/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FCFDFF',
        surface: '#FFFFFF',
        'surface-alt': '#F7FAFC',
        border: '#E5E7EB',
        'border-strong': '#D1D5DB',
        accent: '#18C7A1',
        'accent-hover': '#12B48F',
        'accent-soft': 'rgba(24, 199, 161, 0.1)',
        text: '#0F172A',
        'text-muted': '#475569',
        'text-light': '#94A3B8',
        'red-soft': 'rgba(239, 68, 68, 0.08)',
        'red-border': 'rgba(239, 68, 68, 0.15)',
        'blue-glow': 'rgba(80, 160, 255, 0.12)',
        'purple-glow': 'rgba(99, 240, 200, 0.08)',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '700' }],
        'hero-mobile': ['44px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section-heading': ['56px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'card-title': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.65', letterSpacing: '0' }],
        'body': ['18px', { lineHeight: '1.65', letterSpacing: '0' }],
        'body-sm': ['16px', { lineHeight: '1.6', letterSpacing: '0' }],
        'caption': ['14px', { lineHeight: '1.5', letterSpacing: '0' }],
      },
      spacing: {
        'section': '128px',
        'container': '40px',
        'container-mobile': '24px',
        'heading-gap': '24px',
        'cards-gap': '48px',
        'card-gap': '24px',
        'eyebrow-gap': '20px',
      },
      borderRadius: {
        'btn': '8px',
        'card': '20px',
        'pill': '9999px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)',
        'elevated': '0 20px 40px rgba(15, 23, 42, 0.08), 0 8px 16px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 24px 48px rgba(15, 23, 42, 0.1), 0 12px 24px rgba(15, 23, 42, 0.06)',
        'glow': '0 0 32px rgba(24, 199, 161, 0.2)',
        'nav': '0 4px 24px rgba(15, 23, 42, 0.06)',
      },
      transitionDuration: {
        'slow': '400ms',
        'medium': '300ms',
        'fast': '200ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      maxWidth: {
        'container': '1280px',
        'text': '680px',
      },
    },
  },
  plugins: [],
}