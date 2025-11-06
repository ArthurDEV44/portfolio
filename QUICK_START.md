# Quick Start Guide 🚀

## 🎉 Votre portfolio est prêt !

Voici ce qui a été créé pour vous :

### ✅ Structure complète
- ✨ Hero Section avec votre description LinkedIn
- 💻 Skills Section avec vos stacks (principale, secondaire, outils)
- 🤖 Expertise Section pour l'IA et les workflows
- 📧 Contact Section avec tous vos liens
- 🦶 Footer Section avec navigation et réseaux sociaux

### ✅ Fonctionnalités avancées
- 🎨 Design reprenant le branding StriveX (gradient orange, police PP Mori)
- 📱 100% Responsive (mobile-first)
- ♿ Accessible (ARIA labels, semantic HTML)
- 🔍 SEO optimisé (métadonnées, Open Graph, Twitter Cards, JSON-LD)
- ⚡ Performance (ISR avec revalidation 24h, optimisations Next.js)
- ✨ Animations au scroll (Intersection Observer)

## 🏃 Lancer le projet

### 1. Installer les dépendances (si pas déjà fait)
```bash
cd C:\dev\portfolio
pnpm install
```

### 2. Lancer en mode développement
```bash
pnpm dev
```

Ouvrez http://localhost:3000 dans votre navigateur.

### 3. Build de production
```bash
pnpm build
pnpm start
```

## 📝 Personnalisation rapide

### Changer vos informations
Ouvrez `src/lib/site.config.ts` et modifiez :
- Votre nom
- Votre email
- Vos liens (LinkedIn, GitHub, Cal.com)
- Votre URL de site

### Modifier la description Hero
Ouvrez `src/components/sections/HeroSection.tsx` et personnalisez :
- Le titre principal
- Les paragraphes de description
- Les textes des boutons

### Ajouter/retirer des compétences
Ouvrez `src/lib/site.config.ts` et modifiez :
- `mainStack` : Stack principale
- `secondaryStack` : Stack secondaire
- `devTools` : Outils de développement
- `aiSkills` : Compétences IA
- `workflowSkills` : Compétences workflow

## 🎨 Personnalisation avancée

Consultez `CUSTOMIZATION.md` pour :
- Changer les couleurs
- Modifier les fonts
- Ajouter des sections
- Personnaliser le design
- Ajouter des analytics

## 🚀 Déploiement

### Option 1 : Vercel (Recommandé)
1. Push votre code sur GitHub
2. Connectez votre repo sur https://vercel.com
3. Déployez en 1 clic !

### Option 2 : Autre plateforme
```bash
pnpm build
# Déployez le dossier .next
```

## 📊 Checklist avant déploiement

- [ ] Personnalisé `src/lib/site.config.ts` avec vos informations
- [ ] Modifié la description dans `HeroSection.tsx`
- [ ] Ajusté vos compétences dans `site.config.ts`
- [ ] Créé une image Open Graph (1200x630px) → `public/og-image.png`
- [ ] Remplacé le favicon → `src/app/favicon.ico`
- [ ] Testé sur mobile et desktop
- [ ] Vérifié que tous les liens fonctionnent
- [ ] Lancé `pnpm build` sans erreur

## 🐛 Problèmes courants

### Le serveur ne démarre pas
```bash
# Nettoyez le cache
rm -rf .next node_modules
pnpm install
pnpm dev
```

### Erreurs de compilation
```bash
# Vérifiez les erreurs de linting
pnpm lint
```

### Les fonts ne s'affichent pas
Vérifiez que les fichiers `.otf` sont bien dans `public/fonts/`

## 📚 Documentation

- 📖 [README.md](./README.md) : Vue d'ensemble du projet
- 🎨 [CUSTOMIZATION.md](./CUSTOMIZATION.md) : Guide de personnalisation détaillé
- 📘 [Next.js Docs](https://nextjs.org/docs) : Documentation officielle

## 💡 Astuces

1. **Mode développement** : Les changements sont visibles en temps réel
2. **Build optimisé** : Utilisez `pnpm build` pour tester les performances
3. **Responsive** : Testez sur différentes tailles d'écran (F12 dans le navigateur)
4. **Accessibilité** : Naviguez avec Tab pour tester la navigation au clavier

## 📞 Besoin d'aide ?

Si vous rencontrez des problèmes :
1. Consultez les docs ci-dessus
2. Vérifiez la console du navigateur (F12)
3. Vérifiez les logs du terminal
4. Relisez les guides de personnalisation

---

**Prêt à impressionner le monde ? Let's go! 🚀**

Bon développement !

