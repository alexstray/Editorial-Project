/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
    },
    extend: {
      backgroundOpacity: ['active'],
    },
  },
  plugins: [],
}
