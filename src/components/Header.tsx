'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';
import { ANDROID_APK_URL, BRAND_LOGO_MARK, SITE_SHORT_NAME } from '@/lib/siteConfig';
import { getLocaleFromPathname } from '@/lib/locales';
import { getMessages } from '@/lib/i18n/messages';

export default function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getMessages(locale.code);

  const navLinks = [
    { href: '/', label: t.navGenerator },
    { href: '/download-delta-roblox', label: t.navInstagram },
    { href: '/ios-delta-roblox', label: t.navNick },
    { href: '/pc-delta-roblox', label: t.navWhatsapp },
    { href: '/mac-delta-roblox', label: 'Mac' },
    { href: '/discord-delta-roblox', label: 'Discord' },
    { href: '/how-to-use-delta-roblox', label: 'Nasıl kullanılır' },
    { href: '/blog', label: t.navBlog },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 mx-auto w-[95%] max-w-7xl 2xl:max-w-[calc(100%-5rem)]">
      <div
        className="pointer-events-auto flex items-center justify-between gap-3 rounded-full border px-3 py-2 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-4"
        style={{
          borderColor: 'var(--chrome-border)',
          backgroundColor: 'var(--chrome-bg)',
        }}
      >
        <Link href="/" className="flex min-w-0 items-center gap-2.5 group pl-1">
          <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-[color:var(--chrome-border)] transition group-hover:ring-pink/50 sm:h-10 sm:w-10">
            <Image
              src={BRAND_LOGO_MARK}
              alt={`${t.brand} logo`}
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span
            className="truncate font-display text-sm font-bold leading-tight sm:text-base"
            style={{ color: 'var(--chrome-fg)' }}
          >
            <span className="hidden sm:inline">{t.brand}</span>
            <span className="sm:hidden">{SITE_SHORT_NAME}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                isActive(href) ? 'font-semibold' : 'hover:opacity-100'
              }`}
              style={{
                color: isActive(href) ? 'var(--chrome-fg)' : 'var(--chrome-fg-muted)',
                backgroundColor: isActive(href) ? 'var(--chrome-hover)' : 'transparent',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={ANDROID_APK_URL}
            download
            rel="noopener noreferrer"
            className="hidden items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition hover:bg-primary/90 sm:inline-flex"
          >
            {t.makeStyles}
          </a>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
