import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cadence | Business Workflow Automation",
  description: "Automate repetitive workflows, invoice processing, and operations. Connect WhatsApp, documents, spreadsheets and payments.",
  keywords: ["workflow automation", "invoice processing", "order management", "payment reconciliation", "business process automation"],
  authors: [{ name: "Cadence" }],
  creator: "Cadence",
  publisher: "Cadence",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cadence.io",
    title: "Cadence | Business Workflow Automation",
    description: "Automate repetitive workflows, invoice processing, and operations.",
    siteName: "Cadence",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cadence | Business Workflow Automation",
    description: "Automate repetitive workflows, invoice processing, and operations.",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fontBody.variable} ${fontHeading.variable} ${fontMono.variable} min-h-screen flex flex-col font-sans bg-background text-text`}>
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}