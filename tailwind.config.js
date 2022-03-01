const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    maxWidth: {
      12: "30rem",
      112: "52rem",
    },
    extend: {
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "25rem",
        98: "32rem",
        100: "40rem",
        12: "52rem",
        112: "97rem",
      },
    },
    colors: {
      border: "#cdcdcd",
      rose: "#d01662",
      logo: "#2e4396",
      orange: "#f5b23e",
      gray: "#f5f5f5",
      white: "#ffffff",
    },
  },

  plugins: [],
};
