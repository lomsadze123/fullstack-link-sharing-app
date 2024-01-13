/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#633CFF",
        purpleMedium: "#BEADFF",
        purpleLight: "#EFEBFF",
        blackMedium: "#333333",
        blackLight: "#737373",
        greyLight: "#D9D9D9",
        whiteBold: "#FAFAFA",
        red: "#FF3939",
      },
    },
  },
  plugins: [],
};
