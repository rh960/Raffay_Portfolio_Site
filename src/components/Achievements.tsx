"use client";
import { DATA } from "@/data/portfolio";
import { RevealSection, SectionTitle, GlassCard } from "./UI";

export default function Achievements() {
  return (
    <RevealSection id="achievements" style={{ position: "relative", zIndex: 1, padding: "110px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionTitle label="Achievements" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {DATA.achievements.map((a, i) => (
            <GlassCard key={i} style={{ padding: "28px 24px" }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{a.icon}</div>
              <div style={{
                display: "inline-block", fontFamily: "monospace", fontSize: 8,
                letterSpacing: 3, color: "#6366F1", textTransform: "uppercase",
                border: "1px solid rgba(99,102,241,0.25)", background: "rgba(99,102,241,0.08)",
                padding: "2px 8px", borderRadius: 3, marginBottom: 10,
              }}>
                {a.type}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>{a.title}</div>
              <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.6 }}>{a.sub}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
