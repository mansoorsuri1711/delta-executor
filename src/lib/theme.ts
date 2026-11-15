export type ThemePreference = "light";
export type ResolvedTheme = "light";

export const THEME_STORAGE_KEY = "delta-theme-preference";

export function resolveTheme(_preference?: ThemePreference): ResolvedTheme {
  return "light";
}

export function parseThemePreference(_value?: string | null): ThemePreference {
  return "light";
}

export function applyResolvedTheme(_resolved: ResolvedTheme = "light") {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("dark");
  root.classList.add("light");
  root.style.colorScheme = "light";
  root.style.backgroundColor = "#ffffff";

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", "#ffffff");
  }

  if (document.body) {
    document.body.style.backgroundColor = "#ffffff";
  }
}

/** Inline boot script — always white/light theme. */
export const THEME_BOOT_SCRIPT = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};try{localStorage.setItem(k,"light");localStorage.removeItem("ys-theme-preference");}catch(e){}var d=document.documentElement;d.classList.remove("dark");d.classList.add("light");d.style.colorScheme="light";d.style.backgroundColor="#ffffff";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#ffffff");}catch(e){document.documentElement.classList.add("light");}})();`;
