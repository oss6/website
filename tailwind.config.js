const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: '#000',
        white: '#fff',

        gray: colors.warmGray,
        red: colors.red,
        blue: colors.lightBlue,
        amber: colors.amber,
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: true,
    content: ['./_site/**/*.html']
  }
};
