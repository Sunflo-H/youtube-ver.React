/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "search-light": "#ccc",
        "search-dark": "#303030",

        youtube: "#ff0000",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
