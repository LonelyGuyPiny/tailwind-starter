/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.js",
    "./src/**/*.vue",
    "./*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'sans': ['SoleilRegular', 'Arial', 'sans-serif'],
      'book': ['SoleiBook', 'Arial', 'sans-serif'],
      'bold': ['SoleilBold', 'Arial', 'sans-serif'],
      'light': ['SoleilLight', 'Arial', 'sans-serif'],
    },
    colors:{
      white:'#FFFFFF',
      black:'#020F2B',
      purple:'#B7BDFF',
      blue:'#4A59FF',
      darkblue:'#020746',
      darkgray:'#212121',
    },
    extend: {
      backgroundImage:{
        'blue-gradient':'linear-gradient(210deg, #00075A, #020F2B, #00075A, #4A59FF)'
      }
    },
  },
  plugins: [],
}

