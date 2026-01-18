# Story: Configuration Typographie

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 01 - Fondations |
| Priorité | Haute |
| Estimation | 1.5h |
| Dépendances | Aucune |

## Description

Configurer le nouveau système typographique avec les fonts Google utilisées par StriveX, tout en conservant PP Mori comme option.

## Critères d'Acceptation

- [ ] Fonts Google configurées via `next/font/google`
- [ ] Inter (400, 500) pour le corps de texte
- [ ] Plus Jakarta Sans (500, 600, 700) pour les titres display
- [ ] Cormorant Garamond (300-700, normal+italic) pour les éléments élégants
- [ ] Geist Mono pour le code
- [ ] Variables CSS `--font-*` définies
- [ ] PP Mori conservé et disponible via `font-['PPMori']`
- [ ] Classes utilitaires: `font-sans`, `font-display`, `font-elegant`, `font-mono`

## Fichiers à Modifier

- `src/app/layout.tsx` - Configuration fonts Google
- `src/app/globals.css` - Variables et stack typographique

## Configuration Layout

```tsx
import { Inter, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { GeistMono } from "geist/font/mono";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
```

## Variables CSS

```css
@theme inline {
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-display: var(--font-plus-jakarta-sans), ui-sans-serif, system-ui, sans-serif;
  --font-elegant: var(--font-cormorant), "Cormorant Garamond", Georgia, serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;
}
```

## Notes Techniques

- Utiliser `variable` pour chaque font afin de les exposer en CSS
- Appliquer les variables sur `<html>` via className
- PP Mori reste disponible via `font-['PPMori']` pour usage ponctuel
