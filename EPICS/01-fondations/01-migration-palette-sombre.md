# Story: Migration Palette Sombre

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 01 - Fondations |
| Priorité | Haute |
| Estimation | 2h |
| Dépendances | Aucune |

## Description

Migrer le thème du portfolio d'un thème clair (fond blanc, gradient orange) vers un thème sombre premium aligné avec le branding StriveX.

## Critères d'Acceptation

- [ ] Variables CSS `:root` mises à jour avec la nouvelle palette
- [ ] Suppression du mode `.dark` (dark-only désormais)
- [ ] Fond principal: `#030610`
- [ ] Texte principal: `#F8FAFC`
- [ ] Accent cyan: `#38BDF8`
- [ ] Surface/cards: `#0F1525`
- [ ] Texte muted: `#94A3B8`
- [ ] Bordures: `rgba(255,255,255,0.08)`
- [ ] Body applique `bg-background text-foreground`

## Fichiers à Modifier

- `src/app/globals.css`

## Tokens à Définir

```css
:root {
  --background: #030610;
  --foreground: #F8FAFC;
  --primary: #F8FAFC;
  --primary-foreground: #030610;
  --accent: #38BDF8;
  --accent-foreground: #030610;
  --surface: #0F1525;
  --card: #0F1525;
  --card-foreground: #F8FAFC;
  --secondary: #1E293B;
  --muted: #1E293B;
  --muted-foreground: #94A3B8;
  --destructive: #EF4444;
  --border: rgba(255, 255, 255, 0.08);
  --input: rgba(255, 255, 255, 0.12);
  --ring: #38BDF8;
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.08);
}
```

## Notes Techniques

- Utiliser format hex pour les couleurs opaques
- Utiliser rgba pour les couleurs avec transparence
- Supprimer les variables oklch au profit de hex pour simplicité
