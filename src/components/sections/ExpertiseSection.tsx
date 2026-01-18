"use client";

import { Bot, Brain, Monitor, Search, Workflow, Zap } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  fadeInUp,
  hoverLift,
  staggerContainer,
  viewportConfig,
} from "@/lib/animation-variants";
import { aiSkills } from "@/lib/site.config";

const skillIcons: Record<string, React.ReactNode> = {
  "Orchestration multi-agents": <Bot className="w-5 h-5" />,
  "RAG avancé": <Search className="w-5 h-5" />,
  "LLM Engineering": <Brain className="w-5 h-5" />,
  "Intégration MCP": <Zap className="w-5 h-5" />,
  "Agentic Workflows": <Workflow className="w-5 h-5" />,
  "Computer Use & Browser Automation": <Monitor className="w-5 h-5" />,
};

interface ExpertiseCardProps {
  skill: { name: string; description: string };
  variant?: "ai" | "workflow";
  cardVariants: Variants;
  prefersReducedMotion: boolean | null;
}

function ExpertiseCard({
  skill,
  variant = "ai",
  cardVariants,
  prefersReducedMotion,
}: ExpertiseCardProps) {
  const icon = skillIcons[skill.name] || <Zap className="w-5 h-5" />;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={prefersReducedMotion ? undefined : hoverLift}
    >
      <GlassCard variant="card" glowLine className="p-6 h-full">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={
              variant === "workflow"
                ? "w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0"
                : "w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0"
            }
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

export function ExpertiseSection() {
  const { prefersReducedMotion, getVariants } = useReducedMotion();
  const containerVariants = getVariants(staggerContainer);
  const cardVariants = getVariants(fadeInUp);

  return (
    <section
      id="expertise"
      className="py-24 lg:py-32 bg-[#050505]"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            Intelligence Artificielle
          </span>
          <h2
            id="expertise-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4"
          >
            Expertise <span className="text-gradient-emerald">IA</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Systèmes d&apos;agents IA avancés, RAG et LLM Engineering.
          </p>
        </div>

        {/* AI Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {aiSkills.map((skill) => (
            <ExpertiseCard
              key={skill.name}
              skill={skill}
              variant="ai"
              cardVariants={cardVariants}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
