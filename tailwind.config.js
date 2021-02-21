const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: colors.blue,
      secondary: colors.cyan,
      danger: colors.red,
      muted: colors.gray,
      success: colors.green,
      white: colors.white,
      gray: colors.gray
    },
    // textColor: theme => {
    //   return {
    //     primary: colors.blue,
    //     secondary: colors.cyan,
    //     danger: colors.red,
    //     muted: colors.gray
    //   }
    // },
    // backgroundColor: theme => {
    //   return {
    //     primary: colors.blue,
    //     secondary: colors.cyan,
    //     danger: colors.red,
    //     muted: colors.gray
    //   }
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
