import Link from 'next/link';
import { ANDROID_APK_URL } from '@/lib/siteConfig';

/** Default Android APK download — use for all download CTAs */
export const PRIMARY_CTA_HREF = ANDROID_APK_URL;

type IconKind = 'download' | 'arrow' | 'mail' | 'play';

type CtaSize = 'md' | 'sm';

type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  icon?: IconKind;
  size?: CtaSize;
  onClick?: () => void;
  type?: 'button' | 'submit';
  as?: 'link' | 'button';
  className?: string;
  ariaLabel?: string;
};

const ICONS: Record<IconKind, React.ReactNode> = {
  download: (
    <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  arrow: (
    <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  mail: (
    <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  play: (
    <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  ),
};

const sizeClass: Record<CtaSize, string> = {
  md: 'px-8 py-4 text-lg',
  sm: 'px-4 py-2.5 text-sm',
};

/** Match homepage outline CTAs (bfv-outline-btn) — not filled. */
const baseClass =
  'bfv-outline-btn download-btn inline-flex items-center justify-center font-semibold transition-all group';

function ButtonInner({
  children,
  icon,
  size,
}: {
  children: React.ReactNode;
  icon: IconKind;
  size: CtaSize;
}) {
  const iconWrap =
    size === 'sm'
      ? 'ml-2 inline-flex rounded-full border border-white/40 bg-white/15 p-1.5 transition-transform group-hover:scale-110'
      : 'ml-3 inline-flex rounded-full border border-white/40 bg-white/15 p-2 transition-transform group-hover:scale-110';
  const iconSvg = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <>
      <span className="text-left leading-tight">{children}</span>
      <span className={`download-icon ${iconWrap}`} style={{ color: '#ffffff' }}>
        <span className={iconSvg}>{ICONS[icon]}</span>
      </span>
    </>
  );
}

export default function CtaButton({
  href = PRIMARY_CTA_HREF,
  children,
  icon = 'arrow',
  size = 'md',
  onClick,
  type = 'button',
  as = 'link',
  className = '',
  ariaLabel,
}: CtaButtonProps) {
  const classes = `${baseClass} ${sizeClass[size]} ${className}`.trim();
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');

  if (as === 'button') {
    return (
      <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
        <ButtonInner icon={icon} size={size}>
          {children}
        </ButtonInner>
      </button>
    );
  }

  if (isExternal) {
    const isApk = href.endsWith('.apk');
    const isMail = href.startsWith('mailto:');
    return (
      <a
        href={href}
        target={isMail || isApk ? undefined : '_blank'}
        rel={isMail ? undefined : 'noopener noreferrer'}
        download={isApk || undefined}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <ButtonInner icon={icon} size={size}>
          {children}
        </ButtonInner>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      <ButtonInner icon={icon} size={size}>
        {children}
      </ButtonInner>
    </Link>
  );
}
