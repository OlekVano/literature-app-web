/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#ffa400',
        blue: '#009ffd',
        black: '#232528',
        darkblue: '2a2a72',
        white: '#eaf6ff'
      }
    }
  },
  plugins: [],
}