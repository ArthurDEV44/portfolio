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
