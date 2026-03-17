"use client";
import { useState, useCallback } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import SplashScreen from "@/components/SplashScreen";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [splash, setSplash] = useState(true);
  const onDone = useCallback(() => setSplash(false), []);

  if (splash) return <SplashScreen onDone={onDone} />;

  return (
    <main style={{ background: "#0D1117", minHeight: "100vh", overflowX: "hidden" }}>
      <AnimatedBackground />
      <Nav />
      <Hero />
      <Achievements />
      <Experience />
      <Skills />
      <About />
      <Contact />
      <footer style={{
        position: "relative", zIndex: 1,
        borderTop: "1px solid rgba(255,255,255,0.10)",
        padding: "22px 24px", textAlign: "center",
        fontFamily: "monospace", fontSize: 9,
        color: "rgba(240,246,252,0.38)", letterSpacing: 4,
        textTransform: "uppercase",
      }}>
        Raffay Hassan · London · 2026
      </footer>
    </main>
  );
}
