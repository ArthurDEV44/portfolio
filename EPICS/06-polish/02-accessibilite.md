# Story: Accessibilité

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 06 - Polish |
| Priorité | Haute |
| Estimation | 2h |
| Dépendances | Toutes les sections |

## Description

S'assurer que le portfolio respecte les standards d'accessibilité WCAG 2.1 AA : contraste, navigation clavier, lecteurs d'écran, et focus management.

## Critères d'Acceptation

- [ ] Contraste texte/fond conforme WCAG AA (4.5:1 minimum)
- [ ] Navigation clavier complète (Tab, Enter, Escape)
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Skip link vers le contenu principal
- [ ] Aria labels sur les éléments non-textuels
- [ ] Structure heading logique (h1 → h2 → h3)
- [ ] Alt text sur les images
- [ ] Support lecteur d'écran (NVDA, VoiceOver)

## Vérification des Contrastes

### Palette Actuelle vs WCAG AA

| Combinaison | Ratio | Status |
|-------------|-------|--------|
| `#F8FAFC` sur `#030610` | 18.1:1 | ✅ AAA |
| `#94A3B8` sur `#030610` | 7.2:1 | ✅ AA |
| `#38BDF8` sur `#030610` | 8.9:1 | ✅ AA |
| `#22d3ee` sur `#030610` | 10.5:1 | ✅ AAA |
| `rgba(255,255,255,0.5)` sur `#030610` | 8.5:1 | ✅ AA |
| `rgba(255,255,255,0.4)` sur `#030610` | 6.8:1 | ✅ AA |

### Ajustements Nécessaires

```css
/* Texte muted - s'assurer d'au moins 4.5:1 */
.text-white\/50 → .text-white\/60 /* Si contraste insuffisant */
.text-white\/40 → .text-white\/50 /* Pour les labels */
```

## Skip Link

```tsx
// src/app/layout.tsx
<body>
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:outline-none"
  >
    Aller au contenu principal
  </a>

  <NavbarSection />

  <main id="main-content" tabIndex={-1}>
    {children}
  </main>
</body>
```

## Focus Styles

```css
/* src/app/globals.css */

/* Focus visible global */
:focus-visible {
  outline: 2px solid #38BDF8;
  outline-offset: 2px;
}

/* Focus ring sur fond sombre */
.focus-ring {
  @apply focus-visible:ring-2 focus-visible:ring-cyan-500/50;
  @apply focus-visible:ring-offset-2 focus-visible:ring-offset-black;
  @apply focus-visible:outline-none;
}

/* Supprimer outline natif si custom */
button:focus,
a:focus,
input:focus {
  outline: none;
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
  @apply ring-2 ring-cyan-500/50 ring-offset-2 ring-offset-black;
}
```

## Structure des Headings

```tsx
// Hiérarchie correcte
<h1>Arthur Jean - Développeur Full Stack</h1> // Hero - 1 seul h1

<section>
  <h2>Stack Technique</h2>
  <h3>Stack Principale</h3>
  <h3>Stack Secondaire</h3>
</section>

<section>
  <h2>Expertise IA</h2>
</section>

<section>
  <h2>Contact</h2>
</section>
```

## Aria Labels

```tsx
// Navigation
<nav aria-label="Navigation principale">
  {/* links */}
</nav>

// Boutons icône
<button aria-label="Ouvrir le menu">
  <Menu />
</button>

// Liens sociaux
<a href="..." aria-label="Profil LinkedIn">
  <Linkedin />
</a>

// Sections
<section id="skills" aria-labelledby="skills-heading">
  <h2 id="skills-heading">Stack Technique</h2>
</section>
```

## Images et Icônes

```tsx
// Images décoratives
<img src="..." alt="" role="presentation" />

// Images informatives
<img src="/profile.jpg" alt="Photo de Arthur Jean" />

// Icônes décoratives (avec texte)
<button>
  <Mail aria-hidden="true" />
  <span>Email</span>
</button>

// Icônes seules
<button aria-label="Envoyer un email">
  <Mail aria-hidden="true" />
</button>
```

## Navigation Clavier

### Ordre de Tab Logique

```tsx
// S'assurer que l'ordre est : navbar → hero CTAs → sections → footer
// Éviter tabIndex positifs, utiliser l'ordre DOM naturel
```

### Gestion du Menu Mobile

```tsx
// Focus trap dans le menu ouvert
// Escape ferme le menu
// Focus retourne au bouton d'ouverture
```

### Interactions

| Élément | Tab | Enter/Space | Escape |
|---------|-----|-------------|--------|
| Lien | Focus | Navigate | - |
| Bouton | Focus | Activate | - |
| Menu mobile | - | Toggle | Close |
| Card lien | Focus | Navigate | - |

## Tests Recommandés

### Outils Automatiques

- [ ] axe DevTools (extension Chrome)
- [ ] Lighthouse Accessibility audit
- [ ] WAVE Web Accessibility Evaluator

### Tests Manuels

- [ ] Navigation complète avec Tab uniquement
- [ ] Test avec lecteur d'écran (VoiceOver/NVDA)
- [ ] Test avec zoom 200%
- [ ] Test avec high contrast mode
- [ ] Test `prefers-reduced-motion`

## Checklist Finale

- [ ] Score Lighthouse Accessibility > 95
- [ ] Aucune erreur axe DevTools
- [ ] Navigation Tab fluide
- [ ] Focus visible partout
- [ ] Headings logiques
- [ ] Alt text complets
- [ ] Aria labels sur icônes
- [ ] Skip link fonctionnel

## Notes Techniques

- Les couleurs avec opacité (rgba) doivent être testées sur leur fond réel
- `sr-only` cache visuellement mais reste accessible aux lecteurs d'écran
- `aria-hidden="true"` masque l'élément des lecteurs d'écran
- `role="presentation"` indique un élément purement décoratif
