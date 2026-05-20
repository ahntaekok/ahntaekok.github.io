/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'D2Coding', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: {
          light: '#ffffff',
          dark: '#0a0e1a',
        },
        surface: {
          light: '#f7f8fa',
          dark: '#111827',
        },
        accent: {
          light: '#0ea5e9',
          dark: '#64ffda',
        },
        muted: {
          light: '#475569',
          dark: '#94a3b8',
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'gradient': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
