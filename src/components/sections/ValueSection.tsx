import { valuePillars } from "@/lib/site.config";

export function ValueSection() {
  return (
    <section
      id="value"
      className="section"
      style={{ overflow: "hidden" }}
      aria-labelledby="value-heading"
    >
      <div className="section-mesh value-mesh-1" aria-hidden="true" />
      <div className="section-mesh value-mesh-2" aria-hidden="true" />

      <div className="reveal" style={{ marginBottom: 56 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          03 / Approche
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
            id="value-heading"
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
            Ce que j&apos;apporte,{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg-muted)" }}>
              concrètement
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
            04 piliers
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(360px, 100%), 1fr))",
          gap: 1,
          background: "var(--line)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid var(--line)",
        }}
      >
        {valuePillars.map((v) => (
          <div
            key={v.title}
            className="reveal hover-lift"
            style={{
              background: "var(--bg)",
              padding: "36px 32px",
              minHeight: 220,
              position: "relative",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 11,
                color: "var(--fg-faint)",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                marginBottom: 20,
              }}
            >
              {v.num}
            </div>
            <h3
              className="font-serif"
              style={{
                fontSize: 26,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                margin: "0 0 12px",
              }}
            >
              {v.title}
            </h3>
            <p
              style={{
                color: "var(--fg-muted)",
                lineHeight: 1.6,
                margin: 0,
                fontSize: 15,
              }}
            >
              {v.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
