import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}