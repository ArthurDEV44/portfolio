# Story: Création NavbarSection

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 04 - Navigation |
| Priorité | Haute |
| Estimation | 3h |
| Dépendances | 01-fondations, 02-composants-ui |

## Description

Créer une navbar fixe avec effet backdrop blur au scroll, navigation avec hover pill animé, et CTA proéminent.

## Critères d'Acceptation

- [ ] Navbar fixe en haut (`position: fixed`)
- [ ] Transparent au départ
- [ ] Fond `bg-black/80 backdrop-blur-xl` après scroll
- [ ] Logo avec favicon StriveX + nom "Arthur Jean"
- [ ] Liens de navigation: Compétences, Expertise, Contact
- [ ] Hover pill animé avec `layoutId` (Framer Motion)
- [ ] CTA "Prendre RDV" en blanc
- [ ] Transition fluide background au scroll

## Fichiers à Créer

- `src/components/sections/NavbarSection.tsx`

## Structure

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#skills", label: "Compétences" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export function NavbarSection() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={cn(
          "w-full transition-all duration-300",
          scrolled
            ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/images/strivex-favicon.png"
              alt=""
              className="w-8 h-8"
            />
            <span className="font-display font-semibold text-white">
              {siteConfig.name}
            </span>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  hoveredIndex === index ? "text-white" : "text-white/60"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button
              size="default"
              className="hidden sm:inline-flex"
              render={
                <a
                  href={siteConfig.links.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Prendre RDV
            </Button>

            {/* Mobile menu button */}
            <MobileMenuButton />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
```

## Intégration dans Page

```tsx
// src/app/page.tsx
import { NavbarSection } from "@/components";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <main className="min-h-screen">
        {/* sections... */}
      </main>
    </>
  );
}
```

## Notes Techniques

- Le `layoutId="nav-pill"` permet l'animation fluide entre les liens
- Utiliser `{ passive: true }` sur le scroll listener pour la performance
- La navbar doit avoir `z-50` pour rester au-dessus du contenu
- Ajouter `scroll-margin-top` sur les sections pour compenser la navbar fixe
