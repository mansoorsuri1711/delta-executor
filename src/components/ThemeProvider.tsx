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
    applyResolvedTheme("light");
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      preference: "light",
      resolved: "light",
      setPreference: () => {
        applyResolvedTheme("light");
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
