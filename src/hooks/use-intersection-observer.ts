"use client";

import { useEffect } from "react";

/**
 * Hook personnalisé pour observer l'intersection des éléments avec le viewport
 * Utilisé pour déclencher les animations au scroll
 */
export function useIntersectionObserver(targetClass: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const elements = document.querySelectorAll(`.${targetClass}`);
    for (const element of elements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [targetClass]);
}

