"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 text-gray-400 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors"
      aria-label={
        theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"
      }
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
