import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 scroll-mt-20 sm:scroll-mt-24 bg-[#050505]"
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
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Contenu texte */}
            <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-base sm:text-lg text-white/50 font-['PPMori'] font-light leading-relaxed text-start">
                Solutions Engineer & System Architect — De l'idée au produit
                scalable en un temps record.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-['PPMori'] font-normal leading-relaxed text-start bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#a1a1aa_100%)] bg-clip-text text-transparent">
                Ne construisez pas un MVP que vous devrez jeter dans 6 mois. Je
                suis développeur AI-Native et Architecte Système. Je ne vends
                pas des lignes de code, je vends une infrastructure.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-['PPMori'] font-normal leading-relaxed text-start bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#a1a1aa_100%)] bg-clip-text text-transparent">
                En tant que Fractional CTO, je comble le fossé entre votre
                vision stratégique et la réalité technique. J'utilise la
                puissance de l'IA générative pour orchestrer le développement
                avec une vélocité x10, tout en garantissant la rigueur d'une
                architecture système pensée pour la sécurité et la performance.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-['PPMori'] font-normal leading-relaxed text-start bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#a1a1aa_100%)] bg-clip-text text-transparent">
                En parallèle, je fonde une startup Deep Tech en stealth mode
                (Cyber-sécurité & Systèmes distribués). Je confronte
                quotidiennement mes compétences aux exigences les plus hautes :
                cryptographie avancée, haute performance et architecture
                résiliente.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-['PPMori'] font-medium leading-relaxed text-start bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#71717a_100%)] bg-clip-text text-transparent">
                Mon engagement : Un actif technologique prêt à scaler en 30
                jours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
