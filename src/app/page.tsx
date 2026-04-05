import {
  ClientsSection,
  FaqSection,
  FooterSection,
  HeroSection,
  JourneySection,
  NavbarSection,
  ProjectsSection,
  ValueSection,
} from "@/components";
import { aiSkills, faqItems, siteConfig } from "@/lib/site.config";

// Configuration ISR - Revalidation toutes les 24h
export const revalidate = 86400;

// Métadonnées SEO
export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Données structurées JSON-LD
function getJsonLd() {
  // Schema Person
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

  // Schema WebSite
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

  // Schema ProfessionalService
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

  // Schema FAQPage
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

export default function Home() {
  const jsonLd = getJsonLd();

  return (
    <>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from static siteConfig, output is JSON.stringify'd + <-escaped
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd.person).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from static siteConfig, output is JSON.stringify'd + <-escaped
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd.website).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from static siteConfig, output is JSON.stringify'd + <-escaped
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd.professionalService).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from static siteConfig, output is JSON.stringify'd + <-escaped
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd.faqPage).replace(/</g, "\\u003c"),
        }}
      />

      <NavbarSection />

      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen outline-none"
      >
        <HeroSection />
        <ProjectsSection />
        <ClientsSection />
        <ValueSection />
        <JourneySection />
        <FaqSection />
        <FooterSection />
      </main>
    </>
  );
}
