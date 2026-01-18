"use client";

import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animation-variants";

const steps = [
  {
    week: "Semaine 1",
    title: "Architecture & Sécurité",
    description:
      "On ne code pas à l'aveugle. Je challenge votre modèle et conçois une architecture sur-mesure (Microservices, Sécurité des données, Choix Web vs Desktop). L'objectif : zéro dette technique structurelle.",
    color: "emerald",
  },
  {
    week: "Semaines 2 & 3",
    title: "Orchestration & Développement",
    description:
      "Je déploie le système. Stack moderne et robuste (Rust pour la performance, Next.js pour l'interface, Python pour l'IA). Grâce à mon workflow assisté par IA, je produis en 2 semaines ce qu'une équipe classique ferait en 2 mois.",
    color: "cyan",
  },
  {
    week: "Semaine 4",
    title: "Livraison & Autonomie",
    description:
      "Je ne crée pas de dépendance. Je vous livre une documentation complète, un code propre et auditable. Si vous voulez internaliser l'équipe plus tard, le terrain est sain.",
    color: "violet",
  },
] as const;

export function ApproachSection() {
  const { getVariants } = useReducedMotion();
  const containerVariants = getVariants(staggerContainer);
  const itemVariants = getVariants(fadeInUp);

  return (
    <section
      id="approach"
      className="py-24 lg:py-32 bg-[#050505]"
      aria-labelledby="approach-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            Méthodologie
          </span>
          <h2
            id="approach-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4"
          >
            Approche <span className="text-gradient-cyan">System-First</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Un actif technologique prêt à scaler en 30 jours, pas un prototype
            jetable.
          </p>
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          {/* Ligne verticale centrale (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-cyan-500/50 to-violet-500/50" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              const colorClasses = {
                emerald: {
                  bg: "bg-emerald-500/10",
                  border: "border-emerald-500/20",
                  text: "text-emerald-400",
                  glow: "bg-emerald-500/20",
                },
                cyan: {
                  bg: "bg-cyan-500/10",
                  border: "border-cyan-500/20",
                  text: "text-cyan-400",
                  glow: "bg-cyan-500/20",
                },
                violet: {
                  bg: "bg-violet-500/10",
                  border: "border-violet-500/20",
                  text: "text-violet-400",
                  glow: "bg-violet-500/20",
                },
              }[step.color];

              return (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className={`lg:flex lg:items-center lg:gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="lg:w-[calc(50%-2rem)]">
                    <GlassCard
                      variant="card"
                      className="p-6 relative overflow-hidden"
                    >
                      {/* Glow effect */}
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 ${colorClasses.glow} rounded-full blur-3xl opacity-50`}
                      />

                      <div className="relative">
                        {/* Week badge */}
                        <span
                          className={`inline-block px-3 py-1 text-xs font-medium ${colorClasses.text} ${colorClasses.bg} border ${colorClasses.border} rounded-full mb-4`}
                        >
                          {step.week}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-display font-medium text-white mb-3">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/60 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full ${colorClasses.bg} border-2 ${colorClasses.border} ${colorClasses.text}`}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 text-center"
        >
          <p className="text-base sm:text-lg text-white/50 font-['PPMori'] font-light leading-relaxed">
            Secure by design. Scalable by architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
