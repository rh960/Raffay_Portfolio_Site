import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raffay Hassan — Portfolio",
  description:
    "Computer Systems Engineer specialising in Autonomous Systems, Sensor Fusion, and Digital Twins.",
  keywords: ["Raffay Hassan", "Portfolio", "Autonomous Systems", "Sensor Fusion", "Digital Twin", "Middlesex University"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
