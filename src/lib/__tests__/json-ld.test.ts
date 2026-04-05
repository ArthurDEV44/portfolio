import { describe, expect, it } from "vitest";
import { getJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site.config";

describe("getJsonLd", () => {
  const jsonLd = getJsonLd();

  it("returns all four schemas", () => {
    expect(jsonLd).toHaveProperty("person");
    expect(jsonLd).toHaveProperty("website");
    expect(jsonLd).toHaveProperty("professionalService");
    expect(jsonLd).toHaveProperty("faqPage");
  });

  describe("Person schema", () => {
    it("has correct @context and @type", () => {
      expect(jsonLd.person["@context"]).toBe("https://schema.org");
      expect(jsonLd.person["@type"]).toBe("Person");
    });

    it("uses siteConfig.url for URLs", () => {
      expect(jsonLd.person.url).toBe(siteConfig.url);
      expect(jsonLd.person.image).toContain(siteConfig.url);
    });

    it("includes sameAs social links", () => {
      expect(jsonLd.person.sameAs).toContain(siteConfig.links.linkedin);
      expect(jsonLd.person.sameAs).toContain(siteConfig.links.github);
    });
  });

  describe("WebSite schema", () => {
    it("has correct @context and @type", () => {
      expect(jsonLd.website["@context"]).toBe("https://schema.org");
      expect(jsonLd.website["@type"]).toBe("WebSite");
    });

    it("uses siteConfig.url", () => {
      expect(jsonLd.website.url).toBe(siteConfig.url);
    });
  });

  describe("ProfessionalService schema", () => {
    it("has correct @context and @type", () => {
      expect(jsonLd.professionalService["@context"]).toBe("https://schema.org");
      expect(jsonLd.professionalService["@type"]).toBe("ProfessionalService");
    });

    it("uses siteConfig.url", () => {
      expect(jsonLd.professionalService.url).toBe(siteConfig.url);
    });

    it("includes knowsAbout from aiSkills", () => {
      expect(jsonLd.professionalService.knowsAbout).toBeInstanceOf(Array);
      expect(jsonLd.professionalService.knowsAbout.length).toBeGreaterThan(0);
    });
  });

  describe("FAQPage schema", () => {
    it("has correct @context and @type", () => {
      expect(jsonLd.faqPage["@context"]).toBe("https://schema.org");
      expect(jsonLd.faqPage["@type"]).toBe("FAQPage");
    });

    it("has mainEntity with Question items", () => {
      expect(jsonLd.faqPage.mainEntity).toBeInstanceOf(Array);
      expect(jsonLd.faqPage.mainEntity.length).toBeGreaterThan(0);
      for (const item of jsonLd.faqPage.mainEntity) {
        expect(item["@type"]).toBe("Question");
        expect(item.acceptedAnswer["@type"]).toBe("Answer");
      }
    });
  });
});
