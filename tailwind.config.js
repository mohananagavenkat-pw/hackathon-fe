/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const { color, boxShadow, screens } = require("@pwskills/rachnaui/theme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: color,
    boxShadow,
    screens,
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
    },
  },
};
