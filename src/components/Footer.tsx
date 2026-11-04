import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_TAGLINE } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-ink/10 bg-white pt-8 pb-2 px-4 text-ink md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 font-display text-xl font-bold text-ink">{SITE_NAME}</h2>
            <p className="mb-4 text-sm text-ink/65">{SITE_TAGLINE}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-teal underline hover:no-underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">Tools</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-ink/70 hover:text-ink hover:underline">Blox Fruit Calculator</Link></li>
              <li><Link href="/trade-calculator" className="text-ink/70 hover:text-ink hover:underline">Trade WFL calculator</Link></li>
              <li><Link href="/blox-fruits-values" className="text-ink/70 hover:text-ink hover:underline">Blox fruit values</Link></li>
              <li><Link href="/how-to-use-blox-fruit-calculator" className="text-ink/70 hover:text-ink hover:underline">How to use</Link></li>
              <li><Link href="/what-is-wfl" className="text-ink/70 hover:text-ink hover:underline">What is WFL</Link></li>
              <li><Link href="/permanent-vs-physical-fruits" className="text-ink/70 hover:text-ink hover:underline">Permanent vs physical</Link></li>
              <li><Link href="/features" className="text-ink/70 hover:text-ink hover:underline">Features</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/blox-fruits-trading-guide" className="text-ink/70 hover:text-ink hover:underline">Trading guide</Link></li>
              <li><Link href="/blog/how-demand-and-value-work" className="text-ink/70 hover:text-ink hover:underline">Demand &amp; value</Link></li>
              <li><Link href="/blog/blox-fruits-trading-scams" className="text-ink/70 hover:text-ink hover:underline">Avoid trading scams</Link></li>
              <li><Link href="/about-us" className="text-ink/70 hover:text-ink hover:underline">About</Link></li>
              <li><Link href="/contact-us" className="text-ink/70 hover:text-ink hover:underline">Contact</Link></li>
              <li><Link href="/privacy" className="text-ink/70 hover:text-ink hover:underline">Privacy</Link></li>
              <li><Link href="/disclaimer" className="text-ink/70 hover:text-ink hover:underline">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">Trade smarter</h2>
            <p className="mb-4 text-sm text-ink/65">
              Check value, demand, and W/F/L before you accept — free in your browser.
            </p>
            <CtaButton
              href="/#calculator"
              size="sm"
              ariaLabel="Open the free Blox Fruit Calculator"
              icon="arrow"
            >
              OPEN CALCULATOR
            </CtaButton>
          </div>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-4 pb-3 text-center text-sm text-ink/55">
          <p className="mb-0">
            © 2026 {SITE_NAME}. All rights reserved. |{' '}
            <Link href="/" className="underline hover:no-underline text-ink/80">{SITE_DOMAIN}</Link>
          </p>
          <p className="mt-2 text-xs text-ink/40">
            Unofficial fan tool. Not affiliated with Blox Fruits, Roblox Corporation, or any value list publisher.
          </p>
        </div>
      </div>
    </footer>
  );
}
