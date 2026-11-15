import type { Metadata, Viewport } from "next";
import { Outfit, Rajdhani } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import LocaleDocument from "@/components/LocaleDocument";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ORGANIZATION_JSON_LD } from "@/lib/appFacts";
import { THEME_BOOT_SCRIPT } from "@/lib/theme";
import {
  ASSET_VERSION,
  OG_IMAGE,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_TAGLINE,
  TWITTER_IMAGE,
} from "@/lib/siteConfig";

const bodyFont = Outfit({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  adjustFontFallback: true,
});

const displayFont = Rajdhani({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["600", "700"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
  colorScheme: "light",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Delta Executor — Android, iOS & PC Download Guides",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: "Delta Executor Team" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: `/delta-executor-logo.ico?v=${ASSET_VERSION}`, type: "image/x-icon", sizes: "256x256" },
      { url: `/favicon.ico?v=${ASSET_VERSION}`, type: "image/x-icon", sizes: "48x48" },
      { url: `/delta-executor-logo.webp?v=${ASSET_VERSION}`, type: "image/webp", sizes: "400x400" },
      { url: `/android-chrome-192x192.png?v=${ASSET_VERSION}`, type: "image/png", sizes: "192x192" },
      { url: `/android-chrome-512x512.png?v=${ASSET_VERSION}`, type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: `/delta-executor-logo.webp?v=${ASSET_VERSION}`, sizes: "400x400" }],
    shortcut: [{ url: `/delta-executor-logo.ico?v=${ASSET_VERSION}`, type: "image/x-icon" }],
  },
  alternates: {
    canonical: SITE_ORIGIN,
    languages: { en: SITE_ORIGIN, "x-default": SITE_ORIGIN },
  },
  openGraph: {
    title: "Delta Executor — Android, iOS & PC Download Guides",
    description: SITE_TAGLINE,
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Delta Executor download guides`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Executor — Android, iOS & PC Download Guides",
    description: SITE_TAGLINE,
    images: [
      {
        url: TWITTER_IMAGE,
        width: 1200,
        height: 600,
        alt: `${SITE_NAME} — deltaexecutor.com.ph`,
      },
    ],
  },
  applicationName: SITE_NAME,
  category: "Game Tools",
  classification: "Roblox Executor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`light ${bodyFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#ffffff" />
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
        <link rel="icon" href={`/delta-executor-logo.ico?v=${ASSET_VERSION}`} type="image/x-icon" sizes="256x256" />
        <link rel="shortcut icon" href={`/favicon.ico?v=${ASSET_VERSION}`} type="image/x-icon" />
        <link rel="icon" href={`/delta-executor-logo.webp?v=${ASSET_VERSION}`} type="image/webp" sizes="400x400" />
        <link rel="apple-touch-icon" href={`/delta-executor-logo.webp?v=${ASSET_VERSION}`} sizes="400x400" />
        <Script id="strip-extension-attrs" strategy="beforeInteractive">
          {`(function(){var ATTR="bis_skin_checked";function strip(n){if(!n||n.nodeType!==1)return;if(n.hasAttribute&&n.hasAttribute(ATTR))n.removeAttribute(ATTR);var list=n.querySelectorAll?n.querySelectorAll("["+ATTR+"]"):[];for(var i=0;i<list.length;i++)list[i].removeAttribute(ATTR);}strip(document.documentElement);try{new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){if(ms[i].type==="attributes")strip(ms[i].target);var nodes=ms[i].addedNodes;if(nodes){for(var j=0;j<nodes.length;j++)strip(nodes[j]);}}}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:[ATTR]});}catch(e){}})();`}
        </Script>
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json?v=${ASSET_VERSION}';document.head.appendChild(l);})();`}
        </Script>
      </head>
      <body
        className="font-sans antialiased min-h-screen flex flex-col site-atmosphere"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <MobileMenuProvider>
            <LocaleDocument />
            <Header />
            <main className="relative z-10 flex-1 pt-24">{children}</main>
            <Footer />
            <ScrollToTopWrapper />
          </MobileMenuProvider>
        </ThemeProvider>
        <WebVitalsTracker />
        <DeferredAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
