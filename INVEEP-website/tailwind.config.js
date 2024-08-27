/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        "scroll-right-left": "scroll-right-left 15s linear infinite",
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 1s ease-in-out",
      },
      keyframes: {
        "fade": {
          "0%": { opacity: 0 },
          "25%": { opacity: 1 },
          "75%": { opacity: 1 },
          "100%": { opacity: 0 },
        },

        "scroll-right-left": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        
      },
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
