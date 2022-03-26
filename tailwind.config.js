module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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