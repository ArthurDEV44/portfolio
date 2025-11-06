import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site.config";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-[linear-gradient(to_bottom,white_0%,#FFEDB2_22%,#FFCE86_40%,#FFAF5A_60%,#F28236_76%,#B53800_100%)] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] rounded-xl relative flex flex-col justify-between overflow-hidden mt-4 sm:mt-6 rounded-b-lg sm:rounded-b-xl"
      aria-labelledby="hero-heading"
    >
      {/* Effet de striation verticale */}
      <div className="absolute inset-0 grid grid-cols-12 sm:grid-cols-18 h-full w-full pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full opacity-7.5 bg-linear-to-l from-white from-0% to-black to-100% mix-blend-overlay"
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`sm-${i}`}
            className="hidden sm:block h-full opacity-7.5 bg-linear-to-l from-white from-0% to-black to-100% mix-blend-overlay"
          />
        ))}
      </div>

      {/* Container principal */}
      <div className="relative w-full max-w-[1200px] mx-auto pt-12 sm:pt-16 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Contenu centré */}
        <div className="relative z-10 text-center">
          {/* En-tête principal */}
          <header className="mb-6 sm:mb-7 md:mb-8">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-['PPMori'] font-medium tracking-[-0.02em] sm:tracking-[-0.05em] md:tracking-[-0.07em] text-black mb-4 sm:mb-5 md:mb-6 leading-[1.15] sm:leading-[1.12] md:leading-[1.1] animate-fade-in-up animation-delay-200 px-1"
            >
              Développeur web/desktop
              <br />
              <span className="text-black/80">Next.js | Rust | Electron</span>
            </h1>
          </header>

          {/* CTA buttons */}
          <nav
            className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center animate-fade-in-up animation-delay-600 px-2 sm:px-0"
            aria-label="Actions principales"
          >
            <Button
              variant="default"
              size="xl"
              className="py-0 w-full sm:w-auto"
              render={
                <a
                  href={siteConfig.links.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-button inline-flex items-center justify-center"
                >
                  <span className="hero-cta-text-wrapper inline-block relative overflow-hidden">
                    <span className="hero-cta-text hero-cta-text-original inline-block">
                      Discutons de votre projet
                    </span>
                    <span className="hero-cta-text hero-cta-text-hover inline-block absolute top-0 left-0 w-full">
                      Discutons de votre projet
                    </span>
                  </span>
                </a>
              }
            />
            <Button
              variant="secondary"
              size="xl"
              className="py-0 w-full sm:w-auto bg-white/90 backdrop-blur-sm hover:bg-white"
              render={
                <a
                  href="#skills"
                  className="hero-cta-button inline-flex items-center justify-center"
                >
                  <span className="hero-cta-text-wrapper inline-flex relative overflow-hidden items-center gap-2">
                    <span className="hero-cta-text hero-cta-text-original inline-flex items-center gap-2">
                      Voir mes compétences
                    </span>
                    <span className="hero-cta-text hero-cta-text-hover inline-flex absolute top-0 left-0 w-full items-center gap-2">
                      Voir mes compétences
                    </span>
                  </span>
                </a>
              }
            />
          </nav>
        </div>
      </div>
    </section>
  );
}

