const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    letterSpacing: {
      widest: "0.013em",
    },
    extend: {
      fontSize: {
        xxs: "0.68rem",
      },
      backgroundImage: {
        "split-blue-orange":
          "linear-gradient(to right, #1d4ed8 77% , #f5b23e 23%);",
        "hero-pattern": "url('/images/bg.jpg');",
      },
      width: {
        270: "17rem",
        260: "16rem",
        314: "19.6rem",
        365: "22rem",
      },
      boxShadow: {
        "3xl": " 0 2px 23px 0 rgba(0, 0, 0, 0.07)",
      },
      maxWidth: {
        12: "30rem",
        15: "19rem",
        112: "52rem",
        120: "75rem",
        790: "49.4rem",
        666: "41.6rem",
        1400: "87.5rem",
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
        sv: "#9b9b9b",
        dark: "#404040",
        darkblack: "#3f3f3f",
        light: "#f1f1f1",
        newGreen: "#5aba31",
        line: "#a19d9d",
        text: "#545454",
        newgray: "#f2f2f2",
        newBlue: "#4a90e2",
      },
    },
  },
  variants: {},
  plugins: [],
};
