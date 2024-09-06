/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary': '#ee0181',
        'hover': '#ff70bd',
        'secondary' : '#01ee91'
      },
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
        'round' : ["Varela Round", 'system-ui']
      },
      screens:{
        'max-md': {'max' : '767px'},
        'max-sm': {'max' : '640px'},
        'max-lg': {'max' : '1024px'}
      }
    },
  },
  plugins: [],
}

