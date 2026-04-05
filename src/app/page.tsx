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
import { getJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site.config";

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
