/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          dark: "#54A8C7",
          DEFAULT: "#EFF7FA",
        },
        white: {
          light: "#EEEFF3",
          DEFAULT: "#fff",
        },
        black: {
          light: "#9AA9B8",
          DEFAULT: "#354053",
          dark: "#000",
        },
        gray: "#5a5959",
        red: "#fe4949",
        green: "#6cf94d",
        yellow: "#effa4c",
        blue: "#5249fa",
        skyblue: "#4de8f9",
        orange: "#fabf49",
        purple: "#7e4df9",
        pink: "#f94ded",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
});
