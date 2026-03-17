# Raffay Hassan — Portfolio

Futuristic Next.js portfolio site built with TypeScript, Tailwind CSS, and canvas animations.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (free, ~60 seconds)

```bash
npm install -g vercel
vercel --prod
```

You'll get a live URL like: https://raffay-hassan.vercel.app

## Project Structure

```
src/
  app/
    page.tsx          ← Main page (assembles all sections)
    layout.tsx        ← Root layout + metadata
    globals.css       ← Global styles + fonts
  components/
    AnimatedBackground.tsx  ← Canvas particle mesh
    SplashScreen.tsx        ← Intro loading screen
    Nav.tsx                 ← Sticky nav with scroll spy
    Hero.tsx                ← Hero / landing section
    Achievements.tsx        ← Awards + stats
    Experience.tsx          ← Accordion project cards
    Skills.tsx              ← Skill groups + education
    About.tsx               ← Bio + interests
    Contact.tsx             ← Contact links
    UI.tsx                  ← Shared: Tag, SectionTitle, GlassCard, RevealSection
  data/
    portfolio.ts            ← All your personal data (edit this to update content)
```

## Updating Content

All your info lives in `src/data/portfolio.ts`.
Edit that file to update any text, links, skills, or experience — everything else updates automatically.
