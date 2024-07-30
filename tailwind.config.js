/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#5CC59E",
        secondary: "#67F494",
        blue: "#6683E7",
        background: "#1A2B42",
        grey: "#363A51",
        lightgrey: "#4C5267",
        dark: "#1D2430",
        "body-color": {
          DEFAULT: "#788293",
          dark: "#959CB1",
        },
      },
    },
  },
  plugins: [],
};

