import { aiSkills, faqItems, siteConfig } from "@/lib/site.config";

export function getJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    jobTitle: "Développeur Full Stack & Architecte IA",
    description: siteConfig.description,
    email: siteConfig.links.email,
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.links.x,
    ],
    worksFor: {
      "@type": "Organization",
      name: "StriveX",
    },
    knowsAbout: [
      "Next.js",
      "Rust",
      "Electron",
      "Intelligence Artificielle",
      "Agents IA",
      "RAG",
      "LLM Engineering",
      "Développement Web",
      "Développement Desktop",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "fr",
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.links.email,
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: [
      "Développement Web",
      "Développement d'Applications Desktop",
      "Systèmes d'Agents IA",
      "Développement SaaS",
      "Consulting IA",
    ],
    knowsAbout: aiSkills.map((skill) => skill.name),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    person,
    website,
    professionalService,
    faqPage,
  };
}
