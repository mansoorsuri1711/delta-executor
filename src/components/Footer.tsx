'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BRAND_LOGO_MARK, CONTACT_EMAIL, SITE_DOMAIN, SOCIAL_LINKS } from '@/lib/siteConfig';
import { getLocaleFromPathname } from '@/lib/locales';
import { getMessages } from '@/lib/i18n/messages';

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getMessages(locale.code);

  return (
    <footer className="relative z-20 mt-8 w-full overflow-hidden border-t border-white/10 bg-white/[0.03] px-4 pb-8 pt-16 text-ink md:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(179,102,255,0.08),transparent_55%)]" />
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
              <li><Link href="/instagram-yazi-tipleri" className="text-white/70 hover:text-white">{t.navInstagram}</Link></li>
              <li><Link href="/sekilli-nick" className="text-white/70 hover:text-white">{t.navNick}</Link></li>
              <li><Link href="/whatsapp-yazi-stilleri" className="text-white/70 hover:text-white">{t.navWhatsapp}</Link></li>
              <li><Link href="/features" className="text-white/70 hover:text-white">Özellikler</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Rehberler</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/blog" className="text-white/70 hover:text-white">{t.navBlog}</Link></li>
              <li><Link href="/nasil-kullanilir" className="text-white/70 hover:text-white">Nasıl kullanılır</Link></li>
              <li><Link href="/yazi-stilleri-nedir" className="text-white/70 hover:text-white">{t.navWhat}</Link></li>
              <li><Link href="/about-us" className="text-white/70 hover:text-white">{t.navAbout}</Link></li>
              <li><Link href="/contact-us" className="text-white/70 hover:text-white">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">{t.footerSocial}</h2>
            <ul className="mb-6 space-y-2.5 text-sm">
              <li><a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">Instagram</a></li>
              <li><a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">Facebook</a></li>
              <li><a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">YouTube</a></li>
              <li><a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">TikTok</a></li>
              <li><a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">X</a></li>
            </ul>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/45">Yasal</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="text-white/70 hover:text-white">Gizlilik</Link></li>
              <li><Link href="/disclaimer" className="text-white/70 hover:text-white">Sorumluluk reddi</Link></li>
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
