/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': { 'max': '1023px' }, // Custom max-width breakpoint for large screens
        'max-md': { 'max': '767px' },  // Custom max-width breakpoint for medium screens
        'max-sm': { 'max': '500px' },  // Custom max-width breakpoint for small screens
      },
    },
  },
  plugins: [],
}

