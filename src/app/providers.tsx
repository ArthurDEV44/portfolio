"use client";

import { WebMcpProvider } from "@/components/web-mcp-provider";
import { ThemeProvider } from "@/hooks/useTheme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <WebMcpProvider />
      {children}
    </ThemeProvider>
  );
}
