# Story: Implémentation Hero Background

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 03 - Hero Section |
| Priorité | Haute |
| Estimation | 2h |
| Dépendances | 02-composants-ui/03-creation-mesh-gradient |

## Description

Créer le fond du Hero avec le Mesh Gradient, les overlays de vignette, et les effets visuels (grain, glow blobs).

## Critères d'Acceptation

- [ ] Mesh Gradient intégré avec couleurs emerald/teal/cyan
- [ ] Overlay gradient top-to-bottom pour lisibilité
- [ ] Vignette radiale pour effet depth
- [ ] Effet grain optionnel (noise overlay)
- [ ] Fade bottom vers le fond noir
- [ ] Composant `HeroBackground` isolé et réutilisable

## Fichiers à Créer

- `src/components/sections/hero/HeroBackground.tsx`

## Structure

```tsx
"use client";

import { MeshGradient } from "@/components/ui/mesh-gradient";

const HERO_COLORS = [
  "#020617", // Slate 950
  "#064e3b", // Emerald 900
  "#0d9488", // Teal 600
  "#22d3ee", // Cyan 400
];

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Mesh Gradient WebGL */}
      <MeshGradient
        colors={HERO_COLORS}
        density={[0.04, 0.12]}
        amplitude={400}
        speed={0.002}
        seed={42}
      />

      {/* Vignette radiale */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Overlay gradient pour lisibilité texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]/90 pointer-events-none" />

      {/* Grain texture (optionnel) */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow blobs (optionnel) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
```

## Intégration dans HeroSection

```tsx
import { HeroBackground } from "./hero/HeroBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-dvh bg-[#050505] overflow-hidden">
      <HeroBackground />

      {/* Contenu z-10 */}
      <div className="relative z-10">
        {/* ... */}
      </div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-[5]" />
    </section>
  );
}
```

## Notes Techniques

- Tous les overlays doivent avoir `pointer-events-none`
- Utiliser `z-index` cohérents: background (0), overlays (1-5), content (10)
- Le grain est subtil (opacity 8%) pour ne pas distraire
- Les glow blobs ajoutent de la profondeur sans dominer
