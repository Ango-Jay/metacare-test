const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "xxs": "375px",
      "xs": "425px",
      'rs': { 'raw': '(min-width: 500px) and (max-height: 600px)' },
      ...defaultTheme.screens,
    },
    extend: {
      maxWidth: {
        "5": "5rem",
        "16": "16rem"
      },
      minHeight: {
        "half": "50%",
      },
      fontFamily: {
        "gelion": ["Gelion Regular", "Helvetica"],
        "gelion-semiB": ["Gelion Semi Bold", "arial"]
      }

    },
  },
  plugins: [],
}