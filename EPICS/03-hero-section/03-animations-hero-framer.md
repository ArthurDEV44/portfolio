# Story: Animations Hero (Framer Motion)

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 03 - Hero Section |
| Priorité | Moyenne |
| Estimation | 2h |
| Dépendances | 03-hero-section/02-refonte-hero-content |

## Description

Ajouter les animations d'entrée fluides au Hero avec Framer Motion : fade-in staggeré, spring animations, et transitions élégantes.

## Critères d'Acceptation

- [ ] Installation de `motion` (Framer Motion)
- [ ] Titre avec animation fade-in + slide-up
- [ ] Sous-titre avec délai après le titre
- [ ] CTAs avec animation staggerée
- [ ] Tech badges avec animation cascade
- [ ] Respect de `prefers-reduced-motion`
- [ ] Spring config pour animations naturelles

## Dépendances à Installer

```bash
pnpm add motion
```

## Fichiers à Modifier

- `src/components/sections/HeroSection.tsx`

## Configuration Animation

```tsx
"use client";

import { motion } from "motion/react";

// Spring configuration
const springConfig = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

// Variants pour le container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Variants pour les enfants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig,
  },
};

// Variants pour les badges (cascade)
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8 + i * 0.05,
      ...springConfig,
    },
  }),
};
```

## Implémentation

```tsx
export function HeroSection() {
  return (
    <section className="relative min-h-dvh bg-[#050505] overflow-hidden">
      <HeroBackground />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-dvh text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Titre */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold"
        >
          Développeur Full Stack
          <br />
          <span className="text-gradient-cyan">& Architecte IA</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-white/80 max-w-2xl mb-10"
        >
          Je conçois des solutions intelligentes...
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex gap-4">
          <Button size="xl">Discutons de votre projet</Button>
          <Button variant="glass" size="xl">Voir mes compétences</Button>
        </motion.div>

        {/* Tech badges */}
        <div className="flex gap-3 mt-12">
          {techs.map((tech, i) => (
            <motion.span
              key={tech}
              custom={i}
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="px-3 py-1 text-sm text-white/60 bg-white/5 border border-white/10 rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

## Reduced Motion Support

```tsx
import { useReducedMotion } from "motion/react";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : containerVariants;

  // ...
}
```

## Notes Techniques

- Utiliser `motion/react` (nouveau package name de Framer Motion)
- Les spring animations sont plus naturelles que les easing CSS
- `staggerChildren` crée l'effet cascade automatiquement
- Tester sur devices réels pour la performance
