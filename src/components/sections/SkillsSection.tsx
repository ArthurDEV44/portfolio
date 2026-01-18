"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  fadeInScale,
  hoverScale,
  staggerContainerFast,
  viewportConfig,
} from "@/lib/animation-variants";
import { devTools, mainStack } from "@/lib/site.config";

// Mapping des icônes pour la stack principale
const mainStackIcons: Record<string, string> = {
  Rust: "/icons/stack_principal/rust_lang_logo_icon_169776.svg",
  "Next.js": "/icons/stack_principal/nextjs_icon_132160.svg",
  Python: "/icons/stack_principal/python_logo_icon_168886.svg",
  Blockchain: "/icons/stack_principal/hive_blockchain_logo_icon_248085.svg",
  Tauri: "/icons/stack_principal/tauri_logo_icon_249441.svg",
  TypeScript: "/icons/stack_principal/typescriptlang_logo_icon_170379.svg",
  TailwindCSS: "/icons/stack_principal/tailwindcss_logo_icon_167923.svg",
};

// Mapping des icônes pour les outils
const toolsIcons: Record<string, string> = {
  "Claude Code": "/icons/outils/claude-color.svg",
  Cursor: "/icons/outils/cursor.svg",
  "Hugging Face": "/icons/outils/huggingface-color.svg",
  Ollama: "/icons/outils/ollama.svg",
  vLLM: "/icons/outils/vllm-color.svg",
  "Llama.cpp": "/icons/outils/llama_cpp.jpg",
  Vercel: "/icons/outils/vercel.svg",
  Render: "/icons/outils/render.jpg",
  Drizzle: "/icons/outils/drizzle.png",
  Stripe: "/icons/outils/stripe.jpeg",
  Neon: "/icons/outils/neon.png",
  Clerk: "/icons/outils/clerk.jpeg",
  Cloudflare: "/icons/outils/cloudflare.jpeg",
  Solana: "/icons/outils/Solana.svg",
};

function getSkillEmoji(category: string): string {
  const emojis: Record<string, string> = {
    Framework: "⚡",
    Backend: "🔧",
    Desktop: "🖥️",
    Auth: "🔐",
    Hosting: "☁️",
    Styling: "🎨",
    Database: "💾",
    ORM: "📊",
    Payment: "💳",
    State: "📦",
    "Data Fetching": "🔄",
    Redis: "⚡",
    CLI: "💻",
    TUI: "📟",
    Realtime: "🔴",
    Email: "📧",
    CDN: "🌐",
    Language: "📝",
    "UI Library": "🧩",
    "3D": "🎮",
    "AI Assistant": "🤖",
    IDE: "💡",
    Web3: "⛓️",
  };
  return emojis[category] || "📦";
}

interface SkillCardProps {
  skill: { name: string; category: string };
  cardVariants: Variants;
  prefersReducedMotion: boolean | null;
  useIcon?: boolean;
}

function SkillCard({
  skill,
  cardVariants,
  prefersReducedMotion,
  useIcon = false,
}: SkillCardProps) {
  const iconPath = mainStackIcons[skill.name] || toolsIcons[skill.name];
  const hasIcon = useIcon && iconPath;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={prefersReducedMotion ? undefined : hoverScale}
    >
      <GlassCard variant="interactive" glowLine className="p-4 sm:p-5 group">
        <div className="flex items-center gap-3">
          {/* Icon container */}
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${hasIcon ? "bg-white" : "bg-black/50 border border-white/10 group-hover:border-white/20"}`}
          >
            {hasIcon ? (
              <Image
                src={iconPath}
                alt={skill.name}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            ) : (
              <span className="text-lg">{getSkillEmoji(skill.category)}</span>
            )}
          </div>

          <div>
            <p className="font-medium text-white group-hover:text-white transition-colors">
              {skill.name}
            </p>
            <p className="text-xs text-white/50">{skill.category}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function SkillsSection() {
  const { prefersReducedMotion, getVariants } = useReducedMotion();
  const containerVariants = getVariants(staggerContainerFast);
  const cardVariants = getVariants(fadeInScale);

  return (
    <section
      id="skills"
      className="py-24 lg:py-32 bg-[#050505]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4"
          >
            Stack <span className="text-gradient-emerald">Technique</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Les technologies que j&apos;utilise au quotidien pour créer des
            applications performantes.
          </p>
        </div>

        {/* Stack Principale */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-medium text-white/80 mb-6">
            Stack Principale
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {mainStack.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                cardVariants={cardVariants}
                prefersReducedMotion={prefersReducedMotion}
                useIcon
              />
            ))}
          </motion.div>
        </div>

        {/* Outils */}
        <div>
          <h3 className="text-xl font-display font-medium text-white/80 mb-6">
            Outils
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {devTools.map((tool) => (
              <SkillCard
                key={tool.name}
                skill={tool}
                cardVariants={cardVariants}
                prefersReducedMotion={prefersReducedMotion}
                useIcon
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
