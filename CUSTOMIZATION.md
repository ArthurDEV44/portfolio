# Guide de Personnalisation 🎨

Ce guide vous aidera à personnaliser votre portfolio selon vos besoins.

## ⚙️ Configuration Principale

### 1. Informations personnelles

Ouvrez `src/lib/site.config.ts` et modifiez :

```typescript
export const siteConfig = {
  name: "Votre Nom",                    // ← Votre nom complet
  title: "Votre Titre Professionnel",   // ← Pour le SEO
  description: "Votre description",      // ← Description pour le SEO
  url: "https://votre-site.com",        // ← URL de votre site
  ogImage: "/og-image.png",             // ← Image Open Graph (1200x630px)
  keywords: [...],                       // ← Mots-clés SEO
  links: {
    email: "votre@email.com",           // ← Votre email
    linkedin: "https://...",             // ← Votre profil LinkedIn
    github: "https://...",               // ← Votre profil GitHub
    cal: "https://cal.com/...",         // ← Votre lien Cal.com
  },
};
```

### 2. Description Hero

Ouvrez `src/components/sections/HeroSection.tsx` et modifiez :

```typescript
<h1>
  Votre titre professionnel
  <br />
  <span>Technologies | Stack | Outils</span>
</h1>

<p>
  Votre description courte
</p>

<p>
  Votre description détaillée...
</p>
```

### 3. Stack Technique

Dans `src/lib/site.config.ts`, modifiez les tableaux :

#### Stack Principale
```typescript
export const mainStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  // Ajoutez vos technologies...
];
```

#### Stack Secondaire
```typescript
export const secondaryStack = [
  { name: "Angular", category: "Framework" },
  // Ajoutez vos technologies...
];
```

#### Outils de Développement
```typescript
export const devTools = [
  { name: "VS Code", category: "IDE" },
  // Ajoutez vos outils...
];
```

### 4. Compétences IA

Modifiez `aiSkills` dans `src/lib/site.config.ts` :

```typescript
export const aiSkills = [
  {
    name: "Nom de la compétence",
    description: "Description détaillée de la compétence",
  },
  // Ajoutez vos compétences...
];
```

### 5. Compétences Workflow

Modifiez `workflowSkills` dans `src/lib/site.config.ts` :

```typescript
export const workflowSkills = [
  {
    name: "n8n",
    description: "Description de votre expertise",
  },
  // Ajoutez vos compétences...
];
```

## 🎨 Personnalisation du Design

### Couleurs

Les couleurs principales sont définies dans `src/app/globals.css` :

```css
:root {
  --background: oklch(1 0 0);      /* Blanc */
  --foreground: oklch(0.145 0 0);  /* Noir */
}
```

### Gradient Hero

Le gradient du hero est défini dans `src/components/sections/HeroSection.tsx` :

```typescript
className="bg-[linear-gradient(to_bottom,white_0%,#FFEDB2_22%,#FFCE86_40%,#FFAF5A_60%,#F28236_76%,#B53800_100%)]"
```

Modifiez les couleurs hexadécimales pour changer le gradient.

### Fonts

Les fonts PP Mori sont déjà configurées. Pour utiliser d'autres fonts :

1. Ajoutez vos fichiers de fonts dans `public/fonts/`
2. Déclarez-les dans `src/app/globals.css`
3. Modifiez `font-['PPMori']` par votre font dans les composants

## 📸 Images

### Image Open Graph

Créez une image de 1200x630px et placez-la dans `public/` :

```bash
public/og-image.png
```

### Favicon

Remplacez `src/app/favicon.ico` par votre propre favicon.

## 📝 Contenu

### Ajouter une section

1. Créez `src/components/sections/VotreSection.tsx`
2. Exportez-la dans `src/components/index.ts`
3. Importez et utilisez-la dans `src/app/page.tsx`

Exemple :

```typescript
// src/components/sections/ProjectsSection.tsx
export function ProjectsSection() {
  return (
    <section id="projects" className="py-12">
      <h2>Mes Projets</h2>
      {/* Votre contenu */}
    </section>
  );
}

// src/components/index.ts
export { ProjectsSection } from "./sections/ProjectsSection";

// src/app/page.tsx
import { ProjectsSection } from "@/components";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />  {/* ← Votre nouvelle section */}
      {/* ... */}
    </main>
  );
}
```

### Supprimer une section

1. Supprimez l'import dans `src/app/page.tsx`
2. Supprimez le composant du JSX
3. (Optionnel) Supprimez le fichier de la section

## 🔗 Liens Sociaux

### Ajouter un réseau social

1. Ajoutez le lien dans `src/lib/site.config.ts`
2. Importez l'icône depuis `lucide-react`
3. Ajoutez-le dans `ContactSection` et `FooterSection`

Exemple :

```typescript
// Dans ContactSection.tsx
import { Twitter } from "lucide-react";

<a href={siteConfig.links.twitter}>
  <Twitter className="w-6 h-6" />
</a>
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Push votre code sur GitHub
2. Connectez votre repo sur [vercel.com](https://vercel.com)
3. Déployez automatiquement

### Variables d'environnement

Si besoin, créez `.env.local` :

```bash
NEXT_PUBLIC_SITE_URL=https://votre-site.com
```

## 📊 Analytics

Pour ajouter Google Analytics :

1. Installez le package :
```bash
pnpm add @next/third-parties
```

2. Ajoutez dans `src/app/layout.tsx` :
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

## 🎯 SEO

### Métadonnées

Les métadonnées sont dans `src/app/page.tsx`. Modifiez :

```typescript
export const metadata = {
  title: "Votre titre",
  description: "Votre description",
  keywords: ["mot-clé1", "mot-clé2"],
  // ...
};
```

### JSON-LD

Les données structurées sont générées dans `getJsonLd()` dans `src/app/page.tsx`.

## 📱 Responsive

Le design est mobile-first avec TailwindCSS :

- `sm:` : ≥ 640px
- `md:` : ≥ 768px
- `lg:` : ≥ 1024px
- `xl:` : ≥ 1280px

Exemple :
```typescript
className="text-base sm:text-lg md:text-xl"
```

## 🐛 Debugging

### Vérifier les erreurs
```bash
pnpm lint
```

### Mode développement
```bash
pnpm dev
```

### Build de production
```bash
pnpm build
```

---

Besoin d'aide ? Consultez la [documentation Next.js](https://nextjs.org/docs) ou contactez-moi !

