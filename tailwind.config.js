/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary": {
          "50": "#feefec",
          "100": "#fdded9",
          "200": "#fcbdb2",
          "300": "#fa9d8c",
          "400": "#f97c65",
          "500": "#f75b3f",
          "600": "#c64932",
          "700": "#943726",
          "800": "#632419",
          "900": "#31120d"
        }
      }
    }
  },
  plugins: [],
}

