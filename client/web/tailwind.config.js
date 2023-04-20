/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: {
          primary: '#FF2F01',
          secondary: '#FF7D01',
        },
        gray: {
          primary: '#EDEDED',
          // secondary: '#FF2F01',
        },
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
