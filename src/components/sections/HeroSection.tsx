import Image from "next/image";
import { MotionContainer, MotionItem } from "@/components/motion/MotionWrapper";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainerSlow } from "@/lib/animation-variants";
import { siteConfig } from "@/lib/site.config";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    external: true,
  },
  {
    label: "X",
    href: siteConfig.links.x,
    external: true,
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-28 pb-12 lg:pt-32 lg:pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <MotionContainer variants={staggerContainerSlow} immediate>
          {/* Avatar + Name */}
          <MotionItem
            variants={fadeInUp}
            className="flex items-center gap-5 mb-6"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border border-gray-200 dark:border-white/10">
              <Image
                src="/images/avatar.webp"
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-pixel-grid text-gray-900 dark:text-white"
              >
                {siteConfig.name}
              </h1>
              <p className="text-lg text-gray-500 dark:text-white/50">
                AI Builder & Architecte Produit
              </p>
            </div>
          </MotionItem>

          {/* Description */}
          <MotionItem variants={fadeInUp}>
            <p className="text-gray-400 dark:text-white/40 max-w-xl leading-relaxed mb-8 italic">
              Je construis des produits tech de bout en bout : SaaS, dev tools
              et systèmes d&apos;agents IA. Je ne code plus, j&apos;orchestre.
            </p>
          </MotionItem>

          {/* Social links */}
          <MotionItem variants={fadeInUp} className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="default"
                render={
                  // biome-ignore lint/a11y/useAnchorContent: content injected by Base UI render prop
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                  />
                }
              >
                {link.label}
              </Button>
            ))}
          </MotionItem>
        </MotionContainer>
      </div>
    </section>
  );
}
