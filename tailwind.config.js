/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'xss': '325px',
        '2xss': '330px',
        '2xs': '347px',
        '3xs': '403px',
        '4xs':'431px',
        '5xs': '476px',
        '6xs': '443px',
        '7xs': '505px',
        '8xs': '705px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}