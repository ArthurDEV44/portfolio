import {
  MotionContainer,
  MotionHeading,
  MotionItem,
} from "@/components/motion/MotionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";

const steps = [
  {
    period: "2021 — 2023",
    title: "Apprentissage développement",
    description:
      "Formation en alternance. Les bases du métier, les premières lignes de code, la découverte du terrain.",
  },
  {
    period: "2023 — 2025",
    title: "Seul développeur en entreprise",
    description:
      "Architecture, produit, déploiement : tout reposait sur moi. Adoption de l'IA dès fin 2022 avec ChatGPT et GitHub Copilot, puis Cursor dès sa sortie.",
  },
  {
    period: "2025",
    title: "Solopreneur",
    description:
      "Je lance mes propres produits : OpenbookLM et Rust Doctor. Contributeur open source sur Zed. Bascule complète sur Cursor puis Claude Code.",
  },
  {
    period: "2026",
    title: "Expert AI Builder",
    description:
      "Maîtrise complète de Claude Code : skills, subagents, workflows multi-agents, mode swarm, MCP. Codex intégré au workflow pour les PRD et la review de code.",
  },
];

export function JourneySection() {
  return (
    <section
      id="journey"
      className="py-12 lg:py-16"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <MotionContainer variants={staggerContainer}>
          <MotionHeading
            id="journey-heading"
            variants={fadeInUp}
            className="text-xl sm:text-2xl lg:text-3xl font-mono tracking-tight text-gray-900 dark:text-white mb-16"
          >
            Parcours
          </MotionHeading>

          <div className="flex flex-col gap-12">
            {steps.map((step) => (
              <MotionItem
                key={step.title}
                variants={fadeInUp}
                className="relative flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 bg-gray-300 dark:bg-white/20 shrink-0" />
                  <span className="text-xs text-gray-400 dark:text-white/30 font-mono">
                    {step.period}
                  </span>
                </div>
                <h3 className="text-lg font-display font-medium text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>
      </div>
    </section>
  );
}
