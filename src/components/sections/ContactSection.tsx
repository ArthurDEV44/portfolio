import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site.config";
import { Mail, Calendar, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Section Header */}
        <header className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['PPMori'] font-medium text-gray-900 mb-3 sm:mb-4 tracking-[-0.07em]"
          >
            Travaillons ensemble
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-['PPMori'] font-normal">
            Prêt à transformer votre idée en réalité ?
          </p>
        </header>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Email Card */}
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="group bg-white border border-gray-200 rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg shrink-0 group-hover:bg-gray-100 transition-colors">
                <Mail className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h3 className="font-['PPMori'] font-medium text-lg sm:text-xl text-gray-900 mb-2">
                  Email
                </h3>
                <p className="font-['PPMori'] font-normal text-sm sm:text-base text-gray-600">
                  {siteConfig.links.email}
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg shrink-0 group-hover:bg-gray-100 transition-colors">
                <Linkedin className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h3 className="font-['PPMori'] font-medium text-lg sm:text-xl text-gray-900 mb-2">
                  LinkedIn
                </h3>
                <p className="font-['PPMori'] font-normal text-sm sm:text-base text-gray-600">
                  Connectons-nous
                </p>
              </div>
            </div>
          </a>

          {/* Calendar Card */}
          <a
            href={siteConfig.links.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg shrink-0 group-hover:bg-gray-100 transition-colors">
                <Calendar className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h3 className="font-['PPMori'] font-medium text-lg sm:text-xl text-gray-900 mb-2">
                  Réserver un appel
                </h3>
                <p className="font-['PPMori'] font-normal text-sm sm:text-base text-gray-600">
                  30 minutes pour discuter de votre projet
                </p>
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg shrink-0 group-hover:bg-gray-100 transition-colors">
                <Github className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h3 className="font-['PPMori'] font-medium text-lg sm:text-xl text-gray-900 mb-2">
                  GitHub
                </h3>
                <p className="font-['PPMori'] font-normal text-sm sm:text-base text-gray-600">
                  Découvrez mes projets
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="default"
            size="xl"
            className="py-0"
            render={
              <a
                href={siteConfig.links.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-button inline-flex items-center justify-center"
              >
                <span className="hero-cta-text-wrapper inline-block relative overflow-hidden">
                  <span className="hero-cta-text hero-cta-text-original inline-block">
                    Planifier un appel
                  </span>
                  <span className="hero-cta-text hero-cta-text-hover inline-block absolute top-0 left-0 w-full">
                    Planifier un appel
                  </span>
                </span>
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}

