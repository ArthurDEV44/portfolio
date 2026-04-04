"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { springDefault } from "@/lib/animation-variants";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

export function NavbarSection() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          scrolled ? "backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="font-pixel-grid text-gray-900 dark:text-white">
              arthurjean.com
            </span>
          </a>

          <div className="flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              render={
                // biome-ignore lint/a11y/useAnchorContent: content injected by Base UI render prop
                <a
                  href={siteConfig.links.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Prendre RDV"
                />
              }
            >
              Prendre RDV
            </Button>

            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors"
              aria-label={
                theme === "dark"
                  ? "Passer au thème clair"
                  : "Passer au thème sombre"
              }
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
