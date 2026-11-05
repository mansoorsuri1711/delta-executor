export type ThemePreference = "dark";
export type ResolvedTheme = "dark";

export const THEME_STORAGE_KEY = "delta-theme-preference";

export function resolveTheme(_preference?: ThemePreference): ResolvedTheme {
  return "dark";
}

export function parseThemePreference(_value?: string | null): ThemePreference {
  return "dark";
}

export function applyResolvedTheme(_resolved: ResolvedTheme = "dark") {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("light");
  root.classList.add("dark");
  root.style.colorScheme = "dark";
  root.style.backgroundColor = "#000000";

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", "#07101f");
  }

  if (document.body) {
    document.body.style.backgroundColor = "#000000";
  }
}

/** Inline boot script — always dark; clears any legacy light preference. */
export const THEME_BOOT_SCRIPT = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};try{localStorage.setItem(k,"dark");localStorage.removeItem("ys-theme-preference");}catch(e){}var d=document.documentElement;d.classList.remove("light");d.classList.add("dark");d.style.colorScheme="dark";d.style.backgroundColor="#000000";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#07101f");}catch(e){document.documentElement.classList.add("dark");}})();`;
