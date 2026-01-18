# Story: Création MeshGradient Component

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 02 - Composants UI |
| Priorité | Haute |
| Estimation | 3h |
| Dépendances | 01-fondations |

## Description

Porter le système Mesh Gradient WebGL de StriveX vers le portfolio. Ce composant génère un gradient animé fluide inspiré du design Stripe.

## Critères d'Acceptation

- [ ] Fichier `src/lib/gradient.ts` copié et adapté de StriveX
- [ ] Composant `MeshGradient` wrapper React créé
- [ ] Props configurables : colors, density, amplitude, speed, seed
- [ ] Option `darkenTop` pour gradient d'assombrissement
- [ ] Fallback statique si WebGL non supporté
- [ ] Cleanup proper du canvas au unmount
- [ ] Performance: requestAnimationFrame optimisé

## Fichiers à Créer

- `src/lib/gradient.ts` (copie depuis StriveX)
- `src/components/ui/mesh-gradient.tsx`

## Interface

```typescript
interface MeshGradientProps {
  colors?: string[];
  density?: [number, number];
  amplitude?: number;
  speed?: number;
  seed?: number;
  darkenTop?: boolean;
  className?: string;
}
```

## Couleurs par Défaut (Hero)

```typescript
const DEFAULT_COLORS = [
  "#020617", // Slate 950
  "#064e3b", // Emerald 900
  "#0d9488", // Teal 600
  "#22d3ee", // Cyan 400
];
```

## Composant Wrapper

```tsx
"use client";

import { useEffect, useRef } from "react";
import { Gradient } from "@/lib/gradient";
import { cn } from "@/lib/utils";

export function MeshGradient({
  colors = DEFAULT_COLORS,
  density = [0.04, 0.12],
  amplitude = 400,
  speed = 0.002,
  seed = 42,
  darkenTop = false,
  className,
}: MeshGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientRef = useRef<Gradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const gradient = new Gradient();
    gradientRef.current = gradient;

    gradient.initGradient(canvasRef.current, {
      colors,
      density,
      amplitude,
      speed,
      seed,
      darkenTop,
    });

    return () => {
      gradient.disconnect();
    };
  }, [colors, density, amplitude, speed, seed, darkenTop]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full", className)}
      style={{ isolation: "isolate" }}
    />
  );
}
```

## Fallback Statique

```tsx
// Si WebGL non supporté, afficher un gradient CSS
const isWebGLSupported = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
};

// Dans le composant
if (!isWebGLSupported()) {
  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        background: `linear-gradient(135deg, ${colors.join(", ")})`,
      }}
    />
  );
}
```

## Source StriveX

Copier depuis: `/home/sauron/code/strivex-next/src/lib/gradient.ts`

## Notes Techniques

- Le gradient.ts utilise des shaders GLSL
- Attention à la gestion mémoire (disconnect au unmount)
- Tester sur mobile pour la performance
- Ajouter `will-change: transform` si nécessaire
