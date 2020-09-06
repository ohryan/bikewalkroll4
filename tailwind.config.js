module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Signika', 'serif'],
      'display': ['Roboto', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        green: {
          default: '#6bb034',
        },
        current: {
          default: '#3e3d35',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
