# Story: Refonte Hero Content

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 03 - Hero Section |
| Priorité | Haute |
| Estimation | 2.5h |
| Dépendances | 03-hero-section/01-implementation-hero-background |

## Description

Refondre le contenu du Hero (titre, sous-titre, CTAs) avec le nouveau design : typographie display, text gradients, et boutons stylisés.

## Critères d'Acceptation

- [ ] Titre principal en `font-display` taille `text-6xl lg:text-8xl`
- [ ] Text gradient sur mots-clés (ex: "solutions intelligentes")
- [ ] Sous-titre en `text-xl lg:text-2xl text-white/90`
- [ ] CTA primaire : bouton blanc solide
- [ ] CTA secondaire : bouton glass
- [ ] Layout centré verticalement et horizontalement
- [ ] Espacement responsive

## Fichiers à Modifier

- `src/components/sections/HeroSection.tsx`

## Structure du Contenu

```tsx
<div className="relative z-10 flex flex-col items-center justify-center min-h-dvh text-center px-4 sm:px-6">
  {/* Titre principal */}
  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] tracking-tight text-white mb-6">
    Développeur Full Stack
    <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-white">
      & Architecte IA
    </span>
  </h1>

  {/* Sous-titre */}
  <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed">
    Je conçois des{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
      solutions intelligentes
    </span>{" "}
    pour startups : SaaS, marketplaces et systèmes d'agents IA.
  </p>

  {/* CTAs */}
  <div className="flex flex-col sm:flex-row gap-4">
    <Button size="xl" className="group">
      Discutons de votre projet
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </Button>

    <Button variant="glass" size="xl">
      Voir mes compétences
      <ArrowDown className="w-4 h-4" />
    </Button>
  </div>

  {/* Tech badges (optionnel) */}
  <div className="flex flex-wrap justify-center gap-3 mt-12">
    {["Next.js", "Rust", "Electron", "TypeScript"].map((tech) => (
      <span
        key={tech}
        className="px-3 py-1 text-sm text-white/60 bg-white/5 border border-white/10 rounded-full"
      >
        {tech}
      </span>
    ))}
  </div>
</div>
```

## Text Gradient Utility

```css
/* Dans globals.css */
.text-gradient-cyan {
  background: linear-gradient(90deg, #a5f3fc 0%, #ffffff 50%, #ffffff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-emerald {
  background: linear-gradient(90deg, #34d399 0%, #22d3ee 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Responsive

| Breakpoint | Title Size | Subtitle Size |
|------------|------------|---------------|
| Mobile | text-5xl | text-lg |
| SM | text-6xl | text-xl |
| LG | text-7xl | text-2xl |
| XL | text-8xl | text-2xl |

## Notes Techniques

- Utiliser `leading-[1.05]` pour un line-height serré sur les grands titres
- Le text gradient nécessite `bg-clip-text` ET `-webkit-text-fill-color: transparent`
- Tester la lisibilité sur le mesh gradient avec différentes couleurs
