"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Platform", href: "#platform", hasDropdown: true },
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Customers", href: "#customers" },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-premium",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav className="container px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.a
            href="/"
            className="flex items-center gap-2 font-heading font-bold text-xl text-text z-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Cadence Home"
          >
            <span className="relative">
              <span className="relative z-10">Cadence</span>
              <motion.span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full"
                style={{ background: "linear-gradient(90deg, #6EE7B7, #5AC8FA)" }}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                aria-hidden="true"
              />
            </span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-text transition-colors px-2 py-1.5 rounded-lg hover:bg-surface"
                      onMouseEnter={() => setDropdownOpen(item.label)}
                      onMouseLeave={() => setDropdownOpen(null)}
                      aria-expanded={dropdownOpen === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform" style={{ transform: dropdownOpen === item.label ? "rotate(180deg)" : "rotate(0deg)" }} aria-hidden="true" />
                    </button>
                    {dropdownOpen === item.label && (
                      <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 surface-card-elevated py-2 rounded-xl"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        role="menu"
                      >
                        {["Overview", "Features", "Integrations", "API Docs"].map((link) => (
                          <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="block px-4 py-2 text-sm text-text-muted hover:text-text hover:bg-accent-muted transition-colors"
                            role="menuitem"
                          >
                            {link}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-text-muted hover:text-text transition-colors px-2 py-1.5 rounded-lg hover:bg-surface"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#login" className="text-sm font-medium text-text-muted hover:text-text transition-colors px-4 py-2 rounded-lg hover:bg-surface">
              Sign in
            </a>
            <MagneticButton variant="primary" className="group">
              <span className="flex items-center gap-2">
                Start Audit
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </span>
            </MagneticButton>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-text-muted hover:text-text hover:bg-surface transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <motion.div
          id="mobile-menu"
          className="lg:hidden overflow-hidden border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-text-muted hover:text-text hover:bg-surface rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a href="#login" className="text-sm font-medium text-text-muted hover:text-text px-4 py-2 rounded-lg hover:bg-surface transition-colors">
                Sign in
              </a>
              <MagneticButton variant="primary" className="w-full">
                <span className="flex items-center justify-center gap-2">
                  Start Audit
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}