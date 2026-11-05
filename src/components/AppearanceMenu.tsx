"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import type { ThemePreference } from "@/lib/theme";

const OPTIONS: Array<{
  id: ThemePreference;
  label: string;
  icon: React.ReactNode;
}> = [
  {
    id: "light",
    label: "Light",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
  {
    id: "dark",
    label: "Dark",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 14.5A8.5 8.5 0 1110.5 3a7 7 0 0010.5 11.5z" />
      </svg>
    ),
  },
  {
    id: "auto",
    label: "Auto",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    ),
  },
];

export default function AppearanceMenu() {
  const { preference, setPreference, resolved } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-label="Appearance"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[color:var(--chrome-fg-muted)] transition hover:bg-[color:var(--chrome-hover)] hover:text-[color:var(--chrome-fg)]"
      >
        {resolved === "dark" ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 14.5A8.5 8.5 0 1110.5 3a7 7 0 0010.5 11.5z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </button>

      {open ? (
        <div
          id={menuId}
          role="dialog"
          aria-label="Appearance"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-[70] w-[17.5rem] rounded-2xl border border-[color:var(--chrome-border)] bg-[color:var(--chrome-menu-bg)] p-3 shadow-2xl backdrop-blur-xl"
        >
          <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--chrome-fg-muted)]">
            Appearance
          </p>
          <div className="grid grid-cols-3 gap-1 rounded-xl bg-[color:var(--chrome-menu-inset)] p-1">
            {OPTIONS.map((option) => {
              const active = preference === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setPreference(option.id);
                    setOpen(false);
                  }}
                  className={`flex flex-col items-center gap-1 rounded-lg px-2 py-2 text-[11px] font-medium transition ${
                    active
                      ? "bg-[color:var(--chrome-menu-active)] text-[color:var(--chrome-fg)]"
                      : "text-[color:var(--chrome-fg-muted)] hover:text-[color:var(--chrome-fg)]"
                  }`}
                >
                  {option.icon}
                  {option.label}
                </button>
              );
            })}
          </div>
          <p className="mt-3 px-1 text-[11px] leading-relaxed text-[color:var(--chrome-fg-muted)]">
            Bu cihazda kaydedilir. Auto gündüz açık (07:00–19:00), gece koyu tema kullanır.
          </p>
        </div>
      ) : null}
    </div>
  );
}
