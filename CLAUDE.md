# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commandes de développement

```bash
bun dev        # Serveur de développement (http://localhost:3000)
bun build      # Build de production
bun start      # Serveur de production
bun lint       # Vérification avec Biome (linting)
bun format     # Formatage du code avec Biome
```

## Stack technique

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS 4 avec tw-animate-css
- **UI**: Base UI Components, Lucide React (icônes)
- **Utilitaires**: clsx + tailwind-merge (fonction `cn` dans `src/lib/utils.ts`)
- **Linter/Formatter**: Biome (remplace ESLint + Prettier)
- **Package Manager**: bun

## Architecture

### Structure des imports

L'alias `@/*` pointe vers `./src/*`. Tous les composants de sections sont exportés centralement depuis `src/components/index.ts`.

### Flux de données

- **Configuration centralisée**: `src/lib/site.config.ts` contient toutes les données du site (infos personnelles, compétences, liens)
- **ISR**: Page principale avec revalidation toutes les 24h (`revalidate = 86400`)
- **SEO**: Métadonnées et JSON-LD (Person, WebSite, ProfessionalService) générés dans `src/app/page.tsx`

### Composants

- **Sections** (`src/components/sections/`): Composants de page autonomes (Hero, About, Skills, Expertise, Contact, Footer)
- **UI** (`src/components/ui/`): Composants réutilisables (Button avec class-variance-authority)
- **Hooks** (`src/hooks/`): `useIntersectionObserver` pour les animations au scroll (ajoute classe `is-visible`)

### Animations

Les animations au scroll utilisent `useIntersectionObserver` avec la classe CSS `.animate-on-scroll`. Les styles d'animation sont définis dans `src/app/globals.css`.

## Conventions Biome

- Indentation: 2 espaces
- Organisation automatique des imports activée
- Règles recommandées pour React et Next.js
