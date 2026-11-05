/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['var(--font-gulkave)', 'var(--font-body)', 'sans-serif'],
        gulkave: ['var(--font-gulkave)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // Brand from Anagram Generator logo (indigo + magenta + gold)
        brand: {
          DEFAULT: '#F7F5FC',
          soft: '#FFFFFF',
          deep: '#EEEAF8',
          glow: '#E94E89',
        },
        mist: '#E8E4F4',
        blush: '#FDF2F7',
        ink: '#14163D',
        pink: {
          DEFAULT: '#E94E89',
          soft: '#F472B6',
          deep: '#BE185D',
        },
        coral: {
          DEFAULT: '#F5C518',
          deep: '#D4A017',
        },
        violet: {
          DEFAULT: '#2F3F9A',
          soft: '#5B6BC7',
          deep: '#1E2A6B',
        },
        orange: {
          DEFAULT: '#F5C518',
          soft: '#FCD34D',
          deep: '#D4A017',
        },
        emerald: {
          DEFAULT: '#0D9488',
          soft: '#2DD4BF',
          deep: '#0F766E',
        },
        lilac: '#C7C3E8',
        // Primary action = magenta CTA from hero mockup
        teal: {
          DEFAULT: '#E94E89',
          deep: '#BE185D',
        },
        sky: '#5B6BC7',
        gold: '#F5C518',
        primary: '#F7F5FC',
        secondary: '#FFFFFF',
        accent: '#E94E89',
        sunrise: '#F5C518',
        indigo: {
          DEFAULT: '#2F3F9A',
          deep: '#1A1B4B',
          soft: '#4C5DB5',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'tile-pop': {
          '0%': { opacity: '0', transform: 'scale(0.85) translateY(6px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'tile-pop': 'tile-pop 0.35s ease-out both',
      },
    },
  },
  plugins: [],
}
