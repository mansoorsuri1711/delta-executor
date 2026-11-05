'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SITE_LOCALES, getLocaleFromPathname } from '@/lib/locales';
import { getMessages } from '@/lib/i18n/messages';

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const current = getLocaleFromPathname(pathname);
  const t = getMessages(current.code);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  function selectLocale(slug: string) {
    const next = SITE_LOCALES.find((l) => l.slug === slug) || SITE_LOCALES[0];
    setOpen(false);
    if (next.path !== pathname) router.push(next.path);
  }

  return (
    <div ref={rootRef} className="relative flex flex-col gap-1 text-left">
      {!compact && (
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/45">
          {t.languageLabel}
        </span>
      )}
      <button
        type="button"
        aria-label={t.languageLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center justify-between gap-2 rounded-xl border bg-[#F4F3FA] text-sm font-semibold leading-none text-ink outline-none transition ${
          open ? 'border-pink/40' : 'border-ink/10 hover:border-pink/30'
        } ${compact ? 'min-w-[9.5rem] py-2.5 pl-2.5 pr-2.5' : 'py-2.5 pl-3 pr-3'}`}
      >
        <span>{current.label}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 8"
          className={`h-2 w-3 shrink-0 text-ink transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={t.languageLabel}
          className="absolute left-0 top-full z-50 mt-1.5 min-w-full overflow-hidden rounded-xl border border-ink/10 bg-[#2C2C2E] py-1.5 shadow-[0_16px_40px_-12px_rgba(20,22,61,0.45)]"
        >
          {SITE_LOCALES.map((locale) => {
            const selected = locale.slug === current.slug;
            return (
              <li key={locale.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => selectLocale(locale.slug)}
                  className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden="true">
                    {selected ? (
                      <svg viewBox="0 0 12 10" className="h-3 w-3.5" fill="none">
                        <path
                          d="M1 5.2L4.2 8.5L11 1.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </span>
                  {locale.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
