/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  allowedDevOrigins: ['127.0.0.1', 'localhost'],

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [65, 70, 75, 80, 90, 100],
    minimumCacheTTL: 0,
  },

  async redirects() {
    return [
      // Legacy anagram / prior niche routes → Yazı Stilleri IA
      { source: '/funciones', destination: '/features', permanent: true },
      { source: '/como-usar', destination: '/nasil-kullanilir', permanent: true },
      { source: '/how-it-works', destination: '/nasil-kullanilir', permanent: true },
      { source: '/how-to-use-anagram-generator', destination: '/nasil-kullanilir', permanent: true },
      { source: '/how-to-use-wordle-calculator', destination: '/nasil-kullanilir', permanent: true },
      { source: '/how-to-use-blox-fruit-calculator', destination: '/nasil-kullanilir', permanent: true },
      { source: '/anagram-solver', destination: '/sekilli-nick', permanent: true },
      { source: '/name-anagram-generator', destination: '/sekilli-nick', permanent: true },
      { source: '/what-is-an-anagram', destination: '/yazi-stilleri-nedir', permanent: true },
      { source: '/wordle-solver', destination: '/sekilli-nick', permanent: true },
      { source: '/wordle-helper', destination: '/sekilli-nick', permanent: true },
      { source: '/wordle-finder', destination: '/sekilli-nick', permanent: true },
      { source: '/5-letter-words-for-wordle', destination: '/sekilli-nick', permanent: true },
      { source: '/best-wordle-starting-words', destination: '/blog/estetik-yazi-stilleri', permanent: true },
      { source: '/trade-calculator', destination: '/', permanent: true },
      { source: '/blox-fruits-values', destination: '/', permanent: true },
      { source: '/blox-fruit-values', destination: '/', permanent: true },
      { source: '/blox-fruit-value', destination: '/', permanent: true },
      { source: '/bloxfruitsvalues', destination: '/', permanent: true },
      { source: '/values', destination: '/', permanent: true },
      { source: '/what-is-wfl', destination: '/yazi-stilleri-nedir', permanent: true },
      { source: '/permanent-vs-physical-fruits', destination: '/yazi-stilleri-nedir', permanent: true },
      { source: '/value-calculator', destination: '/', permanent: true },
      { source: '/trade', destination: '/', permanent: true },
      { source: '/trading', destination: '/', permanent: true },
      { source: '/calculator', destination: '/', permanent: true },
      { source: '/wfl', destination: '/yazi-stilleri-nedir', permanent: true },
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/pricing', destination: '/', permanent: true },
      { source: '/uk', destination: '/', permanent: true },
      { source: '/da', destination: '/', permanent: true },
      { source: '/br', destination: '/', permanent: true },
      { source: '/de', destination: '/', permanent: true },
      { source: '/blog/how-to-solve-anagrams', destination: '/blog/instagram-bio-yazi-stilleri', permanent: true },
      { source: '/blog/anagram-examples', destination: '/blog/estetik-yazi-stilleri', permanent: true },
      { source: '/blog/anagram-vs-permutation', destination: '/blog/sekilli-nick-rehberi', permanent: true },
      { source: '/blog/blox-fruits-trading-guide', destination: '/blog/instagram-bio-yazi-stilleri', permanent: true },
      { source: '/blog/how-demand-and-value-work', destination: '/blog/sekilli-nick-rehberi', permanent: true },
      { source: '/blog/blox-fruits-trading-scams', destination: '/blog/estetik-yazi-stilleri', permanent: true },
      { source: '/blog/wordle-strategy-tips', destination: '/blog/instagram-bio-yazi-stilleri', permanent: true },
      { source: '/blog/how-wordle-colors-work', destination: '/blog/sekilli-nick-rehberi', permanent: true },
      { source: '/blog/wordle-hard-mode-guide', destination: '/yazi-stilleri-nedir', permanent: true },
      { source: '/blog/best-second-wordle-guesses', destination: '/blog/estetik-yazi-stilleri', permanent: true },

      // Catch-all retired niche routes
      { source: '/compound-interest-calculator', destination: '/', permanent: true },
      { source: '/expense-ratio-calculator', destination: '/', permanent: true },
      { source: '/investment-growth-calculator', destination: '/', permanent: true },
      { source: '/bmi-chart-women', destination: '/', permanent: true },
      { source: '/healthy-bmi', destination: '/', permanent: true },
      { source: '/bmi-by-age', destination: '/', permanent: true },
      { source: '/parlay-odds-calculator', destination: '/', permanent: true },
      { source: '/parlay-payout-calculator', destination: '/', permanent: true },
      { source: '/parlay-bet-calculator', destination: '/', permanent: true },
      { source: '/nfl-parlay-calculator', destination: '/', permanent: true },
      { source: '/moneyline-parlay-calculator', destination: '/', permanent: true },
      { source: '/round-robin-calculator', destination: '/', permanent: true },
      { source: '/how-to-convert-salary-to-hourly', destination: '/', permanent: true },
      { source: '/hourly-to-salary-calculator', destination: '/', permanent: true },
      { source: '/salary-conversion-chart', destination: '/', permanent: true },
      { source: '/blog/salary-vs-hourly-pay', destination: '/blog', permanent: true },
      { source: '/blog/how-many-work-hours-in-a-year', destination: '/blog', permanent: true },
      { source: '/blog/monthly-salary-to-hourly', destination: '/blog', permanent: true },
      { source: '/blog/part-time-salary-to-hourly', destination: '/blog', permanent: true },

      // Legacy asset paths
      {
        source: '/og-image.webp',
        destination: '/feature/og-image-1200x630.png',
        permanent: true,
      },
      {
        source: '/og-image.png',
        destination: '/feature/og-image-1200x630.png',
        permanent: true,
      },
      {
        source: '/twitter-card.webp',
        destination: '/feature/twitter-card-1200x600.png',
        permanent: true,
      },
      {
        source: '/twitter-card.png',
        destination: '/feature/twitter-card-1200x600.png',
        permanent: true,
      },
      {
        source: '/feature/twitter-card-1200x675.png',
        destination: '/feature/twitter-card-1200x600.png',
        permanent: true,
      },
      {
        source: '/logo-icon-512.png',
        destination: '/android-chrome-512x512.png',
        permanent: true,
      },
      {
        source: '/logo-mark-512.png',
        destination: '/android-chrome-512x512.png',
        permanent: true,
      },
      {
        source: '/logo-512.png',
        destination: '/android-chrome-512x512.png',
        permanent: true,
      },
      {
        source: '/favicon-512x512.png',
        destination: '/android-chrome-512x512.png',
        permanent: true,
      },
      {
        source: '/maskable-icon-512x512.png',
        destination: '/android-chrome-512x512.png',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/public/.well-known/:path*',
      },
    ];
  },

  turbopack: {
    resolveAlias: {
      '../build/polyfills/polyfill-module': './src/lib/empty-polyfill.js',
      'next/dist/build/polyfills/polyfill-module': './src/lib/empty-polyfill.js',
      'next/dist/esm/build/polyfills/polyfill-module': './src/lib/empty-polyfill.js',
    },
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '../build/polyfills/polyfill-module': false,
        'next/dist/build/polyfills/polyfill-module': false,
        'next/dist/esm/build/polyfills/polyfill-module': false,
      };
    }
    return config;
  },

  async headers() {
    return [
      {
        source: '/((?!_next/static|_next/image).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/:path*.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/:path*.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/data/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },

  experimental: {
    optimizeCss: true,
    inlineCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },

  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
}

module.exports = nextConfig
