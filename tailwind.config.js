import flowbitePlugin from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */

const colors = {
  white: '#ffffff',
  black: '#000000',
  // What name can I put to the variables that are 5 different types of green (light to darkness)?
  green: {
    75: '#80D5E3',
    100: '#3DCC79',
    200: '#2E995B',
    300: '#174D2D',
    400: '#2E4D3B',
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html", "./src/**/*.js"
  ],

  // make sure to safelist these classes when using purge
  // safelist: [
  //   'w-64',
  //   'w-1/2',
  //   'rounded-l-lg',
  //   'rounded-r-lg',
  //   'bg-gray-200',
  //   'grid-cols-4',
  //   'grid-cols-7',
  //   'h-6',
  //   'leading-6',
  //   'h-9',
  //   'leading-9',
  //   'shadow-lg'
  // ],

  // enable dark mode via class strategy
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        white: colors.white,
        black: colors.black,
        green: colors.green,
      },
      screens: {
        'md': '900px',
      },
      backgroundImage: {
        'footerImg': "url('/src/assets/img/Footer.png')",
      }
    },
  },

  // theme: {
  //   colors: {
  //     white: colors.white,
  //     black: colors.black,
  //     green: colors.green,
  //   },
  //   fontFamily: {
  //     sans: ['Graphik', 'sans-serif'],
  //     serif: ['Merriweather', 'serif'],
  //   },
  //   extend: {
  //     spacing: {
  //       '128': '32rem',
  //       '144': '36rem',
  //     },
  //     borderRadius: {
  //       '4xl': '2rem',
  //     }
  //   },
  // },

  // variants: {
  //   fill: [],
  //   extend: {
  //     borderColor: ['focus-visible'],
  //     opacity: ['disabled'],
  //   }
  // },

  plugins: [
    flowbitePlugin
  ]
}

