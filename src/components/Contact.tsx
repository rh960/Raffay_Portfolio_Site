"use client";
import { DATA } from "@/data/portfolio";
import { RevealSection, SectionTitle } from "./UI";

const contacts = [
  { label: "Email", value: "raffayhassan772@gmail.com", href: `mailto:${DATA.basics.email}`, color: "#0EA5E9" },
  { label: "Phone", value: "07404039865", href: `tel:${DATA.basics.phone}`, color: "#0EA5E9" },
  { label: "LinkedIn", value: "linkedin.com/in/raffay-hassan", href: DATA.basics.linkedin, color: "#6366F1" },
  { label: "Research Blog", value: "Autonomous Systems Blog", href: DATA.basics.blog, color: "#6366F1" },
];

export default function Contact() {
  return (
    <RevealSection id="contact" style={{ position: "relative", zIndex: 1, padding: "110px 24px 160px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionTitle label="Contact" />
        <p style={{ color: "#64748B", fontSize: 14, maxWidth: 480, lineHeight: 1.8, marginBottom: 48 }}>
          Currently seeking opportunities to contribute to real-world engineering solutions. Feel free to reach out.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{
              display: "block", padding: "22px 22px",
              border: "1px solid rgba(15,23,42,0.1)", borderRadius: 10,
              textDecoration: "none", background: "rgba(255,255,255,0.7)",
              boxShadow: "0 2px 8px rgba(15,23,42,0.05)", transition: "all 0.2s ease",
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${c.color}40`;
                el.style.background = `${c.color}08`;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = `0 8px 24px ${c.color}18`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(15,23,42,0.1)";
                el.style.background = "rgba(255,255,255,0.7)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 8px rgba(15,23,42,0.05)";
              }}
            >
              <p style={{ fontFamily: "monospace", fontSize: 8, letterSpacing: 4, color: c.color, marginBottom: 10, textTransform: "uppercase" }}>{c.label}</p>
              <p style={{ color: "#475569", fontSize: 12, wordBreak: "break-all" }}>{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
