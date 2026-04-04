"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { viewportConfig as defaultViewport } from "@/lib/animation-variants";

interface MotionContainerProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  viewport?: { once?: boolean; margin?: string };
  immediate?: boolean;
}

export function MotionContainer({
  children,
  variants,
  className,
  viewport = defaultViewport,
  immediate = false,
}: MotionContainerProps) {
  const { getVariants } = useReducedMotion();
  return (
    <motion.div
      variants={getVariants(variants)}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport })}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionItemProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
}

export function MotionItem({ children, variants, className }: MotionItemProps) {
  const { getVariants } = useReducedMotion();
  return (
    <motion.div variants={getVariants(variants)} className={className}>
      {children}
    </motion.div>
  );
}

interface MotionHeadingProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  id?: string;
}

export function MotionHeading({
  children,
  variants,
  className,
  id,
}: MotionHeadingProps) {
  const { getVariants } = useReducedMotion();
  return (
    <motion.h2 variants={getVariants(variants)} className={className} id={id}>
      {children}
    </motion.h2>
  );
}
