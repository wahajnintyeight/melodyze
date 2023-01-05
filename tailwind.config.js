// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        text: 'text 10s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '30%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center right',
          },
          '80%': {
            'background-size': '200% 200%',
            'background-position': 'center left',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}