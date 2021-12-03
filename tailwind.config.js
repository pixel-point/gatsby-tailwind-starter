/* eslint-disable import/no-extraneous-dependencies, global-require */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  corePlugins: {
    container: false,
  },
  theme: {
    // TODO: Uncomment this part of the code and the import of "defaultTheme" above, and complete TODOs
    // fontFamily: {
    //   // TODO: Add font families
    //   //       Delete "mono" if it isn't needed
    //   sans: ['', ...defaultTheme.fontFamily.sans],
    //   mono: ['', ...defaultTheme.fontFamily.mono],
    // },
    // colors: {
    //   // TODO: Add colors
    //   // Make sure that they are prepared in the Figma and follow the naming primary/secondary/gray-${number}
    //   // Example of correctly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586876-5e834233-9639-4166-9811-b00e63820d98.png
    //   // Example of incorrectly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586974-6986149f-aee3-450c-a1dd-26e73e3aca02.png
    //   black: '',
    //   white: '',
    //   primary: {
    //     1: '',
    //   },
    //   secondary: {
    //     1: '',
    //   },
    //   gray: {
    //     1: '',
    //   },
    // },
    screens: {
      // TODO: Uncomment and change the value of 2xl breakpoint if it's needed, otherwise just delete it
      // '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '413px' },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
