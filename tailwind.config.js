/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'Outfit', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'sans-serif'],
        gulkave: ['var(--font-display)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // BloxFruitsValues-inspired dark tokens (mapped for existing class names)
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        brand: {
          DEFAULT: '#07070a',
          soft: '#0a0a0a',
          deep: '#111114',
          glow: '#00d4ff',
        },
        mist: '#1a1a1f',
        blush: '#16121f',
        ink: '#fafafa',
        pink: {
          DEFAULT: '#00d4ff',
          soft: '#5ce1ff',
          deep: '#00b8e6',
        },
        coral: {
          DEFAULT: '#f0c420',
          deep: '#d4a017',
        },
        violet: {
          DEFAULT: '#00d4ff',
          soft: '#5ce1ff',
          deep: '#8b5cf6',
        },
        orange: {
          DEFAULT: '#f0c420',
          soft: '#fcd34d',
          deep: '#d4a017',
        },
        emerald: {
          DEFAULT: '#20c0a0',
          soft: '#2dd4bf',
          deep: '#0f766e',
        },
        lilac: '#3a2a55',
        teal: {
          DEFAULT: '#00d4ff',
          deep: '#8b5cf6',
        },
        sky: '#20c0a0',
        gold: '#f0c420',
        primary: {
          DEFAULT: '#00d4ff',
          foreground: '#fafafa',
        },
        secondary: '#0a0a0a',
        accent: '#00d4ff',
        sunrise: '#f0c420',
        indigo: {
          DEFAULT: '#8b5cf6',
          deep: '#0b1a28',
          soft: '#5ce1ff',
        },
        scrim: '#000000',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow-primary': '0 0 40px -10px rgba(0, 212, 255, 0.45)',
        'card-dark': '0 24px 60px -28px rgba(0, 0, 0, 0.8)',
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
