"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  badgeVariants,
  fadeInUp,
  staggerContainerSlow,
} from "@/lib/animation-variants";
import { siteConfig } from "@/lib/site.config";
import { HeroBackground } from "./hero/HeroBackground";

const TECH_STACK = ["Next.js", "Rust", "Electron", "TypeScript"];

export function HeroSection() {
  const { getVariants } = useReducedMotion();

  const activeContainerVariants = getVariants(staggerContainerSlow);
  const activeItemVariants = getVariants(fadeInUp);
  const activeBadgeVariants = getVariants(badgeVariants);

  return (
    <section
      id="hero"
      className="relative min-h-dvh bg-[#050505] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background avec MeshGradient */}
      <HeroBackground />

      {/* Container principal - centré verticalement et horizontalement */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-dvh text-center px-4 sm:px-6"
        variants={activeContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Titre principal */}
        <motion.h1
          id="hero-heading"
          variants={activeItemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] tracking-tight text-white mb-6"
        >
          Développeur Full Stack
          <br />
          <span className="text-gradient-cyan">&amp; Architecte IA</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          variants={activeItemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed"
        >
          Je conçois des{" "}
          <span className="text-gradient-emerald">solutions intelligentes</span>{" "}
          pour startups : SaaS, marketplaces et systèmes d&apos;agents IA.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={activeItemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="xl"
            render={
              <a
                href={siteConfig.links.cal}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discutons de votre projet
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            }
          />

          <Button
            variant="glass"
            size="xl"
            render={
              <a href="#skills">
                Voir mes compétences
                <ArrowDown className="w-4 h-4" />
              </a>
            }
          />
        </motion.div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {TECH_STACK.map((tech, i) => (
            <motion.span
              key={tech}
              custom={i}
              variants={activeBadgeVariants}
              initial="hidden"
              animate="visible"
              className="px-3 py-1 text-sm text-white/60 bg-white/5 border border-white/10 rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-[5]" />
    </section>
  );
}
