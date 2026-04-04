"use client";

import { motion } from "motion/react";
import { type ReactNode, useEffect, useState } from "react";
import { springDefault } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

export function NavbarWrapper({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
        {children}
      </div>
    </motion.header>
  );
}
