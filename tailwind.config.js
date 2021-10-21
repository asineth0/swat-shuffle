const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#eeeeee",
          200: "#e0e0e0",
          300: "#bbbbbb",
          400: "#666666",
          500: "#444444",
          600: "#2a2a2a",
          700: "#1f1f1f",
          800: "#181818",
          900: "#0f0f0f",
        },
        primary: colors.purple,
      },
      cursor: {
        none: "none",
      },
    },
    fontFamily: {
      sans: "Inter, sans-serif",
      mono: "Inconsolata, monospace",
    },
  },
};
