import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/site.config";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="reveal" style={{ marginBottom: 56 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          01 / Produits
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <h2
            id="projects-heading"
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 1,
              margin: 0,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              maxWidth: 720,
            }}
          >
            Projets{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg-muted)" }}>
              en solo
            </span>
            .
          </h2>
          <p
            className="font-mono"
            style={{
              fontSize: 12,
              color: "var(--fg-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              margin: 0,
            }}
          >
            {String(projects.length).padStart(2, "0")} actifs
          </p>
        </div>
        <div
          style={{
            marginTop: 20,
            color: "var(--fg-muted)",
            maxWidth: 620,
            lineHeight: 1.6,
          }}
        >
          Produits où j&apos;ai tout fait : produit, archi, code, design,
          déploiement.
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
          gap: 24,
        }}
      >
        {projects.map((p, i) => {
          const inner = (
            <>
              <div className="shot">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  priority={i === 0}
                />
              </div>
              <div style={{ padding: "16px 4px 0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    alignItems: "baseline",
                    marginBottom: 6,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 500,
                      margin: 0,
                      letterSpacing: "-0.01em",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    {p.title}
                    {p.url && (
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        style={{ color: "var(--fg-faint)" }}
                      />
                    )}
                  </h3>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      color: "var(--fg-faint)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {p.meta}
                  </span>
                </div>
                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: 14,
                    lineHeight: 1.55,
                    margin: "0 0 12px",
                  }}
                >
                  {p.description}
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </>
          );

          const cardStyle = {
            textDecoration: "none" as const,
            color: "inherit",
            display: "block",
          };

          if (p.url) {
            return (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card reveal"
                style={cardStyle}
              >
                {inner}
              </a>
            );
          }

          return (
            <article
              key={p.title}
              className="project-card reveal"
              style={cardStyle}
            >
              {inner}
            </article>
          );
        })}
      </div>
    </section>
  );
}
