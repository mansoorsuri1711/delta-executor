'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';
import { BRAND_LOGO_MARK, SITE_NAME, SITE_SHORT_NAME } from '@/lib/siteConfig';

const navLinks = [
  { href: '/', label: 'Calculator' },
  { href: '/blox-fruits-values', label: 'Fruit Values' },
  { href: '/trade-calculator', label: 'Trade WFL' },
  { href: '/what-is-wfl', label: 'What is WFL' },
  { href: '/permanent-vs-physical-fruits', label: 'Perm vs Physical' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white/90 px-3 py-2.5 shadow-[0_12px_40px_-16px_rgba(14,10,31,0.28),0_4px_12px_-6px_rgba(139,92,246,0.2)] backdrop-blur-xl sm:px-4 sm:py-3">
        <Link href="/" className="flex min-w-0 items-center group">
          <div className="relative mr-2.5 h-9 w-9 flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-ink/10 transition group-hover:ring-teal/40 sm:h-10 sm:w-10">
            <Image
              src={BRAND_LOGO_MARK}
              alt="Blox Fruit Calculator logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="truncate font-display text-sm font-bold leading-tight text-ink sm:text-base md:text-[1.05rem]">
            <span className="hidden sm:inline">{SITE_NAME}</span>
            <span className="sm:hidden">{SITE_SHORT_NAME}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors ${
                isActive(href)
                  ? 'bg-teal/10 font-semibold text-teal-deep'
                  : 'text-ink/65 hover:bg-ink/5 hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/#calculator"
            className="inline-flex items-center rounded-xl bg-teal px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-12px_rgba(139,92,246,0.7)] transition hover:bg-teal-deep"
          >
            Open calculator
          </Link>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
