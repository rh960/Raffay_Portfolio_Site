"use client";
import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

export function Tag({ label, color = "#0EA5E9" }: { label: string; color?: string }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 4,
      border: `1px solid ${color}35`, background: `${color}12`,
      color, fontSize: 10, letterSpacing: 1,
      fontFamily: "monospace", marginRight: 6, marginBottom: 5, whiteSpace: "nowrap",
    }}>
      {label}
    </span>
  );
}

export function SectionTitle({ label }: { label: string }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <p style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 6, color: "#0EA5E9", marginBottom: 10, textTransform: "uppercase" }}>
        ── {label}
      </p>
      <div style={{ width: 44, height: 1, background: "linear-gradient(90deg,#0EA5E9,transparent)" }} />
    </div>
  );
}

export function RevealSection({ id, children, style }: { id?: string; children: ReactNode; style?: CSSProperties }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section id={id} ref={ref} style={{
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.7s ease, transform 0.7s ease", ...style,
    }}>
      {children}
    </section>
  );
}

export function GlassCard({ children, style, hoverGlow = true }: { children: ReactNode; style?: CSSProperties; hoverGlow?: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        border: `1px solid ${hover && hoverGlow ? "rgba(14,165,233,0.35)" : "rgba(15,23,42,0.1)"}`,
        borderRadius: 12,
        background: hover && hoverGlow ? "rgba(14,165,233,0.04)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(8px)",
        transition: "all 0.25s ease",
        transform: hover && hoverGlow ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hover && hoverGlow ? "0 8px 30px rgba(14,165,233,0.12)" : "0 2px 12px rgba(15,23,42,0.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
