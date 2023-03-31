/** @type {import('tailwindcss/types')} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#182E08',
          secondary: '#ABD8AE',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
