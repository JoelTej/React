const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
        lato: ['Lato', 'sans-serif'],
    },
    colors: {
        "special-gray": '#F5F0F0',
        red: colors.red,
        white: colors.white,
    },
    extend: {},
  },
  plugins: [],
}
