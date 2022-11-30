/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundOpacity: ['active'],

      height: {
        '132': '34rem',
      },

      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0%)'},
        },
      },

    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
