"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animation-variants";

export function AboutSection() {
  const { getVariants } = useReducedMotion();
  const containerVariants = getVariants(staggerContainer);
  const itemVariants = getVariants(fadeInUp);

  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-2xl"
        >
          <motion.h2
            id="about-heading"
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-mono tracking-tight text-gray-900 dark:text-white mb-8"
          >
            À propos
          </motion.h2>

          <div className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-500 dark:text-white/50 leading-relaxed"
            >
              AI Builder & Architecte Produit. Je ne code plus,
              j&apos;orchestre.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-500 dark:text-white/50 leading-relaxed"
            >
              5 ans de développement m&apos;ont appris une chose : la valeur
              n&apos;est pas dans le code, elle est dans le produit.
              Aujourd&apos;hui, je pilote la construction de bout en bout avec
              l&apos;IA, de l&apos;architecture au déploiement.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-500 dark:text-white/50 leading-relaxed"
            >
              Créateur d&apos;OpenbookLM (SaaS) et Rust Doctor (dev tool).
              Contributeur open source. Stack principale : Next.js & Rust.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 dark:text-white/40 leading-relaxed"
            >
              Ce qui me drive : construire des produits qui résolvent de vrais
              problèmes.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
