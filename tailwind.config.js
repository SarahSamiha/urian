/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#023020",
        peach: "#F6C492",
      },
      fontFamily: {
        playfair: "'Playfair Display', serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

