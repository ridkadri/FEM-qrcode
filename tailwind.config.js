/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      fontFamily: {
        sans: ['Outfit','sans-serif'],
      },
      fontSize: {
        paragraph: ['15px'],
      },
      colors: {
        'background': 'hsl(212, 45%, 89%)',
        'white': 'hsl(0, 0%, 100%)',
        'gray-blue': 'hsl(220, 15%, 55%)',
        'dark-blue': 'hsl(218, 44%, 22%)'
      },
    },
  },
  plugins: [],
}