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
        // Purple brand from Blox Fruit Calculator logo
        brand: {
          DEFAULT: '#F5F3FB',
          soft: '#FFFFFF',
          deep: '#EDE9FE',
          glow: '#8B5CF6',
        },
        mist: '#E9E4F8',
        blush: '#F5F3FB',
        ink: '#0E0A1F',
        pink: {
          DEFAULT: '#8B5CF6',
          soft: '#A78BFA',
          deep: '#6D28D9',
        },
        coral: {
          DEFAULT: '#EA8C00',
          deep: '#C2410C',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          soft: '#A78BFA',
          deep: '#6D28D9',
        },
        orange: {
          DEFAULT: '#EA8C00',
          soft: '#F59E0B',
          deep: '#C2410C',
        },
        emerald: {
          DEFAULT: '#7C3AED',
          soft: '#A78BFA',
          deep: '#5B21B6',
        },
        lilac: '#C4B5FD',
        // Primary action token used across UI (mapped to purple)
        teal: {
          DEFAULT: '#8B5CF6',
          deep: '#6D28D9',
        },
        sky: '#A78BFA',
        gold: '#EA8C00',
        primary: '#F5F3FB',
        secondary: '#FFFFFF',
        accent: '#8B5CF6',
        sunrise: '#EA8C00',
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
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
