
# Story: Refonte SkillsSection (Bento Grid)

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 05 - Sections Contenu |
| Priorité | Haute |
| Estimation | 3h |
| Dépendances | 01-fondations, 02-composants-ui |

## Description

Refondre la section Skills avec un Bento Grid moderne : cartes glass de tailles variées, glow lines, icônes stylisées, et animations au scroll.

## Critères d'Acceptation

- [ ] Layout Bento Grid responsive (1/2/3 colonnes)
- [ ] Cartes glass avec glow line en haut
- [ ] Icônes dans conteneurs `bg-black/50 border-white/10`
- [ ] Catégories: Stack Principale, Stack Secondaire, Outils
- [ ] Hover effects (scale, border highlight)
- [ ] Animation staggered à l'apparition (viewport)
- [ ] Titre de section avec text gradient

## Fichiers à Modifier

- `src/components/sections/SkillsSection.tsx`

## Structure Bento Grid

```tsx
"use client";

import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { mainStack, secondaryStack, devTools } from "@/lib/site.config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4">
            Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Technique
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Les technologies que j'utilise au quotidien pour créer des applications performantes.
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
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {mainStack.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Stack Secondaire */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-medium text-white/80 mb-6">
            Stack Secondaire
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {secondaryStack.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
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
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {devTools.map((tool) => (
              <SkillCard key={tool.name} skill={tool} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

## Composant SkillCard

```tsx
interface SkillCardProps {
  skill: { name: string; category: string };
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div variants={cardVariants}>
      <GlassCard
        variant="interactive"
        glowLine
        className="p-4 sm:p-5 group"
      >
        <div className="flex items-center gap-3">
          {/* Icon container */}
          <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
            <span className="text-lg">
              {getSkillEmoji(skill.category)}
            </span>
          </div>

          <div>
            <p className="font-medium text-white group-hover:text-white transition-colors">
              {skill.name}
            </p>
            <p className="text-xs text-white/40">
              {skill.category}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

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
  };
  return emojis[category] || "📦";
}
```

## Notes Techniques

- Le Bento Grid utilise `grid-cols-*` responsive
- `whileInView` déclenche l'animation au scroll
- `viewport={{ once: true }}` pour ne jouer qu'une fois
- Les emojis peuvent être remplacés par des icônes Lucide
