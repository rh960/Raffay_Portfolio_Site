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
        val = 100;
        clearInterval(id);
        setTimeout(() => {
          setFading(true);
          setTimeout(onDone, 550);
        }, 250);
      }
      setProgress(val);
    }, 75);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "#0D1117",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 0,
        transition: "opacity 0.55s ease",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Ring monogram */}
      <div style={{
        position: "relative",
        width: 96, height: 96,
        marginBottom: 36,
      }}>
        <svg
          viewBox="0 0 96 96"
          style={{
            position: "absolute", inset: 0,
            animation: "spin-slow 6s linear infinite",
          }}
        >
          <circle
            cx="48" cy="48" r="44"
            fill="none"
            stroke="url(#cg)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
          />
          <defs>
            <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 26, fontWeight: 700,
          background: "linear-gradient(135deg,#38BDF8,#818CF8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: 3,
        }}>
          RH
        </div>
      </div>

      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: 6,
        color: "rgba(240,246,252,0.50)",
        textTransform: "uppercase",
        marginBottom: 28,
      }}>
        Loading Portfolio
      </p>

      {/* Progress track */}
      <div style={{
        width: 220, height: 2,
        background: "rgba(255,255,255,0.13)",
        borderRadius: 2, overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          borderRadius: 2,
          background: "linear-gradient(90deg,#38BDF8,#818CF8)",
          width: `${progress}%`,
          transition: "width 0.1s ease",
          boxShadow: "0 0 10px rgba(0,212,255,0.7)",
        }} />
      </div>

      <p style={{
        fontFamily: "monospace",
        fontSize: 10, color: "rgba(240,246,252,0.38)",
        marginTop: 10, letterSpacing: 2,
      }}>
        {Math.round(progress)}%
      </p>
    </div>
  );
}
