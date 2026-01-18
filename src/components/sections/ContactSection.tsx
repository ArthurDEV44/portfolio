"use client";

import { ArrowRight, Calendar, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  fadeInUp,
  headerVariants,
  staggerContainer,
  viewportConfig,
  viewportConfigNear,
} from "@/lib/animation-variants";
import { siteConfig } from "@/lib/site.config";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    description: "Écrivez-moi directement.",
    cta: "M'envoyer un email",
    href: `mailto:${siteConfig.links.email}`,
    gradient: "prismatic",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    description: "Réseau et opportunités.",
    cta: "Se connecter",
    href: siteConfig.links.linkedin,
    gradient: "chromatic",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    description: "Explorez mes projets.",
    cta: "Voir mes repos",
    href: siteConfig.links.github,
    gradient: "monochrome",
    external: true,
  },
  {
    icon: Calendar,
    label: "Calendrier",
    description: "Planifiez un appel.",
    cta: "Réserver un créneau",
    href: siteConfig.links.cal,
    gradient: "aquarelle",
    external: true,
  },
];

// Gradient backgrounds for each card type
const gradientStyles = {
  // Prismatic: conic gradient with cyan rainbow effect
  prismatic: {
    background: `
      conic-gradient(
        from 180deg at 50% 70%,
        rgba(6, 182, 212, 0.15) 0deg,
        rgba(34, 211, 238, 0.25) 60deg,
        rgba(103, 232, 249, 0.15) 120deg,
        rgba(6, 182, 212, 0.2) 180deg,
        rgba(8, 145, 178, 0.15) 240deg,
        rgba(34, 211, 238, 0.2) 300deg,
        rgba(6, 182, 212, 0.15) 360deg
      )
    `,
    glow: "rgba(34, 211, 238, 0.4)",
    iconColor: "text-cyan-400",
    borderHover: "hover:border-cyan-500/30",
  },
  // Chromatic aberration: blue with RGB offset effect
  chromatic: {
    background: `
      linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 50%, rgba(99, 102, 241, 0.15) 100%),
      radial-gradient(ellipse at 20% 80%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(34, 211, 238, 0.08) 0%, transparent 50%)
    `,
    glow: "rgba(59, 130, 246, 0.4)",
    iconColor: "text-blue-500",
    borderHover: "hover:border-blue-500/30",
  },
  // Monochrome: white/grey with luminous glow
  monochrome: {
    background: `
      radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 60%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)
    `,
    glow: "rgba(255, 255, 255, 0.3)",
    iconColor: "text-white",
    borderHover: "hover:border-white/30",
  },
  // Aquarelle: emerald with watercolor blur effect
  aquarelle: {
    background: `
      radial-gradient(ellipse at 30% 20%, rgba(52, 211, 153, 0.2) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(110, 231, 183, 0.1) 0%, transparent 70%)
    `,
    glow: "rgba(52, 211, 153, 0.4)",
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/30",
  },
};

export function ContactSection() {
  const { getVariants, getTransition } = useReducedMotion();
  const containerVariants = getVariants(staggerContainer);
  const cardVariants = getVariants(fadeInUp);
  const headVariants = getVariants(headerVariants);

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#050505] scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Section Header */}
        <motion.header
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={headVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['PPMori'] font-medium text-white mb-4 tracking-[-0.02em]"
          >
            Travaillons{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Ensemble
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 font-['PPMori'] font-normal max-w-xl mx-auto">
            Prêt à transformer votre idée en réalité ? Choisissez votre moyen de
            contact préféré.
          </p>
        </motion.header>

        {/* Contact Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfigNear}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const gradient =
              gradientStyles[method.gradient as keyof typeof gradientStyles];

            return (
              <motion.div
                key={method.label}
                variants={cardVariants}
                className="group"
                style={{ perspective: "1000px" }}
              >
                <GlassCard
                  variant="interactive"
                  className={`
                    h-full overflow-hidden
                    ${gradient.borderHover}
                    transition-all duration-500 ease-out
                    shadow-[0_0_30px_var(--card-glow)]
                    group-hover:scale-[1.02]
                    group-hover:shadow-[0_0_50px_var(--card-glow)]
                  `}
                  style={
                    {
                      "--card-glow": gradient.glow,
                    } as React.CSSProperties
                  }
                  as="a"
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  aria-label={`${method.label}: ${method.description}`}
                >
                  {/* Gradient Background Layer */}
                  <div
                    className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: gradient.background }}
                  />

                  {/* Glow Orb - visible by default */}
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-125"
                    style={{ backgroundColor: gradient.glow }}
                  />

                  {/* Secondary Glow Orb - bottom left */}
                  <div
                    className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700"
                    style={{ backgroundColor: gradient.glow }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center">
                    {/* Icon with glow effect */}
                    <div className="relative mb-5">
                      <div
                        className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-full scale-150"
                        style={{ backgroundColor: gradient.glow }}
                      />
                      <Icon
                        className={`relative w-8 h-8 ${gradient.iconColor} transition-transform duration-300 group-hover:scale-110`}
                      />
                    </div>

                    {/* Label */}
                    <h3 className="font-['PPMori'] font-medium text-lg text-white mb-2">
                      {method.label}
                    </h3>

                    {/* Description */}
                    <p className="font-['PPMori'] font-normal text-sm text-white/50 mb-5">
                      {method.description}
                    </p>

                    {/* CTA Link */}
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/70 font-['PPMori'] font-medium group-hover:text-white transition-colors duration-300">
                      {method.cta}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>

                  {/* Bottom gradient line - visible by default */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${gradient.glow}, transparent)`,
                    }}
                  />
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={getTransition({ duration: 0.6, delay: 0.4 })}
        >
          <Button
            variant="default"
            size="xl"
            className="group"
            render={
              <a
                href={siteConfig.links.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <span>Planifier un appel découverte</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            }
          />
          <p className="mt-4 text-sm text-white/40 font-['PPMori']">
            Gratuit et sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
