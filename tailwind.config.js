const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [
        'bg-Normal', 'bg-Grass', 'bg-Fire', 'bg-Water', 'bg-Bug', 'bg-Flying', 'bg-Poison', 'bg-Ground', 'bg-Electric',
        'bg-Rock', 'bg-Psychic', 'bg-Ghost', 'bg-Ice', 'bg-Dragon', 'bg-Steel', 'bg-Dark', 'bg-Fighting', 'bg-Fairy'
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Normal: '#9aa',
        Grass: '#6c6',
        Fire: '#fa5',
        Water: '#59d',
        Bug: '#9c3',
        Flying: '#9be',
        Poison: '#b7d',
        Ground: '#e74',
        Electric: '#fd4',
        Rock: '#cb9',
        Psychic: '#f77',
        Ghost: '#57b',
        Ice: '#7dc',
        Dragon: '#17c',
        Steel: '#69a',
        Dark: '#656',
        Fighting: '#d47',
        Fairy: '#f9e'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}