'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/locales';

/** Keeps <html lang> in sync with the active locale URL. */
export default function LocaleDocument() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocaleFromPathname(pathname);
    document.documentElement.lang = locale.hreflang;
  }, [pathname]);

  return null;
}
