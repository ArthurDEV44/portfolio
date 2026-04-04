"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/hooks/useTheme";

const MeshGradient = dynamic(
  () => import("@/components/ui/mesh-gradient").then((mod) => mod.MeshGradient),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-cyan-50/30 to-emerald-50/30 dark:from-slate-950 dark:via-emerald-950 dark:to-cyan-950" />
    ),
  },
);

const LIGHT_COLORS = [
  "#f8fafc", // Slate 50
  "#ecfdf5", // Emerald 50
  "#ccfbf1", // Teal 100
  "#a5f3fc", // Cyan 200
];

const DARK_COLORS = [
  "#020617", // Slate 950
  "#064e3b", // Emerald 900
  "#0d9488", // Teal 600
  "#22d3ee", // Cyan 400
];

export function HeroBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;

  return (
    <div className="absolute inset-0 z-0">
      <MeshGradient
        colors={colors}
        density={[0.04, 0.12]}
        amplitude={400}
        seed={42}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)"
            : "radial-gradient(ellipse at center, transparent 0%, rgba(250,250,250,0.5) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgba(5,5,5,0.4), transparent, rgba(5,5,5,0.9))"
            : "linear-gradient(to bottom, rgba(250,250,250,0.4), transparent, rgba(250,250,250,0.9))",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-200/20 dark:bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-200/20 dark:bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
