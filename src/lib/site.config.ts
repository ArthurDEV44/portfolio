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
    x: "https://x.com/arthurjdev",
    cal: "https://cal.com/arthurjean/30min",
  },
};

// Stack principale - Langages & Frameworks
export const mainStack = [
  { name: "Rust", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "Python", category: "Language" },
  { name: "Blockchain", category: "Web3" },
  { name: "Tauri", category: "Desktop" },
  { name: "TypeScript", category: "Language" },
  { name: "TailwindCSS", category: "Styling" },
];

// Outils & Services
export const devTools = [
  { name: "Claude Code", category: "AI Assistant" },
  { name: "Cursor", category: "IDE" },
  { name: "Hugging Face", category: "AI Platform" },
  { name: "Ollama", category: "Local LLM" },
  { name: "vLLM", category: "Inference" },
  { name: "Llama.cpp", category: "Inference" },
  { name: "Vercel", category: "Hosting" },
  { name: "Render", category: "Hosting" },
  { name: "Drizzle", category: "ORM" },
  { name: "Stripe", category: "Payment" },
  { name: "Neon", category: "Database" },
  { name: "Clerk", category: "Auth" },
  { name: "Cloudflare", category: "CDN" },
  { name: "Solana", category: "Web3" },
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

// FAQ - Questions fréquentes
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
      "On commence par un appel de 30 minutes pour cadrer le besoin. Je livre ensuite en sprints courts avec des démos régulières. Je travaille en autonomie complète — de l'architecture au déploiement — avec une communication asynchrone via Slack ou email.",
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
