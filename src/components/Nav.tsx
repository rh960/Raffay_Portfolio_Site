"use client";
import { useState, useEffect } from "react";

const LINKS = ["hero", "achievements", "experience", "skills", "about", "contact"];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    LINKS.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => { window.removeEventListener("scroll", handleScroll); obs.disconnect(); };
  }, []);

  const scroll = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        height: 56, padding: "0 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(240,244,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(15,23,42,0.08)" : "none",
        transition: "all 0.3s ease",
      }}>
        <button onClick={() => scroll("hero")} style={{
          fontFamily: "monospace", fontSize: 16, fontWeight: 700,
          color: "#0EA5E9", letterSpacing: 4, background: "none", border: "none", cursor: "pointer",
        }}>RH</button>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="hidden-mobile">
          {LINKS.filter(l => l !== "hero").map((l) => (
            <button key={l} onClick={() => scroll(l)} style={{
              background: active === l ? "rgba(14,165,233,0.1)" : "none",
              border: active === l ? "1px solid rgba(14,165,233,0.25)" : "1px solid transparent",
              padding: "5px 14px", borderRadius: 6,
              color: active === l ? "#0EA5E9" : "#64748B",
              fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
              cursor: "pointer", fontFamily: "monospace", transition: "all 0.2s",
            }}>
              {l}
            </button>
          ))}
        </div>

        <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }} className="show-mobile">
          <div style={{ width: 20, height: 1.5, background: "#0EA5E9", marginBottom: 5, transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
          <div style={{ width: 20, height: 1.5, background: "#0EA5E9", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "all 0.2s" }} />
          <div style={{ width: 20, height: 1.5, background: "#0EA5E9", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 56, left: 0, right: 0, zIndex: 49,
          background: "rgba(240,244,248,0.97)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(15,23,42,0.08)", padding: "16px 28px 24px",
        }}>
          {LINKS.filter(l => l !== "hero").map((l) => (
            <button key={l} onClick={() => scroll(l)} style={{
              display: "block", width: "100%", textAlign: "left",
              background: "none", border: "none",
              color: active === l ? "#0EA5E9" : "#64748B",
              padding: "12px 0", fontFamily: "monospace", fontSize: 12,
              letterSpacing: 3, textTransform: "uppercase", cursor: "pointer",
              borderBottom: "1px solid rgba(15,23,42,0.06)",
            }}>
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
        @media (min-width: 641px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
