import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="section" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="divider" style={{ marginBottom: 32 }} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          className="font-mono"
          style={{
            fontSize: 12,
            color: "var(--fg-faint)",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
          }}
        >
          © {year} {siteConfig.name} · Crafted in France
        </div>
        <nav style={{ display: "flex", gap: 24 }} aria-label="Liens légaux">
          <Link
            className="ink-link font-mono"
            href="/mentions-legales"
            style={{
              fontSize: 12,
              color: "var(--fg-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Mentions
          </Link>
          <Link
            className="ink-link font-mono"
            href="/confidentialite"
            style={{
              fontSize: 12,
              color: "var(--fg-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Confidentialité
          </Link>
          <Link
            className="ink-link font-mono"
            href="/cgu"
            style={{
              fontSize: 12,
              color: "var(--fg-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            CGU
          </Link>
        </nav>
      </div>
    </footer>
  );
}
