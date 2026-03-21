"use client";
import { useState, useEffect } from "react";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let val = 0;
    const id = setInterval(() => {
      val += Math.random() * 16 + 7;
      if (val >= 100) {
        val = 100; clearInterval(id);
        setTimeout(() => { setFading(true); setTimeout(onDone, 550); }, 250);
      }
      setProgress(val);
    }, 75);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "#F0F4F8",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      transition: "opacity 0.55s ease", opacity: fading ? 0 : 1,
      pointerEvents: fading ? "none" : "all",
    }}>
      <div style={{ position: "relative", width: 96, height: 96, marginBottom: 36 }}>
        <svg viewBox="0 0 96 96" style={{ position: "absolute", inset: 0, animation: "spin-slow 6s linear infinite" }}>
          <circle cx="48" cy="48" r="44" fill="none" stroke="url(#cg)" strokeWidth="1.5" strokeDasharray="8 6" />
          <defs>
            <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "monospace", fontSize: 26, fontWeight: 700,
          background: "linear-gradient(135deg,#0EA5E9,#6366F1)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: 3,
        }}>RH</div>
      </div>
      <p style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 6, color: "#94A3B8", textTransform: "uppercase", marginBottom: 28 }}>
        Loading Portfolio
      </p>
      <div style={{ width: 220, height: 2, background: "rgba(15,23,42,0.1)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 2,
          background: "linear-gradient(90deg,#0EA5E9,#6366F1)",
          width: `${progress}%`, transition: "width 0.1s ease",
          boxShadow: "0 0 10px rgba(14,165,233,0.5)",
        }} />
      </div>
      <p style={{ fontFamily: "monospace", fontSize: 10, color: "#CBD5E1", marginTop: 10, letterSpacing: 2 }}>
        {Math.round(progress)}%
      </p>
    </div>
  );
}
