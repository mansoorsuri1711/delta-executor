'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND_LOGO_MARK, CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_TAGLINE, SOCIAL_LABELS, SOCIAL_LINKS } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="relative z-20 mt-8 w-full overflow-hidden border-t border-white/10 bg-[#f8fafc] px-4 pb-8 pt-16 text-ink md:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(3,105,161,0.06),transparent_55%)]" />
      <div className="container relative mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <Image src={BRAND_LOGO_MARK} alt="" width={36} height={36} className="rounded-lg" />
              <span className="font-display text-lg font-bold text-white">{SITE_NAME}</span>
            </Link>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-white/55">{SITE_TAGLINE}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-pink hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Downloads</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white">Home</Link></li>
              <li><Link href="/download-delta-executor" className="text-white/70 hover:text-white">Download Android</Link></li>
              <li><Link href="/delta-executor-ios" className="text-white/70 hover:text-white">iOS Guide</Link></li>
              <li><Link href="/delta-executor-pc" className="text-white/70 hover:text-white">PC Guide</Link></li>
              <li><Link href="/delta-executor-mac" className="text-white/70 hover:text-white">Mac Guide</Link></li>
              <li><Link href="/delta-executor-vng" className="text-white/70 hover:text-white">VNG (Vietnam)</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Guides</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/how-to-use-delta-executor" className="text-white/70 hover:text-white">How to Use</Link></li>
              <li><Link href="/delta-executor-troubleshooting" className="text-white/70 hover:text-white">Troubleshooting</Link></li>
              <li><Link href="/delta-executor-discord" className="text-white/70 hover:text-white">Discord</Link></li>
              <li><Link href="/delta-executor-comparison" className="text-white/70 hover:text-white">Comparison</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white">Blog</Link></li>
              <li><Link href="/blog/what-is-delta-executor" className="text-white/70 hover:text-white">What Is Delta?</Link></li>
              <li><Link href="/blog/how-to-get-delta-executor-key" className="text-white/70 hover:text-white">Key System</Link></li>
              <li><Link href="/blog/is-delta-executor-safe" className="text-white/70 hover:text-white">Is It Safe?</Link></li>
              <li><Link href="/blog/delta-executor-key-not-working" className="text-white/70 hover:text-white">Key Not Working</Link></li>
              <li><Link href="/about-us" className="text-white/70 hover:text-white">About Us</Link></li>
              <li><Link href="/contact-us" className="text-white/70 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Community</h2>
            <ul className="mb-6 space-y-2.5 text-sm">
              {(Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map((key) => (
                <li key={key}>
                  {key === 'discord' ? (
                    <Link href="/delta-executor-discord" className="text-white/70 hover:text-white">
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
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/45">Legal</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="text-white/70 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-white/70 hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-sm text-white/45 sm:flex-row sm:text-left">
          <p>
            © 2026 {SITE_NAME}. All rights reserved ·{' '}
            <Link href="/" className="text-white/70 hover:text-white">{SITE_DOMAIN}</Link>
          </p>
          <p className="text-xs text-white/30 max-w-xl sm:text-right">
            {SITE_NAME} is an independent guide site. Not affiliated with or endorsed by Roblox Corporation.
            Using script executors violates Roblox Terms of Service and may result in account bans. Use at your own risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
