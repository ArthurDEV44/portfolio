import {
  aiSkills,
  devTools,
  faqItems,
  mainStack,
  siteConfig,
} from "./site.config";

export function buildHomepageMarkdown(): string {
  const stackList = mainStack
    .map((s) => `- **${s.name}** (${s.category})`)
    .join("\n");
  const toolsList = devTools
    .map((t) => `- **${t.name}** (${t.category})`)
    .join("\n");
  const aiList = aiSkills
    .map((s) => `- **${s.name}** — ${s.description}`)
    .join("\n");
  const faqList = faqItems
    .map((f) => `### ${f.question}\n\n${f.answer}`)
    .join("\n\n");

  return `# ${siteConfig.name}

> ${siteConfig.description}

AI Builder & Architecte Produit basé en France. Je construis des produits tech de bout en bout : SaaS, dev tools et systèmes d'agents IA.

## Projets

- [OpenbookLM](https://www.openbooklm.fr) — SaaS de recherche intelligente dans les documents, propulsée par du RAG avancé et des agents IA.
- [Rust Doctor](https://rust-doctor.vercel.app) — Outil d'analyse de santé pour projets Rust : CLI, serveur MCP et skill Claude Code.
- [Contributions Open Source](https://github.com/ArthurDEV44) — Contributeur actif sur Zed et d'autres projets open source.

## Services

- Développement Web (Next.js, TypeScript, TailwindCSS)
- Développement d'outils CLI et desktop (Rust, Tauri)
- Systèmes d'agents IA (orchestration multi-agents, RAG, MCP)
- Développement SaaS end-to-end
- Consulting IA et intégration de workflows AI-native

## Stack technique

${stackList}

## Outils & plateformes

${toolsList}

## Compétences IA

${aiList}

## FAQ

${faqList}

## Contact

- Site : ${siteConfig.url}
- Email : ${siteConfig.links.email}
- LinkedIn : ${siteConfig.links.linkedin}
- GitHub : ${siteConfig.links.github}
- X : ${siteConfig.links.x}
- Prendre RDV : ${siteConfig.links.cal}
`;
}

export function estimateTokens(content: string): number {
  return Math.ceil(content.length / 4);
}
