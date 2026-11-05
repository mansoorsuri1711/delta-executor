'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CtaButton from '@/components/CtaButton';
import { CONTACT_EMAIL, SITE_DOMAIN } from '@/lib/siteConfig';
import { getLocaleFromPathname } from '@/lib/locales';
import { getMessages } from '@/lib/i18n/messages';

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getMessages(locale.code);
  const homeHref = locale.path;
  const homeHash = homeHref === '/' ? '/#generator' : `${homeHref}#generator`;

  return (
    <footer className="relative z-20 border-t border-ink/10 bg-white pt-8 pb-2 px-4 text-ink md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 font-display text-xl font-bold text-ink">{t.brand}</h2>
            <p className="mb-4 text-sm text-ink/65">{t.metaDescription}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-pink underline hover:no-underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">{t.footerTools}</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href={homeHref} className="text-ink/70 hover:text-ink hover:underline">{t.vsRow1Tool}</Link></li>
              <li><Link href="/anagram-solver" className="text-ink/70 hover:text-ink hover:underline">{t.vsRow2Tool}</Link></li>
              <li><Link href="/name-anagram-generator" className="text-ink/70 hover:text-ink hover:underline">{t.vsRow3Tool}</Link></li>
              <li><Link href="/how-to-use-anagram-generator" className="text-ink/70 hover:text-ink hover:underline">{t.howIntroLink}</Link></li>
              <li><Link href="/what-is-an-anagram" className="text-ink/70 hover:text-ink hover:underline">{t.navWhat}</Link></li>
              <li><Link href="/features" className="text-ink/70 hover:text-ink hover:underline">{t.trustLink.replace(' →', '')}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">{t.footerGuides}</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/how-to-solve-anagrams" className="text-ink/70 hover:text-ink hover:underline">Blog</Link></li>
              <li><Link href="/blog/anagram-examples" className="text-ink/70 hover:text-ink hover:underline">{t.famousBodyLink}</Link></li>
              <li><Link href="/about-us" className="text-ink/70 hover:text-ink hover:underline">{t.navAbout}</Link></li>
              <li><Link href="/contact-us" className="text-ink/70 hover:text-ink hover:underline">Contact</Link></li>
              <li><Link href="/privacy" className="text-ink/70 hover:text-ink hover:underline">Privacy</Link></li>
              <li><Link href="/disclaimer" className="text-ink/70 hover:text-ink hover:underline">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">{t.footerCtaTitle}</h2>
            <p className="mb-4 text-sm text-ink/65">{t.footerCtaBody}</p>
            <CtaButton
              href={homeHash}
              size="sm"
              ariaLabel={t.makeAnagrams}
              icon="arrow"
            >
              {t.ctaButton.toUpperCase()}
            </CtaButton>
          </div>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-4 pb-3 text-center text-sm text-ink/55">
          <p className="mb-0">
            © 2026 {t.brand}. {t.footerRights} |{' '}
            <Link href={homeHref} className="underline hover:no-underline text-ink/80">{SITE_DOMAIN}</Link>
          </p>
          <p className="mt-2 text-xs text-ink/40">{t.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
