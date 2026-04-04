import { siteConfig } from "@/lib/site.config";

export function GET() {
  const content = `# ${siteConfig.name}

> ${siteConfig.description}

AI Builder & Architecte Produit basé en France. Je construis des produits tech de bout en bout : SaaS, dev tools et systèmes d'agents IA.

## Projets

- [OpenbookLM](https://www.openbooklm.fr): SaaS de recherche intelligente dans les documents, propulsée par du RAG avancé et des agents IA
- [Rust Doctor](https://rust-doctor.vercel.app): Outil d'analyse de santé pour projets Rust — CLI, serveur MCP et skill Claude Code
- [Contributions Open Source](https://github.com/ArthurDEV44): Contributeur actif sur Zed et d'autres projets open source

## Services

- Développement Web (Next.js, TypeScript, TailwindCSS)
- Développement d'outils CLI et desktop (Rust, Tauri)
- Systèmes d'agents IA (orchestration multi-agents, RAG, MCP)
- Développement SaaS end-to-end
- Consulting IA et intégration de workflows AI-native

## Contact

- Site : ${siteConfig.url}
- Email : ${siteConfig.links.email}
- LinkedIn : ${siteConfig.links.linkedin}
- GitHub : ${siteConfig.links.github}
- X : ${siteConfig.links.x}
- Prendre RDV : ${siteConfig.links.cal}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
