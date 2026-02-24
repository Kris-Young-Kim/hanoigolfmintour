import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'golf-green': '#1B5E20',
        'fairway-green': '#2E7D32',
        'golf-gold': '#F9A825',
        'sand-beige': '#D4B483',
        'vietnam-red': '#DA251D',
        'sky-blue': '#0288D1',
        'dark-green': '#1A3A1A',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out',
        'fade-in': 'fade-in 1s ease-in',
        'golf-swing': 'golf-swing 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-golf': 'bounce-golf 1s ease-in-out infinite',
      },
      keyframes: {
        'slide-down': {
          'from': { opacity: '0', transform: 'translateY(-10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'golf-swing': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-20deg)' },
          '75%': { transform: 'rotate(20deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249, 168, 37, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(249, 168, 37, 0.8)' },
        },
        'slide-in-right': {
          'from': { transform: 'translateX(100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in-up': {
          'from': { transform: 'translateY(30px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-golf': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config
