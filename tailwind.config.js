/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-success': 'linear-gradient(to right, #ffffff00, #22c55e)',
        'gradient-warning': 'linear-gradient(to right, #ff9f1c, #f09819)',
        'gradient-danger': 'linear-gradient(to right, #ffffff00, #ef4444)',
      },
      keyframes: {
        'animate-zoom-in': {
          from: {
            opacity: 0,
            transform: 'scale(0.5)',
          },
          to: {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        'animate-opacity-in': {
          from: {
            opacity: 0,
            transform: 'translateY(100%)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'animate-opacity-out': {
          from: {
            opacity: 0,
            transform: 'translateY(-100%)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'animate-fade-in': {
          from: {
            opacity: 1,
            visibility: 'visible',
          },
          to: {
            opacity: 1,
          },
        },
        'progress-bar': {
          to: {
            transform: 'scaleX(1.025)',
          },
        },
      },
      animation: {
        'zoom-in': 'animate-zoom-in 0.5s ease-in-out',
        'opacity-in': 'animate-opacity-in 0.5s ease-in-out',
        'opacity-out': 'animate-opacity-out 0.5s ease-in-out',
        'fade-in': 'animate-fade-in 5s linear',
        'progress-bar': 'progress-bar infinite 5s linear',
      },
    },
  },
  plugins: [],
};
