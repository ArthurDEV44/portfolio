/**
 * Design Tokens - StriveX Theme
 * Centralized design system tokens for consistent styling
 */

// Colors
export const colors = {
  background: "#030610",
  foreground: "#F8FAFC",
  primary: "#F8FAFC",
  accent: "#38BDF8",
  surface: "#0F1525",
  muted: "#94A3B8",
  secondary: "#1E293B",
  destructive: "#EF4444",
  // Gradients
  heroGradient: ["#020617", "#064e3b", "#0d9488", "#22d3ee"],
} as const;

// Spacing
export const spacing = {
  section: {
    default: "py-16 sm:py-20 md:py-24 lg:py-28",
    compact: "py-12 sm:py-16",
    heroTop: "pt-24 lg:pt-44",
    heroBottom: "pb-20 lg:pb-28",
  },
  sectionHeader: {
    default: "mb-16 sm:mb-24",
    compact: "mb-12 sm:mb-16",
  },
} as const;

// Layout
export const layout = {
  container: {
    default: "max-w-[1200px] mx-auto",
    narrow: "max-w-4xl mx-auto",
  },
  padding: {
    section: "px-4 sm:px-6",
    sectionLg: "px-4 sm:px-6 lg:px-8",
  },
} as const;

// Animation
export const animation = {
  duration: {
    instant: 100,
    fast: 200,
    default: 300,
    slow: 500,
    slower: 800,
  },
  easing: {
    default: "easeOut" as const,
    spring: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
  spring: {
    default: { type: "spring" as const, stiffness: 100, damping: 20 },
    snappy: { type: "spring" as const, stiffness: 300, damping: 30 },
    bouncy: { type: "spring" as const, stiffness: 400, damping: 25 },
  },
  stagger: {
    fast: 0.05,
    default: 0.1,
    slow: 0.15,
  },
} as const;

// Z-Index
export const zIndex = {
  behind: -20,
  background: 0,
  content: 10,
  overlay: 20,
  navbar: 50,
  mobileBackdrop: 60,
  mobileMenu: 70,
} as const;

// Shadows & Glow
export const shadows = {
  glow: {
    cyan: "0 0 15px rgba(34, 211, 238, 0.3)",
    white: "0 0 40px -10px rgba(255, 255, 255, 0.3)",
  },
  glass: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
} as const;

// Utility Classes
export const classes = {
  glassCard: "bg-white/[0.03] backdrop-blur-2xl border border-white/10",
  glowLine: "bg-gradient-to-r from-transparent via-white/40 to-transparent",
  textGradient: "bg-clip-text text-transparent",
  focusRing:
    "focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
} as const;
