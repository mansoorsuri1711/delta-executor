"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import {
  ThemePreference,
  ResolvedTheme,
  applyResolvedTheme,
} from "@/lib/theme";

type ThemeContextValue = {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  setPreference: (next: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyResolvedTheme("dark");
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      preference: "dark",
      resolved: "dark",
      setPreference: () => {
        applyResolvedTheme("dark");
      },
    }),
    [],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
