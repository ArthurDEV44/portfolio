# Story: Refonte ContactSection

## Informations

| Champ | Valeur |
|-------|--------|
| Epic | 05 - Sections Contenu |
| Priorité | Moyenne |
| Estimation | 2h |
| Dépendances | 01-fondations, 02-composants-ui |

## Description

Refondre la section Contact avec le design sombre, cartes glass pour chaque moyen de contact, et CTA proéminent.

## Critères d'Acceptation

- [ ] Background sombre cohérent
- [ ] Titre avec text gradient
- [ ] Cartes glass pour chaque contact (Email, LinkedIn, GitHub, Cal)
- [ ] Icônes avec glow effect au hover
- [ ] CTA principal "Réserver un appel" centré
- [ ] Animation au scroll
- [ ] Liens accessibles avec aria-labels

## Fichiers à Modifier

- `src/components/sections/ContactSection.tsx`

## Structure

```tsx
"use client";

import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site.config";
import { Mail, Linkedin, Github, Calendar, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const contactMethods = [
  {
    name: "Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    icon: Mail,
    color: "cyan",
  },
  {
    name: "LinkedIn",
    value: "Arthur Jean",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    color: "blue",
  },
  {
    name: "GitHub",
    value: "ArthurDEV44",
    href: siteConfig.links.github,
    icon: Github,
    color: "white",
  },
  {
    name: "Calendrier",
    value: "Réserver un créneau",
    href: siteConfig.links.cal,
    icon: Calendar,
    color: "emerald",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4">
            Travaillons{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Ensemble
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Une idée de projet ? Discutons-en et voyons comment je peux vous aider.
          </p>
        </div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {contactMethods.map((method) => (
            <ContactCard key={method.name} method={method} />
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="xl"
            className="group"
            render={
              <a
                href={siteConfig.links.cal}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Réserver un appel de 30 min
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-white/40 text-sm mt-4">
            Gratuit et sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

## Composant ContactCard

```tsx
interface ContactCardProps {
  method: {
    name: string;
    value: string;
    href: string;
    icon: React.ElementType;
    color: string;
  };
}

function ContactCard({ method }: ContactCardProps) {
  const Icon = method.icon;

  const colorClasses: Record<string, string> = {
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    white: "text-white bg-white/10 border-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
  };

  return (
    <motion.div variants={cardVariants}>
      <a
        href={method.href}
        target={method.href.startsWith("mailto") ? undefined : "_blank"}
        rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        aria-label={`Contacter via ${method.name}`}
        className="block group"
      >
        <GlassCard
          variant="interactive"
          className="p-6 text-center h-full"
        >
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${colorClasses[method.color]}`}
          >
            <Icon className="w-5 h-5" />
          </div>

          {/* Label */}
          <p className="text-sm text-white/50 mb-1">{method.name}</p>
          <p className="font-medium text-white group-hover:text-white transition-colors truncate">
            {method.value}
          </p>
        </GlassCard>
      </a>
    </motion.div>
  );
}
```

## Notes Techniques

- Les glow effects utilisent `box-shadow` avec rgba
- `truncate` sur la valeur pour éviter le débordement sur mobile
- Les liens externes ont `target="_blank"` et `rel="noopener noreferrer"`
- Le mailto n'a pas besoin de target/rel
