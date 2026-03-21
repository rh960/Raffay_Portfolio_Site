"use client";
import { useState } from "react";
import { DATA } from "@/data/portfolio";
import { RevealSection, SectionTitle, Tag } from "./UI";

function ExpCard({ item, index }: { item: (typeof DATA.experience)[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        marginBottom: 10,
        border: `1px solid ${open || hover ? "rgba(14,165,233,0.35)" : "rgba(15,23,42,0.1)"}`,
        borderRadius: 10,
        background: open ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
        boxShadow: open ? "0 4px 20px rgba(14,165,233,0.1)" : "0 2px 8px rgba(15,23,42,0.05)",
        overflow: "hidden", transition: "all 0.25s ease",
      }}
    >
      <button onClick={() => setOpen((o) => !o)} style={{
        width: "100%", background: "none", border: "none", cursor: "pointer",
        padding: "20px 24px", display: "flex", alignItems: "flex-start",
        justifyContent: "space-between", textAlign: "left", gap: 16,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#0F172A", fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{item.title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <span style={{ color: "#0EA5E9", fontSize: 12, fontFamily: "monospace" }}>{item.org}</span>
            <span style={{ color: "#94A3B8", fontSize: 10, fontFamily: "monospace", letterSpacing: 1 }}>{item.year}</span>
          </div>
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          border: "1px solid rgba(14,165,233,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#0EA5E9", fontSize: 16, flexShrink: 0, marginTop: 2,
          transition: "transform 0.3s ease", transform: open ? "rotate(45deg)" : "rotate(0deg)",
          background: "rgba(14,165,233,0.06)",
        }}>+</div>
      </button>

      <div style={{ maxHeight: open ? "900px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <div style={{ padding: "0 24px 22px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 16 }}>
            {item.tags.map((t) => <Tag key={t} label={t} />)}
          </div>
          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            {item.bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#334155", fontSize: 13, lineHeight: 1.75, marginBottom: 8 }}>
                <span style={{ color: "#0EA5E9", marginTop: 5, fontSize: 6, flexShrink: 0 }}>◆</span>
                {b}
              </li>
            ))}
          </ul>
          {/* Blog link — FYP only */}
          {index === 0 && (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
              <a href={DATA.basics.blog} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "9px 20px", borderRadius: 7,
                border: "1px solid rgba(14,165,233,0.3)", color: "#0EA5E9",
                fontSize: 11, fontFamily: "monospace", letterSpacing: 1,
                textDecoration: "none", background: "rgba(14,165,233,0.06)", transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(14,165,233,0.12)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(14,165,233,0.06)"; }}
              >
                📖 Research Blog ↗
              </a>
              <a href="https://github.com/rh960/Sensor_Driven_Digital_Twin_For_Collison_Prevention_in_Autonomous_Systems" target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "9px 20px", borderRadius: 7,
                border: "1px solid rgba(99,102,241,0.3)", color: "#6366F1",
                fontSize: 11, fontFamily: "monospace", letterSpacing: 1,
                textDecoration: "none", background: "rgba(99,102,241,0.06)", transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.12)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.06)"; }}
              >
                ⌥ GitHub Repo ↗
              </a>
            </div>
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
        {DATA.experience.map((item, i) => <ExpCard key={i} item={item} index={i} />)}
      </div>
    </RevealSection>
  );
}
