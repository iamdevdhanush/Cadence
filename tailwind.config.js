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
        background: '#050505',
        surface: '#0B0B0B',
        border: 'rgba(255,255,255,.08)',
        accent: '#63F0C8',
        text: '#F8F8F8',
        muted: '#A1A1AA',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'hero': ['84px', { lineHeight: '0.92', letterSpacing: '-0.05em', fontWeight: '700' }],
        'hero-mobile': ['46px', { lineHeight: '0.92', letterSpacing: '-0.05em', fontWeight: '700' }],
        'section-heading': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.6', letterSpacing: '0' }],
        'body': ['18px', { lineHeight: '1.65', letterSpacing: '0' }],
        'body-sm': ['16px', { lineHeight: '1.6', letterSpacing: '0' }],
      },
      spacing: {
        'section': '140px',
        'container': '40px',
        'container-mobile': '20px',
      },
      borderRadius: {
        'btn': '4px',
        'card': '8px',
        'pill': '9999px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0,0,0,0.3)',
        'elevated': '0 8px 32px rgba(0,0,0,0.4)',
        'glow': '0 0 24px rgba(99, 240, 200, 0.15)',
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
        'text': '620px',
      },
    },
  },
  plugins: [],
}