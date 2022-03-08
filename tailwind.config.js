const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      maxWidth: {
        12: "30rem",
        15: "19rem",
        112: "52rem",
        120: "75rem",
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        blogger: ["BloggerSans", "sans-serif"],
      },

      spacing: {
        72: "18rem",
        84: "21rem",
        96: "25rem",
        98: "32rem",
        100: "40rem",
        12: "52rem",
        112: "97rem",
      },
      colors: {
        border: "#cdcdcd",
        rose: "#d01662",
        logo: "#2e4396",
        orange: "#f5b23e",
        gray: "#f5f5f5",
        white: "#ffffff",
        darkGray: "#707070",
        dark: "#404040",
        light: "#f1f1f1",
        newGreen: "#5aba31",
        newBlue: "#4a90e2",
      },
    },
  },
  variants: {},
  plugins: [],
};
