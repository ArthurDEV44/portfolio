import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="max-w-[900px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Image */}
            <div className="shrink-0 w-full md:w-auto">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto md:mx-0 rounded-full overflow-hidden">
                <Image
                  src="/linkedin-arthur.png"
                  alt="Arthur"
                  fill
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  priority
                />
              </div>
            </div>

            {/* Contenu texte */}
            <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-['PPMori'] font-medium italic leading-relaxed text-start">
                Développeur passionné par le coding et les systèmes d'agents IA
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 font-['PPMori'] font-normal italic leading-relaxed text-start">
                Je me spécialise dans l'orchestration multi-agents, le RAG avancé et l'analyse AST pour la compréhension de code. 
                J'aime architecturer des environnements qui peuvent planifier, exécuter et valider des tâches complexes – 
                de l'analyse sémantique à l'édition de code, en passant par le raisonnement multi-étapes.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 font-['PPMori'] font-normal italic leading-relaxed text-start">
                Au quotidien, je conçois des solutions pour les startups : SaaS performants, marketplaces, e-commerce, 
                apps desktop/mobile, landing pages et bien sûr des systèmes d'agents IA spécialisés. 
                Mon objectif ? Transformer vos idées en produits viables et intelligents, de la conception au MVP.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 font-['PPMori'] font-normal italic leading-relaxed text-start">
                Et quand j'ai un peu de temps libre, je me lance dans des projets quantiques via IBM Quantum – 
                avec des tests réels (environ 10 minutes par mois). C'est modeste, mais c'est mon petit pas vers l'avenir de la tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

