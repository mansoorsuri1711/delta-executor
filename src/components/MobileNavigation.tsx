'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from './MobileMenuProvider';
import { BRAND_LOGO_MARK, SITE_SHORT_NAME } from '@/lib/siteConfig';
import LanguageSwitcher from './LanguageSwitcher';
import { getLocaleFromPathname } from '@/lib/locales';
import { getMessages } from '@/lib/i18n/messages';

function MenuButton({ onClick, isOpen }: { onClick: () => void; isOpen?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-ink/5 xl:hidden"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={!!isOpen}
      aria-controls="mobile-nav-panel"
    >
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  );
}

export default function MobileNavigation() {
  const { isOpen, setIsOpen } = useMobileMenu();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const locale = getLocaleFromPathname(pathname);
  const homeHref = locale.path;
  const t = getMessages(locale.code);

  const navSections = [
    {
      title: t.footerTools.toUpperCase(),
      items: [
        { href: '/', label: t.vsRow1Tool },
        { href: '/anagram-solver', label: t.vsRow2Tool },
        { href: '/name-anagram-generator', label: t.vsRow3Tool },
        { href: '/how-to-use-anagram-generator', label: t.howIntroLink },
        { href: '/what-is-an-anagram', label: t.navWhat },
        { href: '/features', label: t.trustLink.replace(' →', '') },
      ],
    },
    {
      title: t.footerGuides.toUpperCase(),
      items: [
        { href: '/blog', label: t.navBlog },
        { href: '/about-us', label: t.navAbout },
        { href: '/contact-us', label: 'Contact' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/disclaimer', label: 'Disclaimer' },
      ],
    },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || ['/uk', '/da', '/br', '/de'].includes(pathname);
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const panel =
    mounted &&
    createPortal(
      <div
        id="mobile-nav-panel"
        className={`fixed inset-0 z-50 xl:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-ink/40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          aria-label="Close menu overlay"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink/10 px-4 py-4">
            <Link href={homeHref} className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Image src={BRAND_LOGO_MARK} alt="" width={32} height={32} className="rounded-lg" />
              <span className="font-display text-sm font-bold text-ink">{SITE_SHORT_NAME}</span>
            </Link>
            <MenuButton isOpen onClick={() => setIsOpen(false)} />
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-5">
            <div className="mb-6">
              <p className="mb-2 text-xs font-bold tracking-wider text-ink/40">LANGUAGE</p>
              <LanguageSwitcher />
            </div>
            {navSections.map((section) => (
              <div key={section.title} className="mb-6">
                <p className="mb-2 text-xs font-bold tracking-wider text-ink/40">{section.title}</p>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href === '/' ? homeHref : item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                          isActive(item.href) ? 'bg-pink/10 text-pink-deep' : 'text-ink/75 hover:bg-ink/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-ink/10 p-4">
            <Link
              href={homeHref === '/' ? '/#generator' : `${homeHref}#generator`}
              onClick={() => setIsOpen(false)}
              className="pink-gradient-btn flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold text-white"
            >
              {t.makeAnagrams}
            </Link>
          </div>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {panel}
    </>
  );
}
