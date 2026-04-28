import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site.config";

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{ position: "relative", overflow: "hidden", isolation: "isolate" }}
      aria-labelledby="hero-heading"
    >
      <div className="section-mesh hero-mesh-1" aria-hidden="true" />
      <div className="section-mesh hero-mesh-2" aria-hidden="true" />

      <div
        className="section reveal"
        style={{ paddingTop: 140, paddingBottom: 60 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 56,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 44,
              height: 44,
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid var(--line)",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/avatar.webp"
              alt={siteConfig.name}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 15 }}>
              {siteConfig.name}
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: 11,
                color: "var(--fg-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  className="available-dot"
                  style={{ width: 6, height: 6 }}
                />
                {siteConfig.role} · Disponible
              </span>
            </div>
          </div>
        </div>

        <h1
          id="hero-heading"
          className="font-serif"
          style={{
            fontSize: "clamp(40px, 6.5vw, 80px)",
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: "-0.025em",
            fontWeight: 400,
            maxWidth: 980,
          }}
        >
          Je construis des produits tech{" "}
          <span style={{ color: "var(--fg-muted)", fontStyle: "italic" }}>
            de bout en bout
          </span>
          {" : "}
          SaaS, dev tools, et systèmes d&apos;
          <span className="highlight">agents IA</span>. Je ne code plus,&nbsp;
          <span style={{ fontStyle: "italic" }}>j&apos;orchestre</span>.
        </h1>

        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginTop: 48,
          }}
        >
          <a
            className="dbtn dbtn-primary"
            href={siteConfig.links.cal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Réserver un appel <ArrowRight size={14} strokeWidth={1.5} />
          </a>
          <a className="dbtn" href="#projects">
            Voir les projets
          </a>
          <a
            className="dbtn dbtn-ghost"
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
          <a
            className="dbtn dbtn-ghost"
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
