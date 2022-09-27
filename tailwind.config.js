/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Roboto", "Inter", "sans-serif"],
      rotterin: ["rotterin", "Cedarville Cursive", "cursive", "serif"],
    },
    extend: {
      colors: {
        custom: {
          black: "#202020",
          sky1: "#F6F6F6",
        },
      },
    },
  },
  plugins: [],
};
