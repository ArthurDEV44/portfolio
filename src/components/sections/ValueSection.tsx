import {
  MotionContainer,
  MotionHeading,
  MotionItem,
} from "@/components/motion/MotionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";

const values = [
  {
    title: "Vision produit",
    description:
      "Je pense utilisateur avant de penser code. J'ai lancé et opéré mes propres SaaS, je sais ce qui fait qu'un produit tient.",
  },
  {
    title: "Workflow AI-native",
    description:
      "Expert Claude Code et Codex. Skills, subagents, workflows multi-agents, mode swarm, CLI + MCP : je maîtrise chaque feature de ces outils pour orchestrer le développement de bout en bout.",
  },
  {
    title: "Ship solo, end-to-end",
    description:
      "De l'architecture au déploiement, je gère tout. Pas besoin de coordination, pas de dépendance.",
  },
  {
    title: "Open source & communauté",
    description:
      "Contributeur actif, pas juste consommateur. Je construis des outils que d'autres utilisent.",
  },
];

export function ValueSection() {
  return (
    <section
      id="value"
      className="py-12 lg:py-16"
      aria-labelledby="value-heading"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <MotionContainer variants={staggerContainer}>
          <MotionHeading
            id="value-heading"
            variants={fadeInUp}
            className="text-xl sm:text-2xl lg:text-3xl font-mono tracking-tight text-gray-900 dark:text-white mb-16"
          >
            Ce que j&apos;apporte
          </MotionHeading>

          <div className="flex flex-col gap-12">
            {values.map((value) => (
              <MotionItem key={value.title} variants={fadeInUp}>
                <h3 className="text-lg font-display font-medium text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 dark:text-white/50 leading-relaxed">
                  {value.description}
                </p>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>
      </div>
    </section>
  );
}
