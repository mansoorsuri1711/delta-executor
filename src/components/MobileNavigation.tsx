'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from './MobileMenuProvider';
import { ANDROID_APK_URL, BRAND_LOGO_MARK, SITE_SHORT_NAME, SOCIAL_LABELS, SOCIAL_LINKS } from '@/lib/siteConfig';
import { getLocaleFromPathname } from '@/lib/locales';
import { getMessages } from '@/lib/i18n/messages';

function MenuButton({ onClick, isOpen }: { onClick: () => void; isOpen?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
      style={{ color: 'var(--chrome-fg)' }}
      aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
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
  const t = getMessages(locale.code);

  const navSections = [
    {
      title: t.footerTools.toUpperCase(),
      items: [
        { href: '/', label: t.navGenerator },
        { href: '/download-delta-roblox', label: t.navInstagram },
        { href: '/delta-roblox-ios', label: t.navNick },
        { href: '/delta-roblox-pc', label: t.navWhatsapp },
        { href: '/delta-roblox-mac', label: 'Mac' },
        { href: '/delta-roblox-discord', label: 'Discord' },
        { href: '/how-to-use-delta-roblox', label: 'Nasıl Kullanılır' },
        { href: '/delta-roblox-comparison', label: 'Karşılaştırma' },
      ],
    },
    {
      title: t.footerGuides.toUpperCase(),
      items: [
        { href: '/delta-roblox-troubleshooting', label: 'Sorun Giderme' },
        { href: '/delta-roblox-vng', label: 'VNG (Vietnam)' },
        { href: '/blog', label: t.navBlog },
        { href: '/about-us', label: t.navAbout },
        { href: '/contact-us', label: 'İletişim' },
        { href: '/privacy', label: 'Gizlilik' },
        { href: '/disclaimer', label: 'Sorumluluk Reddi' },
      ],
    },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
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
        className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/70 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          aria-label="Menüyü kapat"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col border-l border-white/10 bg-[#0a0a0a] shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Image src={BRAND_LOGO_MARK} alt="" width={32} height={32} className="rounded-lg" />
              <span className="font-display text-sm font-bold text-white">{SITE_SHORT_NAME}</span>
            </Link>
            <MenuButton onClick={() => setIsOpen(false)} isOpen />
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-5">
            {navSections.map((section) => (
              <div key={section.title} className="mb-6">
                <p className="mb-2 text-xs font-bold tracking-wider text-white/40">{section.title}</p>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                          isActive(item.href) ? 'bg-pink/15 text-pink' : 'text-white/70 hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mb-6">
              <p className="mb-2 text-xs font-bold tracking-wider text-white/40">{t.footerSocial.toUpperCase()}</p>
              <ul className="flex flex-wrap gap-2">
                {(Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map((key) => (
                  <li key={key}>
                    {key === 'discord' ? (
                      <Link
                        href="/delta-roblox-discord"
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/70"
                      >
                        {SOCIAL_LABELS[key]}
                      </Link>
                    ) : (
                      <a
                        href={SOCIAL_LINKS[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/70"
                      >
                        {SOCIAL_LABELS[key]}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={ANDROID_APK_URL}
              download
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bfv-outline-btn inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold"
            >
              {t.makeStyles}
            </a>
          </div>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <div className="lg:hidden">
        <MenuButton onClick={() => setIsOpen(true)} isOpen={isOpen} />
      </div>
      {panel}
    </>
  );
}
