"use client";
import { DATA } from "@/data/portfolio";

export default function Hero() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{
      position: "relative", zIndex: 1, minHeight: "100vh",
      display: "flex", alignItems: "center", padding: "80px 24px 40px",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto", width: "100%" }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 6, color: "#0EA5E9", marginBottom: 22, textTransform: "uppercase", animation: "fadeUp 0.6s ease both" }}>
          Portfolio — 2026
        </p>
        <h1 style={{
          fontSize: "clamp(44px,9vw,88px)", fontWeight: 800, lineHeight: 1.02,
          letterSpacing: -2, margin: "0 0 18px",
          background: "linear-gradient(135deg,#0F172A 45%,#0EA5E9)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          animation: "fadeUp 0.7s 0.1s ease both",
        }}>
          Raffay<br />Hassan
        </h1>
        <p style={{ fontSize: 15, color: "#0EA5E9", fontFamily: "monospace", letterSpacing: 2, marginBottom: 8, animation: "fadeUp 0.7s 0.2s ease both" }}>
          {DATA.basics.title}
        </p>
        <p style={{ fontSize: 12, color: "#64748B", fontFamily: "monospace", letterSpacing: 1, marginBottom: 32, animation: "fadeUp 0.7s 0.25s ease both" }}>
          {DATA.basics.subtitle}
        </p>
        <p style={{ fontSize: 15, color: "#334155", maxWidth: 520, lineHeight: 1.85, marginBottom: 44, animation: "fadeUp 0.7s 0.3s ease both" }}>
          {DATA.basics.summary}
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", animation: "fadeUp 0.7s 0.4s ease both" }}>
          <button onClick={() => scroll("experience")} style={{
            padding: "13px 30px", borderRadius: 8,
            background: "linear-gradient(135deg,#0EA5E9,#6366F1)",
            border: "none", color: "#fff", fontWeight: 700,
            fontSize: 12, letterSpacing: 1.5, cursor: "pointer",
            boxShadow: "0 4px 20px rgba(14,165,233,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s", fontFamily: "monospace",
          }}
            onMouseEnter={e => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; (e.target as HTMLElement).style.boxShadow = "0 8px 28px rgba(14,165,233,0.45)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.transform = "translateY(0)"; (e.target as HTMLElement).style.boxShadow = "0 4px 20px rgba(14,165,233,0.35)"; }}
          >
            View Experience
          </button>

          <a href={DATA.basics.linkedin} target="_blank" rel="noreferrer" style={{
            padding: "13px 30px", borderRadius: 8,
            border: "1px solid rgba(14,165,233,0.4)",
            color: "#0EA5E9", fontSize: 12, letterSpacing: 1.5,
            fontFamily: "monospace", fontWeight: 600,
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(14,165,233,0.06)", transition: "all 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(14,165,233,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(14,165,233,0.06)"; }}
          >
            LinkedIn ↗
          </a>

          <a href="/Raffay_Hassan_CV.pdf" download="Raffay_Hassan_CV.pdf" style={{
            padding: "13px 30px", borderRadius: 8,
            border: "1px solid rgba(99,102,241,0.35)",
            color: "#6366F1", fontSize: 12, letterSpacing: 1.5,
            fontFamily: "monospace", fontWeight: 600,
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(99,102,241,0.06)", transition: "all 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.06)"; }}
          >
            ⬇ Download CV
          </a>
        </div>

        <div style={{ marginTop: 80, animation: "fadeUp 1s 0.8s ease both", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 1, height: 40, background: "linear-gradient(180deg,transparent,rgba(14,165,233,0.5))" }} />
          <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 4, color: "#94A3B8", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </div>
    </section>
  );
}
