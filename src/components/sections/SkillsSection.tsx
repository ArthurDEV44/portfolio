"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { mainStack, secondaryStack, devTools } from "@/lib/site.config";

export function SkillsSection() {
  useIntersectionObserver("skill-card");

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Section Header */}
        <header className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['PPMori'] font-medium text-gray-900 mb-3 sm:mb-4 tracking-[-0.07em]"
          >
            Stack Technique
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-['PPMori'] font-normal">
            Technologies et outils que je maîtrise au quotidien
          </p>
        </header>

        {/* Stack Principale */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-['PPMori'] font-medium text-gray-900 mb-6 sm:mb-8 tracking-[-0.05em]">
            Stack Principale
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {mainStack.map((tech, index) => (
              <div
                key={tech.name}
                className="skill-card bg-white border border-gray-200 rounded-lg p-4 sm:p-5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <p className="font-['PPMori'] font-medium text-sm sm:text-base text-gray-900 mb-1">
                    {tech.name}
                  </p>
                  <p className="font-['PPMori'] font-normal text-xs text-gray-500">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Secondaire */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-['PPMori'] font-medium text-gray-900 mb-6 sm:mb-8 tracking-[-0.05em]">
            Stack Secondaire
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {secondaryStack.map((tech, index) => (
              <div
                key={tech.name}
                className="skill-card bg-white border border-gray-200 rounded-lg p-4 sm:p-5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <p className="font-['PPMori'] font-medium text-sm sm:text-base text-gray-900 mb-1">
                    {tech.name}
                  </p>
                  <p className="font-['PPMori'] font-normal text-xs text-gray-500">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outils de Développement */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-['PPMori'] font-medium text-gray-900 mb-6 sm:mb-8 tracking-[-0.05em]">
            Outils de Développement
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {devTools.map((tool, index) => (
              <div
                key={tool.name}
                className="skill-card bg-white border border-gray-200 rounded-lg p-4 sm:p-5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <p className="font-['PPMori'] font-medium text-sm sm:text-base text-gray-900 mb-1">
                    {tool.name}
                  </p>
                  <p className="font-['PPMori'] font-normal text-xs text-gray-500">
                    {tool.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

