# Story: Refonte Button Component

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 02 - Composants UI |
| Priorité | Haute |
| Estimation | 2h |
| Dépendances | 01-fondations |

## Description

Refondre le composant Button avec les nouvelles variantes alignées sur le design StriveX : boutons blancs solides, glass effect, ghost, et outline.

## Critères d'Acceptation

- [ ] Variante `default` : fond blanc, texte noir, hover scale
- [ ] Variante `glass` : effet ice/liquid glass avec shine
- [ ] Variante `ghost` : transparent, hover bg-white/10
- [ ] Variante `outline` : bordure white/20, hover white/40
- [ ] Variante `destructive` : fond rouge
- [ ] Tailles: `sm`, `default`, `lg`, `xl`, `icon`
- [ ] Animation hover `scale-[1.02]` sur variante default
- [ ] Support icône avec `group-hover:translate-x-0.5`
- [ ] Focus ring cyan

## Fichiers à Modifier

- `src/components/ui/button.tsx`

## Variantes CVA

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-slate-900 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]",
        glass:
          "bg-white/[0.03] backdrop-blur-md border border-white/20 text-white hover:bg-white/[0.08] hover:border-white/30 relative overflow-hidden",
        ghost:
          "text-white/80 hover:text-white hover:bg-white/10",
        outline:
          "border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90",
        link:
          "text-cyan-400 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4",
        lg: "h-11 px-5",
        xl: "h-12 px-6 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

## Effet Glass (Shine)

```tsx
{variant === "glass" && (
  <>
    {/* Top shine line */}
    <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    {/* Left rim light */}
    <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/30 via-transparent to-transparent" />
  </>
)}
```

## Notes Techniques

- Conserver la compatibilité avec Base UI `render` prop
- Ajouter `group` class pour animations d'icônes enfants
- Tester sur fond sombre pour vérifier les contrastes
