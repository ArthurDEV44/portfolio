"use client";

import { useEffect } from "react";
import { aiSkills, mainStack, siteConfig } from "@/lib/site.config";

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (
    input: unknown,
  ) => Promise<{ content: Array<{ type: "text"; text: string }> }>;
};

type WebMcpNavigator = Navigator & {
  modelContext?: {
    provideContext: (config: { tools: WebMcpTool[] }) => Promise<void>;
  };
};

const projects = [
  {
    name: "OpenbookLM",
    url: "https://www.openbooklm.fr",
    description:
      "SaaS de recherche intelligente dans les documents, propulsée par du RAG avancé et des agents IA.",
  },
  {
    name: "Rust Doctor",
    url: "https://rust-doctor.vercel.app",
    description:
      "Outil d'analyse de santé pour projets Rust : CLI, serveur MCP et skill Claude Code.",
  },
  {
    name: "GitHub Open Source",
    url: "https://github.com/ArthurDEV44",
    description: "Contributions open source (Zed et autres projets).",
  },
];

function textResult(payload: unknown) {
  return {
    content: [
      {
        type: "text" as const,
        text:
          typeof payload === "string"
            ? payload
            : JSON.stringify(payload, null, 2),
      },
    ],
  };
}

export function WebMcpProvider() {
  useEffect(() => {
    const nav = navigator as WebMcpNavigator;
    if (!nav.modelContext?.provideContext) return;

    const tools: WebMcpTool[] = [
      {
        name: "get_profile",
        description:
          "Retourne le profil résumé d'Arthur Jean (nom, titre, description, URL).",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        execute: async () =>
          textResult({
            name: siteConfig.name,
            title: siteConfig.title,
            description: siteConfig.description,
            url: siteConfig.url,
            stack: mainStack.map((s) => s.name),
            ai_skills: aiSkills.map((s) => s.name),
          }),
      },
      {
        name: "list_projects",
        description:
          "Liste les projets publics d'Arthur avec nom, URL et description.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        execute: async () => textResult(projects),
      },
      {
        name: "get_contact_links",
        description:
          "Retourne les canaux de contact d'Arthur : email, LinkedIn, GitHub, X et lien de prise de rendez-vous Cal.com.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        execute: async () => textResult(siteConfig.links),
      },
      {
        name: "book_meeting",
        description:
          "Ouvre la page Cal.com d'Arthur pour réserver un créneau de 30 minutes. Retourne aussi l'URL pour les agents non-navigationnels.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        execute: async () => {
          const url = siteConfig.links.cal;
          if (typeof window !== "undefined") {
            window.open(url, "_blank", "noopener,noreferrer");
          }
          return textResult({ opened: true, url });
        },
      },
    ];

    nav.modelContext.provideContext({ tools }).catch(() => {
      // WebMCP is experimental — silently ignore registration failures.
    });
  }, []);

  return null;
}
