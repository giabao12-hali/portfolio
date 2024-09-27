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
        brygada1918Font: ["Custom Font", "Brygada1918"]
        // Add more custom font families as needed
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

