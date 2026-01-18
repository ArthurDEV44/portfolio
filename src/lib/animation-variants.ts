/**
 * Animation Variants - Centralized Framer Motion variants
 * Provides consistent animations across all components
 */

import { animation } from "./design-tokens";

// ============================================
// VIEWPORT CONFIG
// ============================================

export const viewportConfig = {
  once: true,
  margin: "-100px",
} as const;

export const viewportConfigNear = {
  once: true,
  margin: "-50px",
} as const;

// ============================================
// SPRING CONFIGS
// ============================================

export const springDefault = animation.spring.default;
export const springSnappy = animation.spring.snappy;
export const springBouncy = animation.spring.bouncy;

// ============================================
// CONTAINER VARIANTS (for staggered children)
// ============================================

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animation.stagger.default,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animation.stagger.fast,
    },
  },
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animation.stagger.slow,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// ITEM VARIANTS
// ============================================

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springDefault,
  },
};

export const fadeInUpSmall = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springDefault,
  },
};

export const fadeInScale = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springDefault,
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: animation.duration.slow / 1000,
      ease: animation.easing.default,
    },
  },
};

// ============================================
// HEADER VARIANTS
// ============================================

export const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: animation.easing.default,
    },
  },
};

// ============================================
// BADGE VARIANTS (with custom delay)
// ============================================

export const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8 + i * 0.05,
      ...springDefault,
    },
  }),
};

// ============================================
// LINK VARIANTS (for mobile menu)
// ============================================

export const linkVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05 },
  }),
};

// ============================================
// MENU VARIANTS
// ============================================

export const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: springSnappy,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: springSnappy,
  },
};

// ============================================
// REDUCED MOTION VARIANTS
// ============================================

export const reducedMotionVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

// ============================================
// MICRO-INTERACTIONS
// ============================================

export const hoverScale = {
  scale: 1.02,
  transition: springSnappy,
};

export const tapScale = {
  scale: 0.98,
};

export const hoverLift = {
  y: -4,
  transition: springSnappy,
};

// ============================================
// UTILITY: Get variants with reduced motion support
// ============================================

export function getVariants<T>(
  variants: T,
  prefersReducedMotion: boolean | null,
): T | typeof reducedMotionVariants {
  return prefersReducedMotion ? reducedMotionVariants : variants;
}
