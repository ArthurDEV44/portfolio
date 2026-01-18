# Story: Menu Mobile

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 04 - Navigation |
| Priorité | Haute |
| Estimation | 2.5h |
| Dépendances | 04-navigation/01-creation-navbar-section |

## Description

Créer le menu mobile avec drawer animé, backdrop, focus trap, et navigation accessible.

## Critères d'Acceptation

- [ ] Bouton hamburger/close animé
- [ ] Drawer slide-in depuis la droite
- [ ] Backdrop semi-transparent avec blur
- [ ] Focus trap dans le menu ouvert
- [ ] Fermeture au clic backdrop
- [ ] Fermeture au clic lien
- [ ] Fermeture avec touche Escape
- [ ] Liens de navigation avec animation stagger
- [ ] CTA "Prendre RDV" en bas du menu
- [ ] Accessibilité: aria-expanded, aria-controls

## Fichiers à Modifier

- `src/components/sections/NavbarSection.tsx`

## Composant MobileMenuButton

```tsx
import { Menu, X } from "lucide-react";

function MobileMenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 text-white/80 hover:text-white"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
    >
      <motion.div
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.div>
    </button>
  );
}
```

## Composant MobileMenu

```tsx
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05 },
  }),
};

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Focus trap
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      firstElement?.focus();
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
          />

          {/* Drawer */}
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0A0A0A] border-l border-white/10 z-[70] md:hidden"
          >
            <div className="flex flex-col h-full p-6 pt-20">
              {/* Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    onClick={onClose}
                    className="px-4 py-3 text-lg text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto">
                <Button size="lg" className="w-full" asChild>
                  <a
                    href={siteConfig.links.cal}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prendre RDV
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

## État dans NavbarSection

```tsx
export function NavbarSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav>
        {/* ... */}
        <MobileMenuButton
          isOpen={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
```

## Notes Techniques

- Le backdrop doit avoir `z-60`, le menu `z-70`
- Bloquer le scroll du body quand le menu est ouvert
- Le focus trap améliore l'accessibilité clavier
- AnimatePresence permet l'animation de sortie
