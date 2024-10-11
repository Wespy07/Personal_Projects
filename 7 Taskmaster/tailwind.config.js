/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-xl': {'max': '1500px'}, 
        'max-lg': {'max': '1023px'}, 
        'max-x-md': {'max': '995px'}, 
        'max-md': {'max': '930px'},  
        'max-sm': {'max': '550px'},  
        'max-x-sm': {'max': '430px'},  
      },
    },
  },
  plugins: [],
}