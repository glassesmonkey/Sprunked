/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          main: '#0F172A',
          light: '#1E293B',
          card: '#1E293B'
        },
        primary: {
          main: '#9333EA',
          light: '#A855F7',
          dark: '#7E22CE'
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          accent: '#A855F7'
        },
        accent: {
          purple: '#9333EA',
          blue: '#3B82F6',
          pink: '#EC4899'
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
