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
        merriweatherFont: ["Merriweather", "Custom Font"],
        brygada1918Font: ["Brygada1918", "Custom Font"],
        buenardFont: ["Buenard", "Custom Font"],
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
        darkTheme: {
          "primary": "#f5f4f2",
          "secondary": "#424244",
          "accent": "#7f7e7c",
          "neutral": "#504f4d",
          "base-100": "#222222",
          "info": "#d6d5d3",
          "success": "#f9f6df",
          "warning": "#c2c1bc",
          "error": "#881337",
        }
      },
      
    ],
  },
}

