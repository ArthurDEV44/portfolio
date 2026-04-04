"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animation-variants";

const clients = [
  {
    title: "Azuna",
    description: "Site vitrine pour une conciergerie immobilière à Nice.",
    image: "/images/azuna.pro_.webp",
    url: "https://azuna.pro",
  },
  {
    title: "Dress Night",
    description: "E-commerce de robes de soirée avec panel admin.",
    image: "/images/dress-night.com_.webp",
    url: null,
  },
  {
    title: "Au Sommet de Chez Vous",
    description: "Site vitrine pour une entreprise d'élagage dans le Morbihan.",
    image: "/images/ausommetdechezvous.bzh_.webp",
    url: "https://ausommetdechezvous.bzh",
  },
];

export function ClientsSection() {
  const { getVariants } = useReducedMotion();
  const containerVariants = getVariants(staggerContainer);
  const itemVariants = getVariants(fadeInUp);

  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    function updateConstraints() {
      if (!containerRef.current || !stripRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const stripWidth = stripRef.current.scrollWidth;
      setDragConstraints({ left: -(stripWidth - containerWidth), right: 0 });
    }
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <section
      id="clients"
      className="py-12 lg:py-16 overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            id="clients-heading"
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-mono tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Réalisations clients
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 dark:text-white/40 mb-12"
          >
            Glissez pour explorer
          </motion.p>
        </motion.div>
      </div>

      <div ref={containerRef}>
        <motion.div
          ref={stripRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing pl-[max(1rem,calc((100vw-800px)/2+1.5rem))]"
          drag="x"
          style={{ x }}
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
        >
          {clients.map((client) => {
            const Wrapper = client.url ? "a" : "div";
            const linkProps = client.url
              ? {
                  href: client.url,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <motion.div
                key={client.title}
                variants={itemVariants}
                className="shrink-0 w-[85vw] sm:w-[500px] lg:w-[560px] group"
              >
                <Wrapper
                  {...linkProps}
                  className="block"
                  onClick={(e: React.MouseEvent) => {
                    if (isDragging) e.preventDefault();
                  }}
                >
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={client.image}
                      alt={client.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      draggable={false}
                    />
                  </div>

                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-display font-medium text-gray-900 dark:text-white">
                      {client.title}
                    </h3>
                    {client.url && (
                      <ArrowUpRight className="w-4 h-4 text-gray-300 dark:text-white/30 group-hover:text-gray-500 dark:group-hover:text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                    {client.description}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}

          <div className="shrink-0 w-4 sm:w-6" />
        </motion.div>
      </div>
    </section>
  );
}
