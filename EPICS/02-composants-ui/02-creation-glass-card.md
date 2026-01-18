# Story: Création GlassCard Component

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 02 - Composants UI |
| Priorité | Haute |
| Estimation | 1.5h |
| Dépendances | 01-fondations |

## Description

Créer un composant GlassCard réutilisable avec effet glass morphism, glow line, et variantes pour différents usages.

## Critères d'Acceptation

- [ ] Composant `GlassCard` créé
- [ ] Variante `default` : glass subtil
- [ ] Variante `card` : glass plus prononcé avec blur-2xl
- [ ] Variante `interactive` : hover effects
- [ ] Option `glowLine` : ligne lumineuse en haut
- [ ] Option `rounded` : sm, md, lg, xl, 2xl
- [ ] Support className pour customisation
- [ ] Rim light optionnel (highlight top)

## Fichiers à Créer

- `src/components/ui/glass-card.tsx`

## Interface

```typescript
interface GlassCardProps {
  children: React.ReactNode;
  variant?: "default" | "card" | "interactive";
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl";
  glowLine?: boolean;
  className?: string;
  as?: React.ElementType;
}
```

## Implémentation

```tsx
import { cn } from "@/lib/utils";

const variantStyles = {
  default: "bg-white/[0.02] backdrop-blur-lg border-white/[0.08]",
  card: "bg-white/[0.03] backdrop-blur-2xl border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
  interactive: "bg-white/[0.03] backdrop-blur-2xl border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300",
};

const roundedStyles = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

export function GlassCard({
  children,
  variant = "default",
  rounded = "2xl",
  glowLine = false,
  className,
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "relative border",
        variantStyles[variant],
        roundedStyles[rounded],
        className
      )}
    >
      {/* Glow line */}
      {glowLine && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      )}

      {/* Rim light (top highlight) */}
      {variant === "card" && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-2xl" />
      )}

      {children}
    </Component>
  );
}
```

## Export

Ajouter dans `src/components/index.ts`:
```typescript
export { GlassCard } from "./ui/glass-card";
```

## Notes Techniques

- Utiliser `as` prop pour permettre semantic HTML (article, section, etc.)
- Le glow line doit être positionné absolute avec overflow visible parent
- Tester sur différents fonds pour vérifier l'effet glass
