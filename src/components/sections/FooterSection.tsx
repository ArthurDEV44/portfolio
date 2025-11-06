"use client";

import { ArrowUp, Linkedin, Mail, Github } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

export function FooterSection() {
  return (
    <footer className="bg-black text-gray-300 rounded-lg sm:rounded-xl relative z-0">
      <div className="w-full max-w-[1200px] mx-auto pt-20 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-['PPMori'] font-medium text-2xl sm:text-3xl text-white tracking-[-0.07em] leading-none mb-3 sm:mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Développeur Full Stack & Architecte IA
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="flex items-center text-white transition-colors p-1.5 sm:p-2 rounded-md sm:rounded-lg hover:bg-white/10"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white transition-colors p-1.5 sm:p-2 rounded-md sm:rounded-lg hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white transition-colors p-1.5 sm:p-2 rounded-md sm:rounded-lg hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gray-400 font-['PPMori'] font-semibold mb-3 sm:mb-4 text-xs sm:text-sm tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#skills"
                  className="text-white transition-colors text-xs sm:text-sm font-['PPMori'] hover:text-gray-300"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="text-white transition-colors text-xs sm:text-sm font-['PPMori'] hover:text-gray-300"
                >
                  Expertise IA
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white transition-colors text-xs sm:text-sm font-['PPMori'] hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gray-400 font-['PPMori'] font-semibold mb-3 sm:mb-4 text-xs sm:text-sm tracking-wide">
              Liens
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors text-xs sm:text-sm font-['PPMori'] hover:text-gray-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors text-xs sm:text-sm font-['PPMori'] hover:text-gray-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors text-xs sm:text-sm font-['PPMori'] hover:text-gray-300"
                >
                  Réserver un appel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm font-['PPMori'] text-center md:text-left">
              © {new Date().getFullYear()} {siteConfig.name}. Tous droits
              réservés.
            </p>
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-['PPMori'] px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg hover:bg-white/10"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Retour en haut</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

