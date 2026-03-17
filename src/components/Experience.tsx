"use client";
import { useState } from "react";
import { DATA } from "@/data/portfolio";
import { RevealSection, SectionTitle, Tag } from "./UI";

function ExpCard({ item, index }: { item: (typeof DATA.experience)[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        marginBottom: 10,
        border: `1px solid ${open || hover ? "rgba(56,189,248,0.35)" : "rgba(255,255,255,0.12)"}`,
        borderRadius: 10,
        background: open ? "rgba(56,189,248,0.06)" : "rgba(255,255,255,0.09)",
        overflow: "hidden",
        transition: "all 0.25s ease",
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%", background: "none", border: "none",
          cursor: "pointer", padding: "20px 24px",
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          textAlign: "left", gap: 16,
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{
            color: "#fff", fontSize: 15, fontWeight: 600, marginBottom: 6,
            lineHeight: 1.3,
          }}>
            {item.title}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <span style={{ color: "#38BDF8", fontSize: 12, fontFamily: "monospace" }}>
              {item.org}
            </span>
            <span style={{
              color: "rgba(240,246,252,0.48)", fontSize: 10,
              fontFamily: "monospace", letterSpacing: 1,
            }}>
              {item.year}
            </span>
          </div>
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          border: "1px solid rgba(0,212,255,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#38BDF8", fontSize: 16, flexShrink: 0, marginTop: 2,
          transition: "transform 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          +
        </div>
      </button>

      {/* Body */}
      <div style={{
        maxHeight: open ? "800px" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        <div style={{ padding: "0 24px 22px" }}>
          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 16 }}>
            {item.tags.map((t) => <Tag key={t} label={t} />)}
          </div>
          {/* Bullets */}
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            {item.bullets.map((b, i) => (
              <li key={i} style={{
                display: "flex", gap: 10, alignItems: "flex-start",
                color: "rgba(240,246,252,0.78)", fontSize: 13, lineHeight: 1.75,
                marginBottom: 8,
              }}>
                <span style={{ color: "#38BDF8", marginTop: 5, fontSize: 6, flexShrink: 0 }}>◆</span>
                {b}
              </li>
            ))}
          </ul>
          {/* Blog link — only on FYP card */}
          {index === 0 && (
            <a
              href={DATA.basics.blog}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                marginTop: 16, padding: "9px 20px", borderRadius: 7,
                border: "1px solid rgba(0,212,255,0.25)",
                color: "#38BDF8", fontSize: 11,
                fontFamily: "monospace", letterSpacing: 1,
                textDecoration: "none",
                background: "rgba(0,212,255,0.05)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.25)"; }}
            >
              📖 Research Blog ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <RevealSection id="experience" style={{ position: "relative", zIndex: 1, padding: "110px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionTitle label="Experience & Projects" />
        {DATA.experience.map((item, i) => (
          <ExpCard key={i} item={item} index={i} />
        ))}
      </div>
    </RevealSection>
  );
}
