/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#031dfe",
        primaryDark: "#375deb",
        secondary: "#f9dfb4",
        secondary2: "#a7d9f6",
        neutralLighter: "#F0ECEC",
        neutralLight: "#aaa8bd",
        neutralDark: "#918ca6",
        neutralDarker: "#4e4c4a",
      },
    },
  },
  plugins: [],
};
