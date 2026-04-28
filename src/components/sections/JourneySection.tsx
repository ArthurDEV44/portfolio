import { journey } from "@/lib/site.config";

export function JourneySection() {
  return (
    <section id="journey" className="section" aria-labelledby="journey-heading">
      <div className="reveal" style={{ marginBottom: 56 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          04 / Parcours
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
            id="journey-heading"
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
            De l&apos;apprenti au{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg-muted)" }}>
              builder solo
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
            2021 → 2026
          </p>
        </div>
      </div>

      <div style={{ position: "relative", paddingLeft: 32, maxWidth: 760 }}>
        <div className="tl-rail" />
        {journey.map((s, i) => (
          <div
            key={s.title}
            className="reveal"
            style={{
              position: "relative",
              marginBottom: i === journey.length - 1 ? 0 : 56,
            }}
          >
            <div style={{ position: "absolute", left: -32, top: 4 }}>
              <div className={`tl-node ${s.current ? "current" : ""}`} />
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: 11,
                color: "var(--fg-faint)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {s.period}
              {s.current && (
                <span
                  style={{
                    padding: "2px 6px",
                    borderRadius: 4,
                    background:
                      "color-mix(in srgb, var(--available) 18%, transparent)",
                    color: "var(--available)",
                    fontSize: 10,
                  }}
                >
                  Now
                </span>
              )}
            </div>
            <h3
              className="font-serif"
              style={{
                fontSize: 26,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                margin: "0 0 10px",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                color: "var(--fg-muted)",
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 580,
              }}
            >
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
