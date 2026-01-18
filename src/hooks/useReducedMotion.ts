/**
 * useReducedMotion Hook
 * Wrapper around Framer Motion's useReducedMotion with utility functions
 */

import { useReducedMotion as useMotionReducedMotion } from "motion/react";
import { reducedMotionVariants } from "@/lib/animation-variants";

/**
 * Hook that provides reduced motion preference detection
 * and utility functions for applying it to animations
 */
export function useReducedMotion() {
  const prefersReducedMotion = useMotionReducedMotion();

  /**
   * Returns the appropriate variants based on reduced motion preference
   * @param variants - The animation variants to use when motion is allowed
   * @returns The original variants or reduced motion variants
   */
  function getVariants<T>(variants: T): T | typeof reducedMotionVariants {
    return prefersReducedMotion ? reducedMotionVariants : variants;
  }

  /**
   * Returns animation props that respect reduced motion
   * Useful for inline animations
   */
  function getTransition(
    transition: Record<string, unknown>,
  ): Record<string, unknown> {
    if (prefersReducedMotion) {
      return { duration: 0 };
    }
    return transition;
  }

  return {
    prefersReducedMotion,
    getVariants,
    getTransition,
  };
}

export { reducedMotionVariants };
