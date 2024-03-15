/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ...colors,
      },
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif']
    },
  },
  plugins: [],
}

