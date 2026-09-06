import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const geist = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const geistMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Cadence | AI Automation Agency',
  description: 'We build AI systems that automate the work your team shouldn\'t be doing manually. From WhatsApp orders and invoices to CRM workflows and internal operations.',
  keywords: ['AI automation', 'workflow automation', 'WhatsApp automation', 'business process automation', 'AI agents', 'CRM integration'],
  authors: [{ name: 'Cadence' }],
  creator: 'Cadence',
  publisher: 'Cadence',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cadence.ai',
    title: 'Cadence | AI Automation Agency',
    description: 'We build AI systems that automate the work your team shouldn\'t be doing manually.',
    siteName: 'Cadence',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence | AI Automation Agency',
    description: 'We build AI systems that automate the work your team shouldn\'t be doing manually.',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#FCFDFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background text-text antialiased">
        {children}
      </body>
    </html>
  )
}