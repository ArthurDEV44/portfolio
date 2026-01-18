# Story: Refonte ExpertiseSection

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 05 - Sections Contenu |
| Priorité | Haute |
| Estimation | 2.5h |
| Dépendances | 01-fondations, 02-composants-ui |

## Description

Refondre la section Expertise IA avec des cartes glass élaborées, badges colorés, et animations staggered.

## Critères d'Acceptation

- [ ] Grid 1/2 colonnes responsive
- [ ] Cartes glass avec description détaillée
- [ ] Badges/tags avec fond coloré subtil (`bg-emerald-500/10 text-emerald-400`)
- [ ] Icônes pertinentes pour chaque compétence
- [ ] Animation staggered à l'apparition
- [ ] Section workflow séparée (n8n)
- [ ] Titre avec text gradient

## Fichiers à Modifier

- `src/components/sections/ExpertiseSection.tsx`

## Structure

```tsx
"use client";

import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { aiSkills, workflowSkills } from "@/lib/site.config";
import {
  Brain,
  Search,
  GitBranch,
  Layers,
  Shield,
  Workflow,
  Database,
  Zap,
  MessageSquare,
  Gauge,
  CheckCircle,
  Bot,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-[#030610]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            Intelligence Artificielle
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4">
            Expertise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              IA & Automatisation
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Systèmes d'agents IA avancés, RAG, et orchestration de workflows intelligents.
          </p>
        </div>

        {/* AI Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {aiSkills.map((skill, index) => (
            <ExpertiseCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </motion.div>

        {/* Workflow Skills */}
        <div className="mt-16">
          <h3 className="text-xl font-display font-medium text-white/80 mb-6 flex items-center gap-2">
            <Workflow className="w-5 h-5 text-cyan-400" />
            Automatisation & Workflows
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {workflowSkills.map((skill, index) => (
              <ExpertiseCard
                key={skill.name}
                skill={skill}
                index={index}
                variant="workflow"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

## Composant ExpertiseCard

```tsx
const skillIcons: Record<string, React.ReactNode> = {
  "Orchestration multi-agents": <Bot className="w-5 h-5" />,
  "RAG avancé": <Search className="w-5 h-5" />,
  "Tree of Thoughts planning": <GitBranch className="w-5 h-5" />,
  "Batch editing transactionnel": <Layers className="w-5 h-5" />,
  "Détection de patterns": <Brain className="w-5 h-5" />,
  "Orchestration de workflows": <Workflow className="w-5 h-5" />,
  "Indexation sémantique AST": <Database className="w-5 h-5" />,
  "Analyse de dépendances": <GitBranch className="w-5 h-5" />,
  "Gestion de contexte dynamique": <Layers className="w-5 h-5" />,
  "Validation multi-niveaux": <CheckCircle className="w-5 h-5" />,
  "Grounding anti-hallucination": <Shield className="w-5 h-5" />,
  "NLU spécialisé": <MessageSquare className="w-5 h-5" />,
  "Cache intelligent multi-niveaux": <Zap className="w-5 h-5" />,
  "Optimisations de performance": <Gauge className="w-5 h-5" />,
  "LLM Engineering": <Brain className="w-5 h-5" />,
  "Intégration MCP": <Bot className="w-5 h-5" />,
  n8n: <Workflow className="w-5 h-5" />,
};

interface ExpertiseCardProps {
  skill: { name: string; description: string };
  index: number;
  variant?: "ai" | "workflow";
}

function ExpertiseCard({ skill, index, variant = "ai" }: ExpertiseCardProps) {
  const icon = skillIcons[skill.name] || <Zap className="w-5 h-5" />;
  const accentColor = variant === "workflow" ? "cyan" : "emerald";

  return (
    <motion.div variants={cardVariants}>
      <GlassCard variant="card" glowLine className="p-6 h-full">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={`w-10 h-10 rounded-lg bg-${accentColor}-500/10 border border-${accentColor}-500/20 flex items-center justify-center text-${accentColor}-400 shrink-0`}
          >
            {icon}
          </div>

          {/* Content */}
          <div>
            <h4 className="font-display font-medium text-white mb-2">
              {skill.name}
            </h4>
            <p className="text-sm text-white/50 leading-relaxed">
              {skill.description}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
```

## Notes Techniques

- Utiliser les couleurs dynamiques avec précaution (Tailwind JIT)
- Alternative: définir les classes en dur pour chaque variante
- Les icônes Lucide sont légères et cohérentes
- `h-full` sur les cards pour alignement égal dans le grid
