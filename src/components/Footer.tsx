'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BRAND_LOGO_MARK, CONTACT_EMAIL, SITE_DOMAIN, SOCIAL_LABELS, SOCIAL_LINKS } from '@/lib/siteConfig';
import { getLocaleFromPathname } from '@/lib/locales';
import { getMessages } from '@/lib/i18n/messages';

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getMessages(locale.code);

  return (
    <footer className="relative z-20 mt-8 w-full overflow-hidden border-t border-white/10 bg-white/[0.03] px-4 pb-8 pt-16 text-ink md:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.08),transparent_55%)]" />
      <div className="container relative mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <Image src={BRAND_LOGO_MARK} alt="" width={36} height={36} className="rounded-lg" />
              <span className="font-display text-lg font-bold text-white">{t.brand}</span>
            </Link>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-white/55">{t.metaDescription}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-pink hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Sayfalar</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white">Ana Sayfa</Link></li>
              <li><Link href="/download-delta-roblox" className="text-white/70 hover:text-white">{t.navInstagram}</Link></li>
              <li><Link href="/delta-roblox-ios" className="text-white/70 hover:text-white">{t.navNick}</Link></li>
              <li><Link href="/delta-roblox-pc" className="text-white/70 hover:text-white">{t.navWhatsapp}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Rehberler</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/how-to-use-delta-roblox" className="text-white/70 hover:text-white">Nasıl Kullanılır</Link></li>
              <li><Link href="/delta-roblox-troubleshooting" className="text-white/70 hover:text-white">Sorun Giderme</Link></li>
              <li><Link href="/delta-roblox-mac" className="text-white/70 hover:text-white">Mac Rehberi</Link></li>
              <li><Link href="/delta-roblox-vng" className="text-white/70 hover:text-white">VNG (Vietnam)</Link></li>
              <li><Link href="/delta-roblox-discord" className="text-white/70 hover:text-white">Discord</Link></li>
              <li><Link href="/delta-roblox-comparison" className="text-white/70 hover:text-white">Karşılaştırma</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white">{t.navBlog}</Link></li>
              <li><Link href="/blog/delta-executor-key-system" className="text-white/70 hover:text-white">Anahtar Sistemi</Link></li>
              <li><Link href="/blog/is-delta-executor-safe" className="text-white/70 hover:text-white">Güvenlik</Link></li>
              <li><Link href="/about-us" className="text-white/70 hover:text-white">{t.navAbout}</Link></li>
              <li><Link href="/contact-us" className="text-white/70 hover:text-white">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">{t.footerSocial}</h2>
            <ul className="mb-6 space-y-2.5 text-sm">
              {(Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map((key) => (
                <li key={key}>
                  {key === 'discord' ? (
                    <Link href="/delta-roblox-discord" className="text-white/70 hover:text-white">
                      {SOCIAL_LABELS[key]}
                    </Link>
                  ) : (
                    <a
                      href={SOCIAL_LINKS[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white"
                    >
                      {SOCIAL_LABELS[key]}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/45">Yasal</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="text-white/70 hover:text-white">Gizlilik</Link></li>
              <li><Link href="/disclaimer" className="text-white/70 hover:text-white">Sorumluluk Reddi</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-sm text-white/45 sm:flex-row sm:text-left">
          <p>
            © 2026 {t.brand}. {t.footerRights} ·{' '}
            <Link href="/" className="text-white/70 hover:text-white">{SITE_DOMAIN}</Link>
          </p>
          <p className="text-xs text-white/30 max-w-xl sm:text-right">{t.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
