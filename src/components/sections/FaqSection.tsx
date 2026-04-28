"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { faqItems, siteConfig } from "@/lib/site.config";

export function FaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12 md:gap-16 items-start">
        <div className="reveal" style={{ position: "sticky", top: 96 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            05 / FAQ
          </div>
          <h2
            id="faq-heading"
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 1,
              margin: "0 0 24px",
              letterSpacing: "-0.025em",
              fontWeight: 400,
            }}
          >
            Réponses{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg-muted)" }}>
              directes
            </span>
            .
          </h2>
          <p
            style={{
              color: "var(--fg-muted)",
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            Une question pas dans la liste ?{" "}
            <a
              className="ink-link"
              href={siteConfig.links.cal}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--fg)" }}
            >
              Réserver un créneau
            </a>
            .
          </p>
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              color: "var(--fg-faint)",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}
          >
            {faqItems.length} questions
          </div>
        </div>
        <div className="reveal">
          {faqItems.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.question}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      gap: 16,
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 11,
                        color: "var(--fg-faint)",
                        letterSpacing: "0.12em",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span>{it.question}</span>
                  </span>
                  <span className="chev">
                    <Plus size={12} strokeWidth={2} />
                  </span>
                </button>
                <div className="faq-content">
                  <div
                    style={{
                      paddingLeft: 36,
                      paddingRight: 40,
                      paddingTop: 4,
                    }}
                  >
                    {it.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
