"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-btn"
      aria-label={
        theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"
      }
    >
      {theme === "dark" ? (
        <Sun className="w-3.5 h-3.5" strokeWidth={1.5} />
      ) : (
        <Moon className="w-3.5 h-3.5" strokeWidth={1.5} />
      )}
    </button>
  );
}
