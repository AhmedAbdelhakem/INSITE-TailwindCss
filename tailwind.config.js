/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      width: {
        '1300': '1300px', 
      },
      height: {
        '400': '400px',
      },
      colors: {
        primary: '#fcaf2a',
        secondary: '#545F71',
        borderColor: '#343a40',
      },
      fontFamily: {
        display: ['Red Hat Display'],
      },
    },
  },
  plugins: [],
}

