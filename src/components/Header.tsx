'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';
import LanguageSwitcher from './LanguageSwitcher';
import { BRAND_LOGO_MARK, SITE_SHORT_NAME } from '@/lib/siteConfig';
import { getLocaleFromPathname } from '@/lib/locales';
import { getMessages } from '@/lib/i18n/messages';

export default function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getMessages(locale.code);
  const homeHref = locale.path;

  const navLinks = [
    { href: '/', label: t.navGenerator },
    { href: '/anagram-solver', label: t.navSolver },
    { href: '/name-anagram-generator', label: t.navNames },
    { href: '/what-is-an-anagram', label: t.navWhat },
    { href: '/blog', label: t.navBlog },
    { href: '/about-us', label: t.navAbout },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || ['/uk', '/da', '/br', '/de'].includes(pathname);
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white/90 px-3 py-2.5 shadow-[0_12px_40px_-16px_rgba(20,22,61,0.22),0_4px_12px_-6px_rgba(233,78,137,0.18)] backdrop-blur-xl sm:px-4 sm:py-3">
        <Link href={homeHref} className="flex min-w-0 items-center group">
          <div className="relative mr-2.5 h-9 w-9 flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-ink/10 transition group-hover:ring-pink/40 sm:h-10 sm:w-10">
            <Image
              src={BRAND_LOGO_MARK}
              alt={`${t.brand} logo`}
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="truncate font-display text-sm font-bold leading-tight text-ink sm:text-base md:text-[1.05rem]">
            <span className="hidden sm:inline">{t.brand}</span>
            <span className="sm:hidden">{SITE_SHORT_NAME}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href === '/' ? homeHref : href}
              className={`relative rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors ${
                isActive(href)
                  ? 'bg-pink/10 font-semibold text-pink-deep'
                  : 'text-ink/65 hover:bg-ink/5 hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher compact />
          <Link
            href={homeHref === '/' ? '/#generator' : `${homeHref}#generator`}
            className="pink-gradient-btn inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition"
          >
            {t.makeAnagrams}
          </Link>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
