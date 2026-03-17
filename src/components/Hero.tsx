"use client";
import { DATA } from "@/data/portfolio";

export default function Hero() {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        position: "relative", zIndex: 1,
        minHeight: "100vh",
        display: "flex", alignItems: "center",
        padding: "80px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto", width: "100%" }}>
        <p
          style={{
            fontFamily: "monospace", fontSize: 10, letterSpacing: 6,
            color: "#38BDF8", marginBottom: 22, textTransform: "uppercase",
            animation: "fadeUp 0.6s ease both",
          }}
        >
          Portfolio — 2026
        </p>

        <h1
          style={{
            fontSize: "clamp(44px,9vw,88px)",
            fontWeight: 800, lineHeight: 1.02,
            letterSpacing: -2, margin: "0 0 18px",
            background: "linear-gradient(135deg,#ffffff 45%,rgba(56,189,248,0.85))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            animation: "fadeUp 0.7s 0.1s ease both",
          }}
        >
          Raffay<br />Hassan
        </h1>

        <p style={{
          fontSize: 15, color: "rgba(56,189,248,0.95)",
          fontFamily: "monospace", letterSpacing: 2,
          marginBottom: 8,
          animation: "fadeUp 0.7s 0.2s ease both",
        }}>
          {DATA.basics.title}
        </p>

        <p style={{
          fontSize: 12, color: "rgba(240,246,252,0.55)",
          fontFamily: "monospace", letterSpacing: 1,
          marginBottom: 32,
          animation: "fadeUp 0.7s 0.25s ease both",
        }}>
          {DATA.basics.subtitle}
        </p>

        <p style={{
          fontSize: 15, color: "rgba(240,246,252,0.75)",
          maxWidth: 520, lineHeight: 1.85,
          marginBottom: 44,
          animation: "fadeUp 0.7s 0.3s ease both",
        }}>
          {DATA.basics.summary}
        </p>

        <div style={{
          display: "flex", gap: 12, flexWrap: "wrap",
          animation: "fadeUp 0.7s 0.4s ease both",
        }}>
          <button
            onClick={() => scroll("experience")}
            style={{
              padding: "13px 30px", borderRadius: 8,
              background: "linear-gradient(135deg,#38BDF8,#818CF8)",
              border: "none", color: "#000", fontWeight: 700,
              fontSize: 12, letterSpacing: 1.5, cursor: "pointer",
              boxShadow: "0 0 28px rgba(56,189,248,0.45)",
              transition: "transform 0.2s, box-shadow 0.2s",
              fontFamily: "monospace",
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.transform = "translateY(-2px)";
              (e.target as HTMLElement).style.boxShadow = "0 0 40px rgba(56,189,248,0.65)";
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.transform = "translateY(0)";
              (e.target as HTMLElement).style.boxShadow = "0 0 28px rgba(56,189,248,0.45)";
            }}
          >
            View Experience
          </button>

          <a
            href={DATA.basics.linkedin}
            target="_blank" rel="noreferrer"
            style={{
              padding: "13px 30px", borderRadius: 8,
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#38BDF8", fontSize: 12, letterSpacing: 1.5,
              fontFamily: "monospace", fontWeight: 600,
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            LinkedIn ↗
          </a>

          <a
            href="/Raffay_Hassan_CV.pdf"
            download="Raffay_Hassan_CV.pdf"
            style={{
              padding: "13px 30px", borderRadius: 8,
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#38BDF8", fontSize: 12, letterSpacing: 1.5,
              fontFamily: "monospace", fontWeight: 600,
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(0,212,255,0.05)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.6)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)"; }}
          >
            ⬇ Download CV
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{
          marginTop: 80,
          animation: "fadeUp 1s 0.8s ease both",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <div style={{
            width: 1, height: 40,
            background: "linear-gradient(180deg,transparent,rgba(0,212,255,0.5))",
          }} />
          <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 4, color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
