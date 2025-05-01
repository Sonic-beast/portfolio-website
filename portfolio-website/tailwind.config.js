/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0a192f',
          800: '#112240',
          700: '#1e3a61',
          600: '#3a506b',
          400: '#8892b0',
          300: '#a8b2d1',
          200: '#ccd6f6',
          100: '#e6f1ff',
        },
        teal: {
          400: '#64ffda',
          300: '#85ffdb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};