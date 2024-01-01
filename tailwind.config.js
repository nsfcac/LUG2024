/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary: "rgb(#e90802 / <alpha-value>)",
        secondary: "rgb(#cc00ff / <alpha-value>)",
        primarytext: colors.red
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.bg-highlight': {
          backgroundColor: theme('colors.red.100'),
          backgroundImage: `linear-gradient(90deg,${theme('colors.red.100')},${theme('colors.white')},${theme('colors.red.100')})`
        }
      })
    })
  ]
}
