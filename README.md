# Cadence

Cadence is a business workflow automation platform built for automating repetitive workflows (e.g., WhatsApp orders, invoice processing, payment reconciliation, and internal operations).

## Tech Stack (100% Free & Open-Source)

- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend**: Next.js Server Actions & Route Handlers
- **Database & Auth**: [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage)
- **Deployment**: Vercel (Hobby)
- **DNS**: Cloudflare
- **Email**: Resend

## Architecture & Folder Structure

```
cadence/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   └── automation-audit/page.tsx
│   ├── api/
│   │   ├── contact/route.ts
│   │   └── webhook/route.ts
│   ├── layout.tsx
│   ├── globals.css
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── sitemap.ts
├── components/
│   ├── layout/       # Global shell UI (Navbar, Footer, PageTransition)
│   ├── sections/     # Reusable page sections (Hero, CTA, Features)
│   ├── motion/       # Animation components (FloatingCards, ScrollReveal)
│   ├── ui/           # Atomic design system components (Button, Card, Badge)
│   └── icons/        # Custom icons and brand marks
├── actions/          # Server Actions only (contact, audit)
├── lib/              # Shared utilities, Supabase client, constants, validators
│   ├── supabase/     # Browser and server Supabase clients
│   ├── constants.ts
│   ├── utils.ts
│   └── validations.ts
├── hooks/            # Custom React hooks
├── public/           # Static assets (images, videos, icons, logo)
├── content/          # Content-layer files (services, blog markdown)
├── styles/           # Global styles and overrides beyond Tailwind
├── types/            # Central TypeScript type declarations
├── .env.example
├── components.json
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   ```bash
   cp .env.example .env.local
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```