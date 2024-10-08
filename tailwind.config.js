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
        secondary3: "#F9AFBF",
        neutralLighter: "#F0ECEC",
        neutralLight: "#aaa8bd",
        neutralDark: "#918ca6",
        neutralDarker: "#4e4c4a",
      },
      fontFamily: {
        thin_font: ["RalewayThin", "sans-serif"],
        regular_font: ["RalewayRegular", "sans-serif"],
        medium_font: ["RalewayMedium", "sans-serif"],
        light_font: ["RalewayLight", "sans-serif"],
        extraLight_font: ["RalewayExtraLight", "sans-serif"],
        semibold_font: ["RalewaySemiBold", "sans-serif"],
        bold_font: ["RalewayBold", "sans-serif"],
        ExtraBold_font: ["RalewayExtraBold", "sans-serif"],
        Black_font: ["RalewayBlack", "sans-serif"],
      },
    },
  },
  plugins: [],
};
