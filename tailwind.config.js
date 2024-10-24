/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // safelist: ["text-white", "text-black", "bg-white", "bg-black", "rounded-full"],
  theme: {
    extend: {
      fontFamily:{
        integral:['"Integral CF"'],
        satoshi:['Satoshi'],
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

