/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#2a2a2d",
        blackBg: "#0e0e0e",
        azureBlue: "#0572ee",
        skyBlue: "#3294dd",
      }
    },
  },
  plugins: [],
}

