/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/*.js'
  ],
  theme: {
    colors: {
      blue: '#0000ff',
      green: '#5efc8d',
      lightGrey: '#cccccc',
      black: 'black',
      white: 'white'
    },
    fontFamily: {
      sans: ['Helvetica', 'sans-serif']
    },
    fontSize: {
      base: '18px',
      lg: '30px'
    },
    boxShadow: {
      DEFAULT: '1px 1px 1px rgba(0, 0, 0, 0.2)'
    }

  }
}
