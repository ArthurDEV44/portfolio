# EPICS - Refonte Design Portfolio

Ce dossier contient les Epics et Stories pour la refonte du design du portfolio Arthur Jean, aligné sur le branding StriveX.

## Vue d'Ensemble

| Epic | Description | Stories | Priorité |
|------|-------------|---------|----------|
| 01-fondations | Thème, tokens, typographie | 3 | Haute |
| 02-composants-ui | Button, GlassCard, MeshGradient | 3 | Haute |
| 03-hero-section | Background, contenu, animations | 3 | Haute |
| 04-navigation | Navbar, menu mobile | 2 | Haute |
| 05-sections-contenu | Skills, Expertise, Contact, Footer | 4 | Haute |
| 06-polish | Animations, accessibilité, performance | 3 | Moyenne |

## Ordre d'Implémentation Recommandé

### Phase 1: Fondations (Semaine 1)
1. `01-fondations/01-migration-palette-sombre.md`
2. `01-fondations/02-configuration-typographie.md`
3. `01-fondations/03-creation-design-tokens.md`

### Phase 2: Composants UI (Semaine 1-2)
4. `02-composants-ui/01-refonte-button-component.md`
5. `02-composants-ui/02-creation-glass-card.md`
6. `02-composants-ui/03-creation-mesh-gradient.md`

### Phase 3: Hero & Navigation (Semaine 2)
7. `03-hero-section/01-implementation-hero-background.md`
8. `03-hero-section/02-refonte-hero-content.md`
9. `03-hero-section/03-animations-hero-framer.md`
10. `04-navigation/01-creation-navbar-section.md`
11. `04-navigation/02-menu-mobile.md`

### Phase 4: Sections Contenu (Semaine 3)
12. `05-sections-contenu/01-refonte-skills-section.md`
13. `05-sections-contenu/02-refonte-expertise-section.md`
14. `05-sections-contenu/03-refonte-contact-section.md`
15. `05-sections-contenu/04-refonte-footer-section.md`

### Phase 5: Polish (Semaine 4)
16. `06-polish/01-animations-finales.md`
17. `06-polish/02-accessibilite.md`
18. `06-polish/03-performance.md`

## Dépendances

```
01-fondations
    ↓
02-composants-ui
    ↓
┌───────────────┬───────────────┐
│               │               │
03-hero-section 04-navigation   │
│               │               │
└───────────────┴───────────────┘
                ↓
        05-sections-contenu
                ↓
            06-polish
```

## Nouvelles Dépendances à Installer

```bash
pnpm add motion
```

## Fichiers à Copier depuis StriveX

- `/home/sauron/code/strivex-next/src/lib/gradient.ts` → `src/lib/gradient.ts`

## Ressources

- **PRD**: `/PRD.md`
- **StriveX Codebase**: `/home/sauron/code/strivex-next/`
- **Design Tokens StriveX**: `/home/sauron/code/strivex-next/src/lib/design-tokens.ts`

## Critères de Succès

- [ ] Cohérence visuelle avec StriveX
- [ ] Score Lighthouse Performance > 90
- [ ] Score Lighthouse Accessibility > 95
- [ ] Responsive mobile-first
- [ ] Animations fluides 60fps
- [ ] Support `prefers-reduced-motion`
