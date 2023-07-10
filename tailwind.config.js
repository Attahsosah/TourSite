/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Dancin: ["Dancing Script","sans-serif"],
        Arvo: ["Arvo ", "sans-serif"],
        OpenSans:["Open Sans", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
