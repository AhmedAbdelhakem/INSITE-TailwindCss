/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#fcaf2a',
        secondary: '#545F71',
        borderColor: '#343a40',
        PicksColor: '#B4B4B4',
        textWarning: '#ffc107',
        textMuted: '#6c757d',
      },
      fontFamily: {
        sans: ['Red Hat Display'],
      },
    },
    container: {
      center: true,
      padding: '20px',
    },
    maxWidth: {
      'xl': '1260px',
    }
  },
  plugins: [],
}

