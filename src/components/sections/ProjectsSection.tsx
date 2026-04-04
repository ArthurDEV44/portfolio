import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { DragCarousel } from "@/components/motion/DragCarousel";
import {
  MotionContainer,
  MotionHeading,
  MotionItem,
} from "@/components/motion/MotionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";

const projects = [
  {
    title: "OpenbookLM",
    description:
      "SaaS de recherche intelligente dans les documents. Alternative à NotebookLM, propulsée par du RAG avancé et des agents IA.",
    tags: ["SaaS", "RAG", "Agents IA"],
    url: "https://www.openbooklm.fr",
    image: "/images/openbooklm.fr_fr.webp",
  },
  {
    title: "Rust Doctor",
    description:
      "Outil d'analyse de santé pour projets Rust. CLI, serveur MCP et skill Claude Code.",
    tags: ["Dev Tool", "Rust", "MCP"],
    url: "https://rust-doctor.vercel.app",
    image: "/images/rust-doctor.vercel.app.webp",
  },
  {
    title: "Contributions Open Source",
    description: "Contributeur actif sur Zed et d'autres projets open source.",
    tags: ["Open Source", "Zed"],
    url: "https://github.com/ArthurDEV44",
    image: "/images/github.com_ArthurDEV44.webp",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-12 lg:py-16 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <MotionContainer variants={staggerContainer}>
          <MotionHeading
            id="projects-heading"
            variants={fadeInUp}
            className="text-xl sm:text-2xl lg:text-3xl font-mono tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Projets
          </MotionHeading>
          <MotionItem variants={fadeInUp}>
            <p className="text-gray-400 dark:text-white/40 mb-12">
              Glissez pour explorer
            </p>
          </MotionItem>
        </MotionContainer>
      </div>

      <DragCarousel>
        {projects.map((project) => (
          <div
            key={project.title}
            className="shrink-0 w-[85vw] sm:w-[500px] lg:w-[560px] group"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  draggable={false}
                />
              </div>

              <div className="flex items-start justify-between gap-4 mb-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-display font-medium text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 dark:text-white/30 group-hover:text-gray-500 dark:group-hover:text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-gray-400 dark:text-white/40 border border-gray-200 dark:border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                {project.description}
              </p>
            </a>
          </div>
        ))}
      </DragCarousel>
    </section>
  );
}
