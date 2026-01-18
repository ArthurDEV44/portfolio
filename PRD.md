# PRD - Refonte Design Portfolio Arthur Jean

## 1. Contexte et Objectif

### 1.1 Situation Actuelle

Le portfolio actuel utilise un design avec :
- **Thème clair** avec gradient orange (blanc → #B53800)
- **Font PP Mori** en tant que police unique
- **Animations CSS simples** (fadeInUp, fadeInScale)
- **Design fonctionnel** mais manquant de sophistication visuelle
- **Pas d'effets visuels avancés** (glass morphism, mesh gradient)

### 1.2 Objectif

Aligner le design du portfolio personnel avec le branding premium de **StriveX** pour :
- Créer une **cohérence visuelle** entre la marque StriveX et le portfolio du fondateur
- Élever la **perception de qualité** et de sophistication technique
- Démontrer les compétences en **design system moderne** (thème sombre, glass morphism, animations fluides)
- Améliorer l'**expérience utilisateur** avec des micro-interactions et transitions fluides

---

## 2. Design System Cible (Inspiré StriveX)

### 2.1 Palette de Couleurs

| Token | Valeur Actuelle | Valeur Cible | Usage |
|-------|-----------------|--------------|-------|
| `--background` | `oklch(1 0 0)` (blanc) | `#030610` | Fond principal |
| `--foreground` | `oklch(0.145 0 0)` (noir) | `#F8FAFC` | Texte principal |
| `--primary` | noir | `#F8FAFC` | Éléments primaires |
| `--accent` | - | `#38BDF8` | Accent cyan |
| `--surface` | - | `#0F1525` | Cartes, surfaces |
| `--muted-foreground` | - | `#94A3B8` | Texte secondaire |
| `--glass-bg` | - | `rgba(255,255,255,0.03)` | Glass morphism |
| `--glass-border` | - | `rgba(255,255,255,0.08)` | Bordures glass |

**Gradients Hero (Mesh Gradient):**
```
#020617 → #064e3b → #0d9488 → #22d3ee
(Slate 950 → Emerald 900 → Teal 600 → Cyan 400)
```

### 2.2 Typographie

| Usage | Font Actuelle | Font Cible |
|-------|---------------|------------|
| Display/Titres | PP Mori | Plus Jakarta Sans (600, 700) |
| Corps de texte | PP Mori | Inter (400, 500) |
| Élégant/Quotes | - | Cormorant Garamond (300-700) |
| Monospace | - | Geist Mono |

**Échelle typographique:**
- Hero: `5.5rem` (88px)
- H1: `3rem - 4.5rem` responsive
- H2: `2.25rem - 3rem` responsive
- Body: `1rem - 1.125rem`
- Small: `0.875rem`

### 2.3 Effets Visuels

#### Glass Morphism
```css
/* Card glass */
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.1);
box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
```

#### Glow Effects
```css
/* Cyan glow */
box-shadow: 0 0 15px rgba(34, 211, 238, 0.3);

/* White glow */
box-shadow: 0 0 40px -10px rgba(255, 255, 255, 0.3);
```

#### Text Gradient
```css
background: linear-gradient(90deg, #a5f3fc 0%, #ffffff 50%, #ffffff 100%);
background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## 3. Composants à Refondre

### 3.1 Hero Section

**Actuel:** Gradient orange statique avec striations

**Cible:**
- [ ] Mesh Gradient WebGL animé (lib `/src/lib/gradient.ts` de StriveX)
- [ ] Fond noir avec teintes emerald/teal/cyan
- [ ] Vignette radiale pour profondeur
- [ ] Text gradient sur mots-clés ("solutions intelligentes", "IA")
- [ ] CTAs avec effet glass (bouton secondaire) et blanc solide (primaire)
- [ ] Animation staggered à l'entrée (Framer Motion)

**Structure:**
```jsx
<section className="relative min-h-dvh bg-[#050505]">
  <MeshGradient colors={[...]} />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
  <div className="relative z-10 text-center">
    <h1 className="text-8xl font-display">...</h1>
    <div className="flex gap-4">
      <PrimaryCTA />
      <SecondaryCTA variant="glass" />
    </div>
  </div>
</section>
```

### 3.2 Navbar (Nouveau)

**Actuel:** Aucune navbar fixe

**Cible:**
- [ ] Navbar fixe en haut
- [ ] Transparent au départ, `bg-black/80 backdrop-blur-xl` au scroll
- [ ] Logo StriveX (favicon) + nom
- [ ] Navigation avec hover pill animé (Framer Motion `layoutId`)
- [ ] CTA "Prendre RDV" en blanc
- [ ] Menu mobile avec drawer animé

### 3.3 Skills Section (Bento Grid)

**Actuel:** Grille simple de tags/badges

**Cible:**
- [ ] Bento Grid avec cartes de tailles variées
- [ ] Cartes glass avec glow line en haut
- [ ] Icônes dans conteneurs `bg-black/50 border-white/10`
- [ ] Hover effects avec scale et border-white/30
- [ ] Grid responsive: 1 col mobile, 2 cols tablette, 3 cols desktop

**Structure carte:**
```jsx
<article className="rounded-2xl bg-black/40 border border-white/[0.1] p-8 relative">
  {/* Glow line top */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px
    bg-gradient-to-r from-transparent via-white/40 to-transparent" />

  <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/[0.1]">
    <Icon />
  </div>
  <h3 className="text-2xl font-display text-white">{name}</h3>
  <p className="text-white/50">{description}</p>
</article>
```

### 3.4 Expertise Section (AI Skills)

**Actuel:** Liste de compétences IA

**Cible:**
- [ ] Cards glass avec effet hover
- [ ] Grid 2 colonnes
- [ ] Badges/tags avec fond `bg-emerald-500/10 text-emerald-400`
- [ ] Animation staggered à l'apparition

### 3.5 Contact Section

**Actuel:** Liens de contact basiques

**Cible:**
- [ ] Titre avec text gradient
- [ ] Cards glass pour chaque moyen de contact
- [ ] Icônes avec glow effect au hover
- [ ] CTA principal "Prendre RDV" proéminent

### 3.6 Footer Section

**Actuel:** Footer simple

**Cible:**
- [ ] Background `bg-black`
- [ ] Boutons sociaux circulaires glass (`bg-white/5 border-white/10`)
- [ ] Hover: `bg-white/10 border-white/30`
- [ ] Bouton scroll-to-top
- [ ] Links légaux (Mentions, Confidentialité)

### 3.7 Button Component

**Actuel:** Button avec CVA basique

**Cible:**
- [ ] Variante `default`: `bg-white text-slate-900 hover:bg-white/90`
- [ ] Variante `glass`: effet ice/liquid glass avec shine
- [ ] Variante `ghost`: `hover:bg-white/10`
- [ ] Variante `outline`: `border-white/20 hover:border-white/40`
- [ ] Animations: `hover:scale-[1.02]` sur primaire
- [ ] Arrow icon avec `group-hover:translate-x-0.5`

---

## 4. Nouvelles Dépendances

| Package | Usage | Priorité |
|---------|-------|----------|
| `motion` (Framer Motion) | Animations fluides, layoutId, stagger | Haute |
| `next/font/google` | Inter, Plus Jakarta Sans, Cormorant | Haute |
| - | Mesh Gradient lib (copier depuis StriveX) | Haute |

---

## 5. Fichiers à Créer/Modifier

### 5.1 Nouveaux Fichiers

| Fichier | Description |
|---------|-------------|
| `src/lib/gradient.ts` | Mesh Gradient WebGL (copie StriveX) |
| `src/components/ui/glass-card.tsx` | Composant GlassCard |
| `src/components/ui/mesh-gradient.tsx` | Wrapper React pour gradient |
| `src/components/sections/NavbarSection.tsx` | Nouvelle navbar |
| `src/app/styles/theme.css` | Tokens de design centralisés |
| `src/lib/design-tokens.ts` | Tokens exportés (spacing, colors, etc.) |

### 5.2 Fichiers à Modifier

| Fichier | Modifications |
|---------|---------------|
| `src/app/globals.css` | Nouvelles variables CSS, thème sombre |
| `src/app/layout.tsx` | Nouvelles fonts Google, classes body |
| `src/app/page.tsx` | Import NavbarSection |
| `src/components/sections/HeroSection.tsx` | Refonte complète |
| `src/components/sections/SkillsSection.tsx` | Bento grid |
| `src/components/sections/ExpertiseSection.tsx` | Cards glass |
| `src/components/sections/ContactSection.tsx` | Design sombre |
| `src/components/sections/FooterSection.tsx` | Boutons sociaux glass |
| `src/components/ui/button.tsx` | Nouvelles variantes |

---

## 6. Plan d'Implémentation

### Phase 1: Fondations (Priorité Haute)

1. **Thème sombre et tokens**
   - Migrer `globals.css` vers palette sombre
   - Créer `theme.css` avec tous les tokens
   - Créer `design-tokens.ts`

2. **Typographie**
   - Configurer fonts Google dans `layout.tsx`
   - Définir stack typographique

3. **Composants de base**
   - Refondre `Button` avec variantes glass
   - Créer `GlassCard`

### Phase 2: Hero & Navigation

4. **Mesh Gradient**
   - Copier `gradient.ts` de StriveX
   - Créer `MeshGradient` component

5. **Hero Section**
   - Implémenter nouveau design
   - Ajouter animations Framer Motion

6. **Navbar**
   - Créer `NavbarSection`
   - Scroll detection
   - Mobile menu

### Phase 3: Sections Contenu

7. **Skills Section**
   - Implémenter Bento Grid
   - Cards avec glow effects

8. **Expertise Section**
   - Cards glass
   - Animations staggered

9. **Contact & Footer**
   - Refonte design sombre
   - Boutons sociaux glass

### Phase 4: Polish

10. **Animations finales**
    - Scroll animations
    - Micro-interactions
    - Reduced motion support

11. **Tests et optimisation**
    - Performance
    - Responsive
    - Accessibilité

---

## 7. Critères de Succès

### 7.1 Visuels
- [ ] Cohérence avec le branding StriveX
- [ ] Thème sombre premium appliqué
- [ ] Glass morphism visible et élégant
- [ ] Mesh gradient animé dans le hero
- [ ] Text gradients sur les titres clés

### 7.2 Techniques
- [ ] Score Lighthouse Performance > 90
- [ ] Score Lighthouse Accessibility > 95
- [ ] Animations fluides (60fps)
- [ ] Support `prefers-reduced-motion`
- [ ] Responsive mobile-first

### 7.3 UX
- [ ] Navigation claire et accessible
- [ ] CTAs visibles et attractifs
- [ ] Temps de chargement < 3s
- [ ] Interactions feedback immédiats

---

## 8. Risques et Mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Mesh Gradient performance | Moyen | Lazy loading, fallback statique |
| Perte de lisibilité (contraste) | Haut | Tests WCAG AA, tokens muted |
| Complexité animations | Moyen | Incremental, test sur vrais devices |
| Bundle size (Framer Motion) | Faible | Tree shaking, dynamic imports |

---

## 9. Questions Ouvertes

1. **Conserver PP Mori ?** Garder en complément ou remplacer totalement ?
2. **Logo personnel ?** Utiliser favicon StriveX ou créer un logo "AJ" ?
3. **Sections additionnelles ?** Ajouter Projets/Portfolio avec screenshots ?
4. **Mode clair ?** Supporter un toggle light/dark ou dark-only ?

---

## 10. Références

- **StriveX Codebase**: `/home/sauron/code/strivex-next/`
- **Design tokens StriveX**: `/src/lib/design-tokens.ts`
- **Theme CSS StriveX**: `/src/app/styles/theme.css`
- **Mesh Gradient**: `/src/lib/gradient.ts`
- **Glass Card**: `/src/components/ui/glass-card.tsx`

---

*Document créé le 18 janvier 2026*
*Version: 1.0*
