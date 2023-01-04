/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#222222',
      gray: '#454545',
      'gray-dark': '#454545',
      'gray-light': '#9CAEBB',
      green: '#27AE60',
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
