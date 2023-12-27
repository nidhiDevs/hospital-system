/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'system':['system-ui'],
      'serif': ['Segoe UI Symbol', 'Georgia'],
      'mono': ['monospace'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
      'raleway': ['Raleway', 'sans-serif']

    },
    extend: {
      colors:{
        "theme1": "#FFC000	",
      }
    },
  },
  plugins: [],
}

