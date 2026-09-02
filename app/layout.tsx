import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cadence | Business Workflow Automation",
  description: "Automate repetitive workflows, invoice processing, and operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
