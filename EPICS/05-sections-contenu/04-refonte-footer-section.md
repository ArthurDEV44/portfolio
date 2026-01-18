# Story: Refonte FooterSection

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 05 - Sections Contenu |
| Priorité | Moyenne |
| Estimation | 1.5h |
| Dépendances | 01-fondations |

## Description

Refondre le footer avec le design sombre, boutons sociaux glass circulaires, bouton scroll-to-top, et liens légaux.

## Critères d'Acceptation

- [ ] Background `bg-black` ou `bg-[#030610]`
- [ ] Logo/nom avec lien vers le haut
- [ ] Boutons sociaux circulaires glass
- [ ] Hover effects avec glow
- [ ] Bouton scroll-to-top
- [ ] Copyright avec année dynamique
- [ ] Liens légaux (optionnel si pages existantes)
- [ ] Layout responsive

## Fichiers à Modifier

- `src/components/sections/FooterSection.tsx`

## Structure

```tsx
"use client";

import { siteConfig } from "@/lib/site.config";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    href: `mailto:${siteConfig.links.email}`,
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
  },
];

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-display font-semibold text-white hover:text-white/80 transition-colors"
            >
              {siteConfig.name}
            </a>
            <p className="text-white/40 text-sm mt-1">
              Développeur Full Stack & Architecte IA
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <SocialButton key={link.name} link={link} />
            ))}

            {/* Separator */}
            <div className="w-px h-6 bg-white/10 mx-2" />

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {currentYear} {siteConfig.name}. Tous droits réservés.</p>

          {/* Legal links (optionnel) */}
          <nav className="flex gap-6">
            <a
              href="/mentions-legales"
              className="hover:text-white/60 transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="/confidentialite"
              className="hover:text-white/60 transition-colors"
            >
              Confidentialité
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
```

## Composant SocialButton

```tsx
interface SocialButtonProps {
  link: {
    name: string;
    href: string;
    icon: React.ElementType;
  };
}

function SocialButton({ link }: SocialButtonProps) {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      aria-label={link.name}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
```

## Styles des Boutons Sociaux

```css
/* Classes appliquées */
.social-button {
  @apply w-10 h-10 rounded-full;
  @apply bg-white/5 border border-white/10;
  @apply flex items-center justify-center;
  @apply text-white/60;
  @apply hover:text-white hover:bg-white/10 hover:border-white/30;
  @apply hover:shadow-[0_0_15px_rgba(255,255,255,0.1)];
  @apply transition-all duration-300;
}
```

## Notes Techniques

- `window.scrollTo` avec `behavior: "smooth"` pour le scroll fluide
- L'année est dynamique via `new Date().getFullYear()`
- Les liens légaux peuvent être conditionnels si les pages n'existent pas
- Le separator vertical (`w-px h-6`) sépare visuellement les groupes
