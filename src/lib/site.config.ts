// Configuration générale du portfolio
export const siteConfig = {
  name: "Arthur Jean",
  handle: "arthurjean.com",
  role: "AI Builder & Architecte Produit",
  pitch:
    "Je construis des produits tech de bout en bout : SaaS, dev tools et systèmes d'agents IA. Je ne code plus, j'orchestre.",
  location: "Remote · France",
  available: true,
  title: "Arthur Jean - AI Builder & Architecte Produit",
  description:
    "Je construis des produits tech de bout en bout : SaaS, dev tools et systèmes d'agents IA. Je ne code plus, j'orchestre.",
  url: "https://arthurjean.com",
  ogImage: "/og-image.png",
  keywords: [
    "AI Builder",
    "architecte produit",
    "développeur Next.js",
    "développeur Rust",
    "agents IA",
    "Claude Code",
    "MCP",
    "RAG",
    "SaaS",
    "dev tools",
  ],
  links: {
    email: "arthur.jean@strivex.fr",
    linkedin: "https://www.linkedin.com/in/arthur-jean-401b56239/",
    github: "https://github.com/ArthurDEV44",
    x: "https://x.com/arthurjdev",
    cal: "https://cal.com/arthurjean/30min",
  },
  navLinks: [
    { href: "#projects", label: "Projets" },
    { href: "#clients", label: "Clients" },
    { href: "#value", label: "Approche" },
    { href: "#journey", label: "Parcours" },
    { href: "#faq", label: "FAQ" },
  ],
};

// Stack courante (pill tags)
export const stack = [
  "Rust",
  "Next.js",
  "Python",
  "Tauri",
  "TypeScript",
  "Claude Code",
  "MCP",
  "RAG",
];

// Stack principale - Langages & Frameworks (legacy, conservé pour compat)
export const mainStack = [
  { name: "Rust", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "Python", category: "Language" },
  { name: "Tauri", category: "Desktop" },
  { name: "TypeScript", category: "Language" },
  { name: "Claude Code", category: "AI Assistant" },
];

// Outils & Services (legacy)
export const devTools = [
  { name: "Claude Code", category: "AI Assistant" },
  { name: "Cursor", category: "IDE" },
  { name: "Hugging Face", category: "AI Platform" },
  { name: "Ollama", category: "Local LLM" },
  { name: "vLLM", category: "Inference" },
  { name: "Vercel", category: "Hosting" },
  { name: "Drizzle", category: "ORM" },
  { name: "Stripe", category: "Payment" },
  { name: "Neon", category: "Database" },
  { name: "Clerk", category: "Auth" },
  { name: "Cloudflare", category: "CDN" },
];

// Compétences IA
export const aiSkills = [
  {
    name: "Orchestration multi-agents",
    description:
      "Systèmes d'agents spécialisés avec auto-réflexion, planification dynamique et exécution parallèle de tâches complexes",
  },
  {
    name: "RAG avancé",
    description:
      "Retrieval-Augmented Generation avec reranking contextuel, chunking sémantique et enrichissement multi-sources",
  },
  {
    name: "LLM Engineering",
    description:
      "Prompt engineering avancé, fine-tuning, évaluation de modèles et optimisation des pipelines d'inférence",
  },
  {
    name: "Intégration MCP",
    description:
      "Model Context Protocol pour connecter les LLMs à des outils externes, APIs et sources de données en temps réel",
  },
  {
    name: "Agentic Workflows",
    description:
      "Conception de workflows autonomes avec tool use, function calling et boucles de rétroaction intelligentes",
  },
  {
    name: "Computer Use & Browser Automation",
    description:
      "Agents capables d'interagir avec des interfaces graphiques, navigateurs et applications desktop de manière autonome",
  },
];

// Projets en solo
export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string | null;
  image: string;
  meta: string;
}

export const projects: Project[] = [
  {
    title: "Paneflow",
    description:
      "Multiplexeur terminal accéléré GPU pour Linux. Alternative moderne à tmux, propulsée par GPUI (Zed) et Vulkan.",
    tags: ["Dev Tool", "Rust", "GPU"],
    url: "https://paneflow.dev",
    image: "/images/paneflow.dev_.png",
    meta: "2025, Open source",
  },
  {
    title: "OpenbookLM",
    description:
      "SaaS de recherche intelligente dans les documents. Alternative à NotebookLM, propulsée par RAG avancé et agents IA.",
    tags: ["SaaS", "RAG", "Agents IA"],
    url: null,
    image: "/images/openbooklm.fr_fr.webp",
    meta: "2025, Solo",
  },
  {
    title: "Rust Doctor",
    description:
      "Outil d'analyse de santé pour projets Rust. CLI, serveur MCP et skill Claude Code.",
    tags: ["Dev Tool", "Rust", "MCP"],
    url: "https://rust-doctor.vercel.app",
    image: "/images/rust-doctor.vercel.app.webp",
    meta: "2025, Open source",
  },
  {
    title: "Distill",
    description:
      "Serveur MCP open source pour optimiser les tokens LLM. 3 outils always-on, compression intelligente du contexte.",
    tags: ["Dev Tool", "MCP", "TypeScript"],
    url: "https://distill-mcp.com",
    image: "/images/distill-mcp.com_.png",
    meta: "2025, Open source",
  },
];

