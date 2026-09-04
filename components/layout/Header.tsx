"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItemType {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItemType[] = [
  { label: "Pipeline", href: "#workflow", hasDropdown: false },
  { label: "Transform", href: "#chaos-to-control", hasDropdown: false },
  { label: "Examples", href: "#real-examples", hasDropdown: false },
  { label: "Exceptions", href: "#built-for-exceptions", hasDropdown: false },
  { label: "Why Cadence", href: "#why-cadence", hasDropdown: false },
];

const dropdownItems: Record<string, string[]> = {
  Pipeline: ["Ingest Streams", "OCR & Parsing", "Rules Matching", "ERP Connectors"],
  Transform: ["Unstructured to Structured", "Real-Time Sync"],
  Examples: ["WhatsApp Orders", "PDF Invoices", "Bank Reconciliation"],
  Exceptions: ["Tolerance Engine", "Human-in-the-Loop", "Audit Trail"],
  "Why Cadence": ["Zero Migration", "Native Formats", "Rapid Pilot"],
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [dropdownHovered, setDropdownHovered] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    setDropdownOpen(label);
    setDropdownHovered(label);
  };

  const handleDropdownLeave = () => {
    setDropdownOpen(null);
    setDropdownHovered(null);
  };

  const handleDropdownContentEnter = () => {
    setDropdownHovered(dropdownOpen);
  };

  const handleDropdownContentLeave = () => {
    setDropdownHovered(null);
    setTimeout(() => {
      if (!dropdownHovered) setDropdownOpen(null);
    }, 100);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-premium",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-elevation-1"
          : "bg-transparent"
      )}
      style={{ height: "72px" }}
      role="banner"
    >
      <nav className="container px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-[72px]">
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

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                dropdownOpen={dropdownOpen}
                dropdownHovered={dropdownHovered}
                onEnter={handleDropdownEnter}
                onLeave={handleDropdownLeave}
                onContentEnter={handleDropdownContentEnter}
                onContentLeave={handleDropdownContentLeave}
              />
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#login"
              className="text-sm font-medium text-text-muted hover:text-text transition-colors px-4 py-2 rounded-lg hover:bg-surface focus-visible:focus-visible"
            >
              Sign in
            </a>
            <a
              href="#audit"
              className="btn-primary group px-5 py-2 text-xs font-semibold rounded-lg"
            >
              <span className="flex items-center gap-1.5">
                Start Audit
                <ChevronDown className="w-3.5 h-3.5 -rotate-90 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-text-muted hover:text-text hover:bg-surface transition-colors focus-visible:focus-visible"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="py-4 space-y-1 px-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-text-muted hover:text-text hover:bg-surface rounded-lg transition-colors focus-visible:focus-visible"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-border flex flex-col gap-3 px-2">
                  <a
                    href="#login"
                    className="text-sm font-medium text-text-muted hover:text-text px-4 py-2 rounded-lg hover:bg-surface transition-colors focus-visible:focus-visible"
                  >
                    Sign in
                  </a>
                  <MagneticButton variant="primary" className="w-full px-4 py-3">
                    <span className="flex items-center justify-center gap-2">
                      Start Audit
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              ref={dropdownRef}
              className="absolute left-0 right-0 top-full bg-background/95 backdrop-blur-xl border-b border-border/50 lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="py-4 px-6 space-y-3">
                {dropdownItems[dropdownOpen as keyof typeof dropdownItems]?.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-text-muted hover:text-text hover:bg-surface rounded-lg transition-colors focus-visible:focus-visible"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {dropdownOpen && (
        <DropdownPanel
          label={dropdownOpen}
          items={dropdownItems[dropdownOpen as keyof typeof dropdownItems] || []}
          onEnter={handleDropdownContentEnter}
          onLeave={handleDropdownContentLeave}
        />
      )}
    </header>
  );
}

function NavItem({
  item,
  dropdownOpen,
  dropdownHovered,
  onEnter,
  onLeave,
  onContentEnter,
  onContentLeave,
}: {
  item: typeof navItems[0];
  dropdownOpen: string | null;
  dropdownHovered: string | null;
  onEnter: (label: string) => void;
  onLeave: () => void;
  onContentEnter: () => void;
  onContentLeave: () => void;
}) {
  const isOpen = dropdownOpen === item.label;

  if (!item.hasDropdown) {
    return (
      <a
        href={item.href}
        className="text-sm font-medium text-text-muted hover:text-text transition-colors px-4 py-2.5 rounded-lg hover:bg-surface focus-visible:focus-visible relative"
      >
        {item.label}
        <motion.span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full"
          style={{ background: "linear-gradient(90deg, #6EE7B7, #5AC8FA)" }}
          initial={{ width: 0 }}
          whileHover={{ width: "80%" }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        />
      </a>
    );
  }

  return (
    <div className="relative" onMouseEnter={onContentEnter} onMouseLeave={onContentLeave}>
      <button
        className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text transition-colors px-4 py-2.5 rounded-lg hover:bg-surface focus-visible:focus-relative"
        onMouseEnter={() => onEnter(item.label)}
        onMouseLeave={onLeave}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <motion.span
          className="ml-1"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </motion.span>
      </button>
    </div>
  );
}

function DropdownPanel({
  label,
  items,
  onEnter,
  onLeave,
}: {
  label: string;
  items: string[];
  onEnter: () => void;
  onLeave: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const trigger = document.querySelector(`[aria-expanded="true"]`) as HTMLElement;
    if (trigger && panelRef.current) {
      const rect = trigger.getBoundingClientRect();
      const panelRect = panelRef.current.getBoundingClientRect();
      setPosition({
        left: rect.left - panelRect.width / 2 + rect.width / 2,
        width: panelRect.width,
      });
    }
    window.addEventListener("resize", () => {
      if (trigger && panelRef.current) {
        const rect = trigger.getBoundingClientRect();
        const panelRect = panelRef.current.getBoundingClientRect();
        setPosition({
          left: rect.left - panelRect.width / 2 + rect.width / 2,
          width: panelRect.width,
        });
      }
    });
  }, [label]);

  return (
    <motion.div
      ref={panelRef}
      className="absolute left-0 top-full z-50 w-full lg:absolute lg:left-auto lg:top-full lg:mt-3"
      style={{
        left: typeof window !== "undefined" ? position.left : 0,
        minWidth: Math.max(typeof window !== "undefined" ? position.width : 200, 200),
      }}
      initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      role="menu"
    >
      <motion.div
        className="surface-card-elevated py-2 rounded-xl shadow-elevation-4 border border-border/50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, delay: 0.05 }}
      >
        {items.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="block px-4 py-2.5 text-sm text-text-muted hover:text-text hover:bg-accent-muted/50 transition-colors relative group focus-visible:focus-visible"
            role="menuitem"
          >
            <span className="relative z-10">{link}</span>
            <motion.span
              className="absolute left-0 top-0 h-full w-0.5"
              style={{ background: "linear-gradient(180deg, #6EE7B7, #5AC8FA)" }}
              initial={{ height: 0 }}
              whileHover={{ height: "100%" }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              aria-hidden="true"
            />
          </a>
        ))}
      </motion.div>
      <motion.div
        className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
        style={{ background: "var(--color-surface-elevated)", borderLeft: "1px solid var(--color-border)", borderTop: "1px solid var(--color-border)" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15, delay: 0.1 }}
        aria-hidden="true"
      />
    </motion.div>
  );
}