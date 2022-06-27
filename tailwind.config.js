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
      light_grey: '#cccccc',
      black: 'black',
      white: 'white'
    },
    fontFamily: {
      sans: ['Helvetica', 'sans-serif']
    }, 
    boxShadow: {
      btn: '1px 1px 1px rgba(0, 0, 0, 0.2)',
      btn_active: '0 0px rgba(0, 0, 0, 0.2)'
    }

  }
}