// Réalisations clients
export interface Client {
  title: string;
  description: string;
  image: string;
  url: string | null;
  year: string;
}

export const clients: Client[] = [
  {
    title: "Contributions Open Source",
    description: "Contributeur actif sur Zed et d'autres projets infra dev.",
    image: "/images/github.com_ArthurDEV44.webp",
    url: "https://github.com/ArthurDEV44",
    year: "Ongoing",
  },
  {
    title: "Azuna",
    description: "Site vitrine pour une conciergerie immobilière à Nice.",
    image: "/images/azuna.pro_.webp",
    url: "https://azuna.pro",
    year: "2024",
  },
  {
    title: "Dress Night",
    description: "E-commerce de robes de soirée avec panel admin.",
    image: "/images/dress-night.com_.webp",
    url: "https://dress-night.com/",
    year: "2024",
  },
  {
    title: "Au Sommet de Chez Vous",
    description: "Site vitrine pour une entreprise d'élagage dans le Morbihan.",
    image: "/images/ausommetdechezvous.bzh_.webp",
    url: "https://ausommetdechezvous.bzh",
    year: "2023",
  },
];

// Approche / piliers
export interface ValuePillar {
  num: string;
  title: string;
  description: string;
}

export const valuePillars: ValuePillar[] = [
  {
    num: "01",
    title: "Vision produit",
    description:
      "Je pense utilisateur avant de penser code. J'ai lancé et opéré mes propres SaaS, je sais ce qui fait qu'un produit tient.",
  },
  {
    num: "02",
    title: "Workflow AI-native",
    description:
      "Expert Claude Code et Codex. Skills, subagents, workflows multi-agents, mode swarm, CLI + MCP : je maîtrise chaque feature pour orchestrer le développement de bout en bout.",
  },
  {
    num: "03",
    title: "Ship solo, end-to-end",
    description:
      "De l'architecture au déploiement, je gère tout. Pas besoin de coordination, pas de dépendance.",
  },
  {
    num: "04",
    title: "Open source & communauté",
    description:
      "Contributeur actif, pas juste consommateur. Je construis des outils que d'autres utilisent.",
  },
];

// Parcours
export interface JourneyStep {
  period: string;
  title: string;
  description: string;
  current?: boolean;
}

export const journey: JourneyStep[] = [
  {
    period: "2021 - 2023",
    title: "Apprentissage développement",
    description:
      "Formation en alternance. Les bases du métier, les premières lignes de code, la découverte du terrain.",
  },
  {
    period: "2023 - 2025",
    title: "Seul développeur en entreprise",
    description:
      "Architecture, produit, déploiement : tout reposait sur moi. Adoption de l'IA dès fin 2022 avec ChatGPT et GitHub Copilot, puis Cursor dès sa sortie.",
  },
  {
    period: "2025",
    title: "Solopreneur",
    description:
      "Je lance mes propres produits : OpenbookLM et Rust Doctor. Contributeur open source sur Zed. Bascule complète sur Cursor puis Claude Code.",
  },
  {
    period: "2026",
    title: "Expert AI Builder",
    description:
      "Maîtrise complète de Claude Code : skills, subagents, workflows multi-agents, mode swarm, MCP. Codex intégré au workflow pour les PRD et la review de code.",
    current: true,
  },
];

// FAQ
export const faqItems = [
  {
    question: "Quelle est votre stack technique principale ?",
    answer:
      "Je travaille principalement avec Next.js et TypeScript pour le web, Rust pour les outils CLI et le backend performant, et Python pour les pipelines IA. Côté IA, je maîtrise Claude Code, les systèmes multi-agents, le RAG avancé et le protocole MCP.",
  },
  {
    question: "Quel type de clients accompagnez-vous ?",
    answer:
      "J'accompagne principalement des startups et des entreprises tech qui veulent construire des produits ambitieux : SaaS, dev tools, marketplaces et systèmes d'agents IA. Je suis particulièrement adapté aux projets early-stage où il faut aller vite et itérer.",
  },
  {
    question: "Comment se déroule une collaboration type ?",
    answer:
      "On commence par un appel de 30 minutes pour cadrer le besoin. Je livre ensuite en sprints courts avec des démos régulières. Je travaille en autonomie complète, de l'architecture au déploiement, avec une communication asynchrone via Slack ou email.",
  },
  {
    question:
      "Comment intégrez-vous l'IA dans votre workflow de développement ?",
    answer:
      "L'IA est au cœur de mon process. J'utilise Claude Code avec des skills et subagents personnalisés, des workflows multi-agents pour le développement, et Codex pour la review de code et les PRD. Je ne code plus ligne par ligne : j'orchestre.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Je travaille au forfait par projet ou en régie journalière. Les tarifs dépendent de la complexité et de la durée. Prenez rendez-vous pour un devis personnalisé via mon calendrier.",
  },
  {
    question: "Êtes-vous disponible pour une mission ?",
    answer:
      "Ma disponibilité varie selon les projets en cours. Le meilleur moyen de le savoir est de réserver un créneau de 30 minutes via Cal.com pour discuter de votre projet.",
  },
  {
    question: "Travaillez-vous en remote ou sur site ?",
    answer:
      "Je travaille exclusivement en remote. C'est ce qui me permet d'être le plus productif et de servir des clients partout en France et à l'international.",
  },
];
