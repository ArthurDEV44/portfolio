"use client";

import { motion, useMotionValue } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";

export function DragCarousel({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    function updateConstraints() {
      if (!containerRef.current || !stripRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const stripWidth = stripRef.current.scrollWidth;
      setDragConstraints({ left: -(stripWidth - containerWidth), right: 0 });
    }
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <div ref={containerRef}>
      <motion.div
        ref={stripRef}
        className="flex gap-6 cursor-grab active:cursor-grabbing pl-[max(1rem,calc((100vw-800px)/2+1.5rem))]"
        drag="x"
        style={{ x }}
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
        onClickCapture={(e) => {
          if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {children}
        <div className="shrink-0 w-4 sm:w-6" />
      </motion.div>
    </div>
  );
}
