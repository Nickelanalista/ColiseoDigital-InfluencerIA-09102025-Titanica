/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f97316',
          dark: '#ea580c',
          light: '#fb923c',
        },
        accent: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'shake': 'shake 1s ease-in-out both',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '10%': { transform: 'translate(-3px, -2px) rotate(-2deg)' },
          '20%': { transform: 'translate(3px, 2px) rotate(2deg)' },
          '30%': { transform: 'translate(-3px, 2px) rotate(-1deg)' },
          '40%': { transform: 'translate(3px, -2px) rotate(1deg)' },
          '50%': { transform: 'translate(-2px, -3px) rotate(-2deg)' },
          '60%': { transform: 'translate(2px, 3px) rotate(2deg)' },
          '70%': { transform: 'translate(-2px, 2px) rotate(-1deg)' },
          '80%': { transform: 'translate(2px, -2px) rotate(1deg)' },
          '90%': { transform: 'translate(-1px, -1px) rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [],
};
