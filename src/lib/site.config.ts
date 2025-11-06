// Configuration générale du portfolio
export const siteConfig = {
  name: "Arthur Jean",
  title: "Arthur Jean - Développeur Full Stack & Architecte IA",
  description:
    "Développeur web/desktop spécialisé en Next.js, Rust, Electron et systèmes d'agents IA. Je conçois des solutions disruptives pour startups : SaaS, marketplaces, e-commerce et systèmes intelligents.",
  url: "https://arthurjean.com", // Remplacez par votre URL
  ogImage: "/og-image.png",
  keywords: [
    "développeur full stack",
    "développeur Next.js",
    "développeur Rust",
    "architecte IA",
    "agents IA",
    "RAG",
    "LLM Engineering",
    "développeur Electron",
    "développeur web",
    "développeur SaaS",
  ],
  links: {
    email: "arthur.jean@strivex.fr", // Remplacez par votre email
    linkedin: "https://www.linkedin.com/in/arthur-jean-401b56239/",
    github: "https://github.com/ArthurDEV44", // Remplacez par votre GitHub
    cal: "https://cal.com/arthurjean/30min",
  },
};

// Stack principale
export const mainStack = [
  { name: "Next.js", category: "Framework" },
  { name: "Astro", category: "Framework" },
  { name: "Rust", category: "Backend" },
  { name: "Electron", category: "Desktop" },
  { name: "Clerk", category: "Auth" },
  { name: "Vercel", category: "Hosting" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "Neon", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Stripe", category: "Payment" },
  { name: "Zustand", category: "State" },
  { name: "useSWR", category: "Data Fetching" },
  { name: "Upstash", category: "Redis" },
  { name: "Ink", category: "CLI" },
  { name: "Ratatui", category: "TUI" },
  { name: "Socket.io", category: "Realtime" },
  { name: "Resend", category: "Email" },
  { name: "Cloudflare", category: "CDN" },
];

// Stack secondaire
export const secondaryStack = [
  { name: "Angular", category: "Framework" },
  { name: "Fastify", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "PrimeNG", category: "UI Library" },
  { name: "Three.js", category: "3D" },
  { name: "KoaJS", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "Flask", category: "Backend" },
];

// Outils de développement
export const devTools = [
  { name: "Claude Code", category: "AI Assistant" },
  { name: "Cursor", category: "IDE" },
];

// Compétences IA
export const aiSkills = [
  {
    name: "Orchestration multi-agents",
    description:
      "Systèmes d'agents spécialisés (Intent Analyzer, Task Planner, Tool Executor, Quality Validator) avec auto-réflexion, retry intelligent et amélioration itérative",
  },
  {
    name: "RAG avancé",
    description:
      "Reranking contextuel multi-critères (similarité sémantique, pertinence contextuelle, qualité de code) et enrichissement de contexte multi-niveaux (code avant/après, dépendances, documentation)",
  },
  {
    name: "Tree of Thoughts planning",
    description:
      "Exploration stratégique avec scoring multi-critères pour la planification de tâches complexes",
  },
  {
    name: "Batch editing transactionnel",
    description:
      "Parallélisation de tool calls, rollback et checkpoints pour des modifications de code sécurisées et performantes",
  },
  {
    name: "Détection de patterns",
    description:
      "Détection de gaps algorithmiques, pattern detection avec anti-patterns pour améliorer la qualité du code",
  },
  {
    name: "Orchestration de workflows",
    description:
      "Workflows multi-phases avec gestion de dépendances et topological sorting pour l'exécution optimale",
  },
  {
    name: "Indexation sémantique AST",
    description:
      "Indexation incrémentale (TypeScript/Python) avec chunking intelligent par fonction/classe/module/responsabilité",
  },
  {
    name: "Analyse de dépendances",
    description:
      "Construction de graphes de dépendances (imports, exports, calls, inheritance) et analyse d'impact avec propagation de changements",
  },
  {
    name: "Gestion de contexte dynamique",
    description:
      "Fenêtre de contexte dynamique avec priorisation adaptative et compression intelligente",
  },
  {
    name: "Validation multi-niveaux",
    description:
      "Validation syntaxe, types, sémantique, style, fonctionnel, intégration pour garantir la qualité du code",
  },
  {
    name: "Grounding anti-hallucination",
    description:
      "Vérification de références/imports/types, scoring de confiance pondéré pour réduire les erreurs",
  },
  {
    name: "NLU spécialisé",
    description:
      "Traitement du langage naturel pour prompts de développement avec extraction d'entités, désambiguïsation contextuelle et apprentissage des préférences utilisateur",
  },
  {
    name: "Cache intelligent multi-niveaux",
    description:
      "Cache pour embeddings, résultats de recherche, analyses AST et réponses LLM pour optimiser les performances",
  },
  {
    name: "Optimisations de performance",
    description:
      "Batching, streaming, rate limiting adaptatif, retry avec backoff exponentiel pour des systèmes performants",
  },
  {
    name: "LLM Engineering",
    description:
      "ReAct, validation auto multi-langages, prompt engineering dynamique pour des systèmes IA robustes",
  },
  {
    name: "Intégration MCP",
    description:
      "Model Context Protocol pour l'intégration avancée d'agents IA dans des environnements de développement",
  },
];

// Compétences workflow
export const workflowSkills = [
  {
    name: "n8n",
    description: "Automatisation de workflows et intégration d'APIs",
  },
];

