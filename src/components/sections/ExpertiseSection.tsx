"use client";

import {
  BrainCircuit,
  Workflow,
  Code2,
  Database,
  Sparkles,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { aiSkills, workflowSkills } from "@/lib/site.config";

const iconMap: Record<string, React.ElementType> = {
  "Agentique IA": BrainCircuit,
  "RAG avancé": Database,
  "Analyse AST": Code2,
  "LLM Engineering": Sparkles,
  MCP: Workflow,
  n8n: Workflow,
};

export function ExpertiseSection() {
  useIntersectionObserver("skill-card");

  return (
    <section
      id="expertise"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gray-50 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Section Header */}
        <header className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2
            id="expertise-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['PPMori'] font-medium text-gray-900 mb-3 sm:mb-4 tracking-[-0.07em]"
          >
            Expertise IA & Automatisation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-['PPMori'] font-normal">
            Conception de systèmes intelligents et automatisation avancée
          </p>
        </header>

        {/* Compétences IA */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-['PPMori'] font-medium text-gray-900 mb-6 sm:mb-8 tracking-[-0.05em]">
            Intelligence Artificielle
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {aiSkills.map((skill, index) => {
              const Icon = iconMap[skill.name] || BrainCircuit;
              return (
                <div
                  key={skill.name}
                  className="skill-card bg-white border border-gray-200 rounded-xl p-6 sm:p-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-['PPMori'] font-medium text-lg sm:text-xl text-gray-900 mb-2">
                        {skill.name}
                      </h4>
                      <p className="font-['PPMori'] font-normal text-sm sm:text-base text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workflow & Automatisation */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-['PPMori'] font-medium text-gray-900 mb-6 sm:mb-8 tracking-[-0.05em]">
            Workflow & Automatisation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {workflowSkills.map((skill, index) => {
              const Icon = iconMap[skill.name] || Workflow;
              return (
                <div
                  key={skill.name}
                  className="skill-card bg-white border border-gray-200 rounded-xl p-6 sm:p-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-['PPMori'] font-medium text-lg sm:text-xl text-gray-900 mb-2">
                        {skill.name}
                      </h4>
                      <p className="font-['PPMori'] font-normal text-sm sm:text-base text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note sur Quantum Computing */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="skill-card bg-linear-to-br from-cyan-600 via-blue-600 to-purple-600 border border-cyan-400/30 rounded-xl p-6 sm:p-8 text-white shadow-lg shadow-purple-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-['PPMori'] font-medium text-lg sm:text-xl mb-2">
                  Side Project : Quantum Computing
                </h4>
                <p className="font-['PPMori'] font-normal text-sm sm:text-base text-white/90 leading-relaxed">
                  Exploration du calcul quantique via IBM Quantum avec des tests
                  réels (10 min/mois). Un pas modeste mais concret vers l'avenir de
                  la technologie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

