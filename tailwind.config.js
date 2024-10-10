/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        merriweatherFont: ["Merriweather", "serif"],
        brygada1918Font: ["Brygada1918", "serif"],
        buenardFont: ["Buenard", "serif"],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
    screens: {
      'sm': {'min': '320px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "retro",
      "sunset"
    ],
  },
}

