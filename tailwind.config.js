module.exports = {
  purge: [
    './src/**/*.html',
    './assets/**/*.js',
    './assets/**/*.css',
    './assets/**/*.pcss',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': "#F89283"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
