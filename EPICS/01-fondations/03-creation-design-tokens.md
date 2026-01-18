# Story: Création Design Tokens

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 01 - Fondations |
| Priorité | Haute |
| Estimation | 2h |
| Dépendances | 01-migration-palette-sombre |

## Description

Créer un fichier de design tokens TypeScript centralisé pour faciliter la maintenance et la cohérence du design system.

## Critères d'Acceptation

- [ ] Fichier `src/lib/design-tokens.ts` créé
- [ ] Tokens de couleurs exportés
- [ ] Tokens d'espacement (section, header, content)
- [ ] Tokens de layout (container, max-width, padding)
- [ ] Tokens d'animation (duration, delay, easing)
- [ ] Tokens de z-index
- [ ] Tokens de shadows/glow
- [ ] Classes utilitaires prédéfinies exportées

## Fichiers à Créer

- `src/lib/design-tokens.ts`

## Structure du Fichier

```typescript
// Colors
export const colors = {
  background: "#030610",
  foreground: "#F8FAFC",
  primary: "#F8FAFC",
  accent: "#38BDF8",
  surface: "#0F1525",
  muted: "#94A3B8",
  // Gradients
  heroGradient: ["#020617", "#064e3b", "#0d9488", "#22d3ee"],
};

// Spacing
export const spacing = {
  section: {
    default: "py-16 sm:py-20 md:py-24 lg:py-28",
    compact: "py-12 sm:py-16",
    heroTop: "pt-24 lg:pt-44",
    heroBottom: "pb-20 lg:pb-28",
  },
  sectionHeader: {
    default: "mb-16 sm:mb-24",
    compact: "mb-12 sm:mb-16",
  },
};

// Layout
export const layout = {
  container: {
    default: "max-w-[1200px] mx-auto",
    narrow: "max-w-4xl mx-auto",
  },
  padding: {
    section: "px-4 sm:px-6",
    sectionLg: "px-4 sm:px-6 lg:px-8",
  },
};

// Animation
export const animation = {
  duration: {
    fast: 200,
    default: 300,
    slow: 500,
  },
  easing: {
    default: "ease-out",
    spring: { type: "spring", stiffness: 100, damping: 20 },
  },
  stagger: 0.1,
};

// Z-Index
export const zIndex = {
  behind: -20,
  background: 0,
  content: 10,
  overlay: 20,
  navbar: 50,
  mobileBackdrop: 60,
  mobileMenu: 70,
};

// Shadows & Glow
export const shadows = {
  glow: {
    cyan: "0 0 15px rgba(34, 211, 238, 0.3)",
    white: "0 0 40px -10px rgba(255, 255, 255, 0.3)",
  },
  glass: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
};

// Utility Classes
export const classes = {
  glassCard: "bg-white/[0.03] backdrop-blur-2xl border border-white/10",
  glowLine: "bg-gradient-to-r from-transparent via-white/40 to-transparent",
  textGradient: "bg-clip-text text-transparent",
  focusRing: "focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
};
```

## Notes Techniques

- Exporter des objets typés pour autocomplétion
- Utiliser des valeurs Tailwind-compatibles
- Documenter chaque token avec son usage
