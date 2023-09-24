/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","detalle.html"],
  theme: {
    extend: {
      colors: {
        pink: "#F5CAC3",
        green: "#84A59D",
        whiteMof: "#F7EDE2"
      },
      fontFamily: {
        source: ["'Source Sans 3'"],
      },
    },
  },
  plugins: [],
}