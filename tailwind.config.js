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
        '2xs': '375px',
        'xss' : '379px',
        'xsss' : '415px',
        '3xs': '425px',
        '3xss': '435px',
        '3xsss': '624px',
        '4xs': '705px',
      
     
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