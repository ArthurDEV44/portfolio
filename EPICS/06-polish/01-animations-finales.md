# Story: Animations Finales

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 06 - Polish |
| Priorité | Moyenne |
| Estimation | 2h |
| Dépendances | Toutes les sections |

## Description

Finaliser les animations sur l'ensemble du site : cohérence des timings, scroll animations, micro-interactions, et support reduced motion.

## Critères d'Acceptation

- [ ] Timings cohérents sur toutes les sections
- [ ] Scroll animations avec `whileInView` uniformes
- [ ] Micro-interactions sur tous les éléments interactifs
- [ ] Support complet de `prefers-reduced-motion`
- [ ] Pas de jank/stutter visible
- [ ] Animations non-bloquantes (GPU accelerated)

## Configuration Globale des Animations

### Design Tokens Animation

```typescript
// src/lib/design-tokens.ts
export const animation = {
  duration: {
    instant: 100,
    fast: 200,
    default: 300,
    slow: 500,
    slower: 800,
  },

  spring: {
    default: { type: "spring", stiffness: 100, damping: 20 },
    snappy: { type: "spring", stiffness: 300, damping: 30 },
    bouncy: { type: "spring", stiffness: 400, damping: 25 },
  },

  easing: {
    default: [0.4, 0, 0.2, 1],
    in: [0.4, 0, 1, 1],
    out: [0, 0, 0.2, 1],
    inOut: [0.4, 0, 0.2, 1],
  },

  stagger: {
    fast: 0.05,
    default: 0.1,
    slow: 0.15,
  },
};
```

### Variants Réutilisables

```typescript
// src/lib/animation-variants.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: animation.spring.default,
  },
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: animation.spring.default,
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animation.stagger.default,
    },
  },
};
```

## Micro-Interactions

### Boutons

```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 25 }}
>
  {children}
</motion.button>
```

### Cards

```tsx
<motion.div
  whileHover={{ y: -4 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
  <GlassCard>{children}</GlassCard>
</motion.div>
```

### Links

```tsx
<motion.a
  whileHover={{ x: 2 }}
  transition={{ type: "spring", stiffness: 400, damping: 30 }}
>
  {children}
</motion.a>
```

## Scroll Animations

### Configuration Viewport

```tsx
// Utilisé partout pour cohérence
const viewportConfig = {
  once: true,
  margin: "-100px",
};

// Usage
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={viewportConfig}
  variants={fadeInUp}
>
```

## Reduced Motion Support

### Hook Personnalisé

```tsx
// src/hooks/use-reduced-motion.ts
import { useReducedMotion } from "motion/react";

export function useAnimationConfig() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: "hidden",
    animate: "visible",
    // ... normal config
  };
}
```

### CSS Fallback

```css
/* src/app/globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Performance

### GPU Acceleration

```css
/* Forcer l'accélération GPU */
.animate-gpu {
  transform: translateZ(0);
  will-change: transform, opacity;
}
```

### Cleanup will-change

```tsx
// Retirer will-change après animation
<motion.div
  onAnimationComplete={() => {
    // L'élément n'a plus besoin de will-change
  }}
/>
```

## Checklist Finale

- [ ] Toutes les sections utilisent les mêmes variants
- [ ] `viewport={{ once: true }}` sur tous les whileInView
- [ ] Pas d'animation sur les éléments hors viewport initial
- [ ] Transitions CSS cohérentes (duration-300 par défaut)
- [ ] Test avec DevTools Performance (pas de long frames)
- [ ] Test avec `prefers-reduced-motion: reduce`

## Notes Techniques

- Framer Motion utilise les transforms GPU par défaut
- Éviter d'animer `width`, `height`, `margin`, `padding`
- Préférer `transform` et `opacity`
- `will-change` doit être utilisé avec parcimonie
