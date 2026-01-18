"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  linkVariants,
  menuVariants,
  springDefault,
} from "@/lib/animation-variants";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#skills", label: "Compétences" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

// Mobile Menu Button
function MobileMenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
    >
      <motion.div
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.div>
    </button>
  );
}

// Mobile Menu Component
function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Focus trap
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0] as HTMLElement;
      firstElement?.focus();
    }
  }, [isOpen]);

  // Escape key + body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0A0A0A] border-l border-white/10 z-[70] md:hidden"
          >
            <div className="flex flex-col h-full p-6 pt-20">
              {/* Links */}
              <nav
                className="flex flex-col gap-2"
                aria-label="Navigation mobile"
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    onClick={onClose}
                    className="px-4 py-3 text-lg text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto">
                <Button
                  size="lg"
                  className="w-full"
                  render={
                    <a
                      href={siteConfig.links.cal}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                    >
                      Prendre RDV
                    </a>
                  }
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Main Navbar Component
export function NavbarSection() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springDefault}
        className="fixed top-0 left-0 right-0 z-50"
        role="banner"
      >
        <div
          className={cn(
            "w-full transition-all duration-300",
            scrolled
              ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5"
              : "bg-transparent",
          )}
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <span className="font-display font-semibold text-white">
                {siteConfig.name}
              </span>
            </a>

            {/* Navigation Desktop */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Navigation principale"
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    hoveredIndex === index ? "text-white" : "text-white/60",
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </nav>

            {/* CTA + Mobile menu button */}
            <div className="flex items-center gap-4">
              <Button
                size="default"
                className="hidden sm:inline-flex"
                render={
                  <a
                    href={siteConfig.links.cal}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prendre RDV
                  </a>
                }
              />

              <MobileMenuButton
                isOpen={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
