/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        twitterWhite: '#e7e9ea',
        twitterBlue: '#308cd8',
        twitterBorder: '#2f3336',
        twitterLightGray: '#71767b',
        twitterDarkGray: '#17181c',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#65C3C8',
          secondary: '#EF9FBC',
          accent: '#EEAF3A',
          neutral: '#291334',
          'base-100': '#FAF7F5',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
