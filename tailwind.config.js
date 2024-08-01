/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out', // Adjust duration and easing as needed
      },
      
      animation: {
        'scroll-right-left': 'scroll-right-left 15s linear infinite',
      },
      keyframes: {
        'scroll-right-left': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)', 
          },
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
      },
    },
  },
  plugins: [],
};

