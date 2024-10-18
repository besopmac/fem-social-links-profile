const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'grey': {
          '700': '#333333',
          '800': '#1F1F1F',
          '900': '#141414'
        },
        'lime': {
          '350': '#C4F82A'
        }
      }
    },
  },
  plugins: [],
}

