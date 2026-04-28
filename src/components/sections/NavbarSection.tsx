import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/lib/site.config";

export function NavbarSection() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      <a
        href="#hero"
        className="font-mono"
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "var(--fg)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}
      >
        {siteConfig.handle}
      </a>
      <div className="flex items-center gap-1.5">
        <a
          className="dbtn dbtn-primary dbtn-sm"
          href={siteConfig.links.cal}
          target="_blank"
          rel="noopener noreferrer"
        >
          Prendre RDV
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
