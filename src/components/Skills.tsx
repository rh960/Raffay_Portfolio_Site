"use client";
import { DATA } from "@/data/portfolio";
import { RevealSection, SectionTitle, Tag, GlassCard } from "./UI";

export default function Skills() {
  return (
    <RevealSection id="skills" style={{ position: "relative", zIndex: 1, padding: "110px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionTitle label="Skills & Tools" />

        {/* Skill groups */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 16, marginBottom: 40,
        }}>
          {Object.entries(DATA.skills).map(([cat, items]) => (
            <div key={cat} style={{
              padding: "22px 22px",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 10,
              background: "rgba(255,255,255,0.09)",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
            >
              <p style={{
                fontFamily: "monospace", fontSize: 9, letterSpacing: 4,
                color: "#818CF8", marginBottom: 16, textTransform: "uppercase",
              }}>
                {cat}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {items.map((s) => <Tag key={s} label={s} color="#818CF8" />)}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <GlassCard style={{ padding: "28px 30px", marginBottom: 16 }}>
          <p style={{
            fontFamily: "monospace", fontSize: 9, letterSpacing: 4,
            color: "#38BDF8", marginBottom: 16, textTransform: "uppercase",
          }}>
            Education
          </p>
          <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>
            {DATA.education.degree}
          </div>
          <div style={{ color: "#38BDF8", fontSize: 13, fontFamily: "monospace", marginBottom: 4 }}>
            {DATA.education.institution}
          </div>
          <div style={{
            color: "rgba(240,246,252,0.55)", fontSize: 11,
            fontFamily: "monospace", marginBottom: 18,
          }}>
            {DATA.education.graduation} · {DATA.education.grade} · {DATA.education.location}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {DATA.education.coursework.map((c) => <Tag key={c} label={c} />)}
          </div>
        </GlassCard>

        {/* Ongoing courses */}
        <div style={{
          padding: "20px 22px",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 10,
          background: "rgba(255,255,255,0.09)",
        }}>
          <p style={{
            fontFamily: "monospace", fontSize: 9, letterSpacing: 4,
            color: "rgba(240,246,252,0.45)", marginBottom: 14, textTransform: "uppercase",
          }}>
            Ongoing Courses
          </p>
          {DATA.courses.map((c, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 10,
              color: "rgba(240,246,252,0.65)", fontSize: 13,
              marginBottom: 8, lineHeight: 1.6,
            }}>
              <span style={{ color: "#818CF8", fontSize: 6, marginTop: 6, flexShrink: 0 }}>◆</span>
              {c}
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
