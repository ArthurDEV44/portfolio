"use client";

import dynamic from "next/dynamic";

// Lazy load MeshGradient - WebGL component loaded only on client
const MeshGradient = dynamic(
  () => import("@/components/ui/mesh-gradient").then((mod) => mod.MeshGradient),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-cyan-950" />
    ),
  },
);

const HERO_COLORS = [
  "#020617", // Slate 950
  "#064e3b", // Emerald 900
  "#0d9488", // Teal 600
  "#22d3ee", // Cyan 400
];

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Mesh Gradient WebGL - lazy loaded */}
      <MeshGradient
        colors={HERO_COLORS}
        density={[0.04, 0.12]}
        amplitude={400}
        seed={42}
      />

      {/* Vignette radiale */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Overlay gradient pour lisibilité texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]/90 pointer-events-none" />

      {/* Grain texture - film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
