/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweatherFont: ["Custom Font", "Merriweather"],
        brygada1918Font: ["Custom Font", "Brygada1918"],
        buenardFont: ["Custom Font", "Buenard"],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'loop-scroll': 'scroll 15s linear infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0066ff",
          "secondary": "#00baff",
          "accent": "#00cdff",
          "neutral": "#111002",
          "base-100": "#fffde9",
          "info": "#00a1ff",
          "success": "#00c492",
          "warning": "#ffa800",
          "error": "#cc001f",
        },
      },
    ],
  },
}

