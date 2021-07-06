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
      'sidebar-bg': 'var(--sidebar-bg)',
      'alpha-bg': 'var(--alpha-bg)',
      'layout-bg': 'var(--layout-bg)',
      'topbar-bg': 'var(--topbar-bg)',
      'player-bg': 'var(--player-bg)',
      'fg-color-bg': 'var(--fg-color)',
      'loading-bg-animation': 'var(--loading-bg-animation)'
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
      'white': 'var(--white)'
    }),
    lineHeight: {
      'normal': 'normal !important'
    },
    zIndex: {
      '0': 0,
      '1': 1,
      '2': 2,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '75': 75,
      '100': 100,
      'auto': 'auto',
    },
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