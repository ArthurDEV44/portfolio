# Story: Performance

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 06 - Polish |
| Priorité | Haute |
| Estimation | 2h |
| Dépendances | Toutes les sections |

## Description

Optimiser les performances du portfolio : Core Web Vitals, chargement des fonts, lazy loading, et bundle size.

## Critères d'Acceptation

- [ ] Score Lighthouse Performance > 90
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Bundle JS < 200KB (gzipped)
- [ ] Fonts optimisées (swap, preload)
- [ ] Images optimisées (WebP, lazy load)
- [ ] Pas de layout shift visible

## Optimisation des Fonts

### Configuration next/font

```tsx
// src/app/layout.tsx
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Évite FOIT
  variable: "--font-inter",
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["500", "600", "700"], // Seulement les poids utilisés
  preload: true,
});
```

### PP Mori (Local Font)

```css
/* Déjà optimisé avec font-display: swap */
@font-face {
  font-family: "PPMori";
  src: url("/fonts/PPMori-Regular.otf") format("opentype");
  font-weight: 400;
  font-display: swap;
}
```

## Optimisation des Images

### Configuration next/image

```tsx
// Utiliser next/image pour toutes les images
import Image from "next/image";

<Image
  src="/images/profile.jpg"
  alt="Photo de profil"
  width={200}
  height={200}
  priority={true} // Pour images above-the-fold
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Images Below the Fold

```tsx
<Image
  src="/images/phase_1.jpeg"
  alt="Phase 1"
  width={600}
  height={400}
  loading="lazy" // Par défaut
/>
```

## Optimisation du Bundle

### Imports Dynamiques

```tsx
// Mesh Gradient - chargé uniquement côté client
import dynamic from "next/dynamic";

const MeshGradient = dynamic(
  () => import("@/components/ui/mesh-gradient").then((mod) => mod.MeshGradient),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-cyan-950" />
    ),
  }
);
```

### Tree Shaking Lucide

```tsx
// ❌ Mauvais - importe tout le bundle
import * as Icons from "lucide-react";

// ✅ Bon - importe uniquement ce qui est utilisé
import { Mail, Linkedin, Github } from "lucide-react";
```

### Framer Motion

```tsx
// Importer seulement ce qui est nécessaire
import { motion, AnimatePresence } from "motion/react";
// Pas: import * as motion from "motion/react"
```

## Lazy Loading des Sections

```tsx
// Sections below the fold
const ExpertiseSection = dynamic(
  () => import("@/components/sections/ExpertiseSection").then((mod) => mod.ExpertiseSection),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((mod) => mod.ContactSection),
  { ssr: true }
);
```

## Optimisation du Mesh Gradient

```tsx
// Limiter le framerate sur mobile
useEffect(() => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    gradient.setSpeed(0.001); // Plus lent sur mobile
  }
}, []);

// Pause quand hors viewport
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        gradient.play();
      } else {
        gradient.pause();
      }
    },
    { threshold: 0 }
  );

  observer.observe(canvasRef.current);
  return () => observer.disconnect();
}, []);
```

## Preloading Critique

```tsx
// src/app/layout.tsx
export const metadata = {
  // ...
};

// Preload des ressources critiques
<head>
  <link
    rel="preload"
    href="/fonts/PPMori-Regular.otf"
    as="font"
    type="font/otf"
    crossOrigin="anonymous"
  />
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
  />
</head>
```

## Configuration Next.js

```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
};
```

## Mesures et Monitoring

### Lighthouse CI

```bash
# Tester localement
pnpm build && pnpm start
# Ouvrir Chrome DevTools → Lighthouse
```

### Web Vitals

```tsx
// src/app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Checklist Performance

- [ ] `pnpm build` sans warnings
- [ ] Bundle analyzer montre < 200KB JS
- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s sur 3G lent
- [ ] Pas de layout shift visible
- [ ] Fonts chargées avec swap
- [ ] Images en WebP/AVIF
- [ ] Mesh gradient lazy loaded
- [ ] Sections below fold lazy loaded

## Outils de Test

- **Lighthouse**: Score global et recommandations
- **WebPageTest**: Waterfall et filmstrip
- **Chrome DevTools Performance**: Profiling détaillé
- **Bundle Analyzer**: `ANALYZE=true pnpm build`

## Notes Techniques

- Le Mesh Gradient WebGL est le plus gros impact performance
- Prévoir un fallback CSS pour les devices faibles
- `next/image` optimise automatiquement les images
- ISR (revalidate: 86400) réduit le TTFB
