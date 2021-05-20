// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'sidebar': 'var(--sidebar-bg)',
      'alpha-bg': 'var(--alpha-bg)',
      'layout-bg': 'var(--layout-bg)'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'purple-primary': 'var(--purple-primary)',
      'primary': 'var(--border-primary)'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': 'var(--text-primary)',
      'secondary': 'var(--text-secondary)',
    }),
    outline: {
      'none': 'none'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}