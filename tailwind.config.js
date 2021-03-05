module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#5514b4',
      white: '#ffffff',
      grey3: '#333333'
    },
    fontFamily: {
      'default': ['Calibri', 'Open Sans', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
