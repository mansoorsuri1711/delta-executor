'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';
import { ANDROID_APK_URL, BRAND_LOGO_MARK, SITE_NAME, SITE_SHORT_NAME } from '@/lib/siteConfig';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/download-delta-executor', label: 'Download' },
  { href: '/delta-executor-ios', label: 'iOS' },
  { href: '/delta-executor-pc', label: 'PC' },
  { href: '/how-to-use-delta-executor', label: 'How to Use' },
  { href: '/delta-executor-discord', label: 'Discord' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const pathname = usePathname();

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
              alt={`${SITE_NAME} logo`}
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
            <span className="hidden sm:inline">{SITE_NAME}</span>
            <span className="sm:hidden">{SITE_SHORT_NAME}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
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
            className="hidden items-center rounded-full bg-black px-4 py-2 text-sm font-semibold !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:bg-neutral-900 sm:inline-flex"
          >
            Download APK
          </a>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
