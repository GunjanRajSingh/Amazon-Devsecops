/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          DEFAULT: "#131921",
          background: "#EAEDED",
          "light-blue": "#232F3A",
          yellow: "#FEBD69",
        },
      },
    },
  },
  plugins: [],
};
