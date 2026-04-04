"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animation-variants";
import { siteConfig } from "@/lib/site.config";

const links = [
  {
    label: "Email",
    display: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    display: "arthur-jean-strivex",
    href: siteConfig.links.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    display: "ArthurDEV44",
    href: siteConfig.links.github,
    external: true,
  },
  {
    label: "Calendrier",
    display: "Réserver un créneau",
    href: siteConfig.links.cal,
    external: true,
  },
];

export function ContactSection() {
  const { getVariants } = useReducedMotion();
  const containerVariants = getVariants(staggerContainer);
  const itemVariants = getVariants(fadeInUp);

  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            id="contact-heading"
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-mono tracking-tight text-gray-900 dark:text-white mb-16"
          >
            Contact
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group flex flex-col gap-2 p-5 rounded-xl border border-gray-200 dark:border-white/10 transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.02] hover:border-gray-300 dark:hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 dark:text-white/30 font-mono uppercase tracking-wider">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 dark:text-white/20 group-hover:text-gray-500 dark:group-hover:text-white/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <span className="text-sm text-gray-600 dark:text-white/60 group-hover:text-gray-900 dark:group-hover:text-white transition-colors truncate">
                  {link.display}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
