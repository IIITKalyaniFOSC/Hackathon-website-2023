/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        'mascot-break': '1760px',
        '3xl': '2200px',
      },
    },
  },
  content: [
    './index.html',
    './cp.html',
    './teams.html',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
