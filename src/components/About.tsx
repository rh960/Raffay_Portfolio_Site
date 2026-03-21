"use client";
import { DATA } from "@/data/portfolio";
import { RevealSection, SectionTitle } from "./UI";

export default function About() {
  return (
    <RevealSection id="about" style={{ position: "relative", zIndex: 1, padding: "110px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionTitle label="About" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
          <div>
            <p style={{ color: "#334155", lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
              I am a dedicated Computer Systems Engineering student with a strong interest in building real-world digital and embedded systems. I enjoy working on hands-on projects that combine hardware, software, and cloud technologies.
            </p>
            <p style={{ color: "#334155", lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
              My key skills include embedded programming (C++, Python), IoT development with REST API integration, and low-code app design using Mendix. I&apos;m also experienced in MATLAB, SolidWorks, and Xilinx Vivado, with a solid understanding of Agile workflows and electronics testing.
            </p>
            <p style={{ color: "#64748B", lineHeight: 1.9, fontSize: 13 }}>
              Currently seeking opportunities to contribute to real-world engineering solutions.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 4, color: "#94A3B8", marginBottom: 14, textTransform: "uppercase" }}>Interests</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
              {DATA.interests.map((i) => (
                <span key={i} style={{
                  padding: "7px 16px", borderRadius: 20,
                  border: "1px solid rgba(99,102,241,0.25)", background: "rgba(99,102,241,0.06)",
                  color: "#6366F1", fontSize: 12, transition: "all 0.2s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.12)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.06)"; }}
                >{i}</span>
              ))}
            </div>
            <p style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 4, color: "#94A3B8", marginBottom: 14, textTransform: "uppercase" }}>Languages</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
              {DATA.languages.map((l) => (
                <div key={l} style={{ padding: "9px 20px", borderRadius: 8, border: "1px solid rgba(14,165,233,0.25)", color: "#0EA5E9", fontSize: 12, fontFamily: "monospace", background: "rgba(14,165,233,0.06)" }}>
                  {l} · Fluent
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 4, color: "#94A3B8", marginBottom: 10, textTransform: "uppercase" }}>Location</p>
            <p style={{ color: "#475569", fontSize: 13, fontFamily: "monospace" }}>📍 {DATA.basics.location}</p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
