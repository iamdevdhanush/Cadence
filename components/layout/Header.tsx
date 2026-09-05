"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavItemType {
  label: string;
  href: string;
}

const navItems: NavItemType[] = [
  { label: "Workflow", href: "#workflow" },
  { label: "Transformation", href: "#chaos-to-control" },
  { label: "Production Cases", href: "#real-examples" },
  { label: "Exception Engine", href: "#built-for-exceptions" },
  { label: "Why Cadence", href: "#why-cadence" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-[#050607]/85 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-4"
          : "bg-transparent py-5"
      )}
      role="banner"
    >
      <nav className="container flex items-center justify-between" aria-label="Main navigation">
        {/* Brand */}
        <a
          href="/"
          className="flex items-center gap-2.5 font-heading font-semibold text-xl tracking-tight text-white focus-visible:focus-visible"
          aria-label="Cadence Home"
        >
          <span className="w-2 h-2 rounded-full bg-[#63E6BE]" aria-hidden="true" />
          <span>Cadence</span>
        </a>

        {/* Center Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-normal text-[#9EA0A8] hover:text-white px-3.5 py-1.5 rounded-md hover:bg-white/[0.04] transition-colors focus-visible:focus-visible"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#audit"
            className="text-[15px] font-normal text-[#9EA0A8] hover:text-white transition-colors px-3 py-1.5 focus-visible:focus-visible"
          >
            Sign in
          </a>
          <a
            href="#audit"
            className="btn-primary text-xs font-medium tracking-wide uppercase px-4 py-2"
          >
            Start Audit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-[#9EA0A8] hover:text-white hover:bg-white/[0.05] transition-colors focus-visible:focus-visible"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden fixed inset-x-0 top-[72px] bg-[#0C0D0F] border-b border-[rgba(255,255,255,0.08)] px-6 py-6 shadow-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base text-[#9EA0A8] hover:text-white py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex flex-col gap-3">
                <a
                  href="#audit"
                  className="text-center py-2.5 text-sm text-[#9EA0A8] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </a>
                <a
                  href="#audit"
                  className="btn-primary text-center justify-center py-2.5 text-xs uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Audit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}