import { siteConfig } from "@/lib/site.config";

const AI_BOTS = ["GPTBot", "ClaudeBot", "PerplexityBot", "Bytespider"];

const CONTENT_SIGNAL = "search=yes, ai-input=yes, ai-train=no";

export function GET() {
  const blocks = [
    `User-agent: *\nContent-Signal: ${CONTENT_SIGNAL}\nAllow: /`,
    ...AI_BOTS.map(
      (bot) =>
        `User-agent: ${bot}\nContent-Signal: ${CONTENT_SIGNAL}\nAllow: /`,
    ),
  ];

  const body = `${blocks.join("\n\n")}\n\nSitemap: ${siteConfig.url}/sitemap.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
