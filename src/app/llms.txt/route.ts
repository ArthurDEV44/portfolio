import { buildHomepageMarkdown } from "@/lib/agent-markdown";

export function GET() {
  return new Response(buildHomepageMarkdown(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
