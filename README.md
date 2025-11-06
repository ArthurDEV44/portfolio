# Portfolio - Arthur Jean

Portfolio personnel d'Arthur Jean, développeur Full Stack & Architecte IA spécialisé en Next.js, Rust, Electron et systèmes d'agents IA.

## 🚀 Technologies

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS 4
- **Fonts**: PP Mori (custom font)
- **Icons**: Lucide React
- **TypeScript**: Version 5
- **Linter**: Biome

## 📋 Structure du projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal avec fonts
│   │   ├── page.tsx            # Page d'accueil avec SEO et JSON-LD
│   │   └── globals.css         # Styles globaux et animations
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Hero avec description
│   │   │   ├── SkillsSection.tsx     # Stack technique
│   │   │   ├── ExpertiseSection.tsx  # Expertise IA
│   │   │   ├── ContactSection.tsx    # Contact
│   │   │   └── FooterSection.tsx     # Footer
│   │   ├── ui/
│   │   │   └── button.tsx      # Composant Button réutilisable
│   │   └── index.ts            # Export centralisé
│   ├── hooks/
│   │   └── use-intersection-observer.ts  # Hook pour animations scroll
│   └── lib/
│       ├── site.config.ts      # Configuration du site
│       └── utils.ts            # Utilitaires (cn)
└── public/
    └── fonts/                  # Fonts PP Mori
```

## 🎨 Branding

Le portfolio reprend le branding de StriveX avec :
- Gradient orange signature (du blanc au #B53800)
- Police PP Mori (Extralight, Regular, SemiBold)
- Design minimaliste et épuré
- Animations au scroll avec intersection observer
- Effet liquid glass dans le hero

## 📦 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build de production
pnpm build

# Démarrer le serveur de production
pnpm start
```

## 🔧 Configuration

Personnalisez votre portfolio en modifiant `src/lib/site.config.ts` :

```typescript
export const siteConfig = {
  name: "Votre Nom",
  title: "Votre Titre",
  description: "Votre Description",
  url: "https://votre-site.com",
  links: {
    email: "votre@email.com",
    linkedin: "https://linkedin.com/in/votre-profil",
    github: "https://github.com/votre-profil",
    cal: "https://cal.com/votre-profil",
  },
};
```

## 🎯 Fonctionnalités

- ✅ ISR avec revalidation toutes les 24h
- ✅ Métadonnées SEO complètes (Open Graph, Twitter)
- ✅ Données structurées JSON-LD (Person, WebSite, ProfessionalService)
- ✅ Design responsive (mobile-first)
- ✅ Animations au scroll avec Intersection Observer
- ✅ Accessibilité (ARIA labels, semantic HTML)
- ✅ Performance optimisée
- ✅ Dark mode friendly

## 📱 Sections

1. **Hero**: Présentation avec description professionnelle et CTA
2. **Skills**: Stack technique (principale, secondaire, outils)
3. **Expertise**: Compétences IA et automatisation
4. **Contact**: Moyens de contact (email, LinkedIn, calendrier, GitHub)
5. **Footer**: Liens et informations

## 🎨 Personnalisation

### Modifier les compétences

Éditez `src/lib/site.config.ts` et modifiez les tableaux :
- `mainStack`: Stack principale
- `secondaryStack`: Stack secondaire
- `devTools`: Outils de développement
- `aiSkills`: Compétences IA
- `workflowSkills`: Compétences workflow

### Modifier le style

Les styles principaux se trouvent dans `src/app/globals.css` :
- Animations
- Couleurs
- Fonts
- Classes utilitaires

### Ajouter une section

1. Créer un nouveau composant dans `src/components/sections/`
2. L'exporter dans `src/components/index.ts`
3. L'importer et l'utiliser dans `src/app/page.tsx`

## 📄 Licence

Ce projet est privé et personnel.

## 👤 Auteur

**Arthur Jean**
- LinkedIn: [Arthur Jean](https://www.linkedin.com/in/arthur-jean-401b56239/)
- Email: contact@arthurjean.dev
- Cal.com: [Réserver un appel](https://cal.com/arthurjean/30min)

---

Développé avec ❤️ en Next.js et TailwindCSS
