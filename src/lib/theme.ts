export type ThemePreference = "light" | "dark" | "auto";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "ys-theme-preference";

/** Daytime window (local clock): light theme. Outside = dark. */
export const DAY_START_HOUR = 7;
export const DAY_END_HOUR = 19;

export function isDaytime(date = new Date()): boolean {
  const hour = date.getHours();
  return hour >= DAY_START_HOUR && hour < DAY_END_HOUR;
}

export function resolveTheme(preference: ThemePreference, date = new Date()): ResolvedTheme {
  if (preference === "light") return "light";
  if (preference === "dark") return "dark";
  return isDaytime(date) ? "light" : "dark";
}

export function parseThemePreference(value: string | null | undefined): ThemePreference {
  if (value === "light" || value === "dark" || value === "auto") return value;
  return "auto";
}

export function applyResolvedTheme(resolved: ResolvedTheme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.classList.toggle("light", resolved === "light");
  root.style.colorScheme = resolved;
  root.style.backgroundColor = resolved === "dark" ? "#000000" : "#f8f4fc";

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", resolved === "dark" ? "#000000" : "#f8f4fc");
  }

  if (document.body) {
    document.body.style.backgroundColor = resolved === "dark" ? "#000000" : "#f8f4fc";
  }
}

/** Inline boot script — keeps FOUC away before React hydrates. */
export const THEME_BOOT_SCRIPT = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var p=localStorage.getItem(k);if(p!=="light"&&p!=="dark"&&p!=="auto")p="auto";var h=(new Date()).getHours();var r=p==="light"?"light":p==="dark"?"dark":(h>=${DAY_START_HOUR}&&h<${DAY_END_HOUR}?"light":"dark");var d=document.documentElement;d.classList.remove("light","dark");d.classList.add(r);d.style.colorScheme=r;d.style.backgroundColor=r==="dark"?"#000000":"#f8f4fc";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",r==="dark"?"#000000":"#f8f4fc");}catch(e){document.documentElement.classList.add("dark");}})();`;
