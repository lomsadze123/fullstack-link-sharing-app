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
        blackGray: "#1A1A1A",
        greyLight: "#D9D9D9",
        whiteBold: "#FAFAFA",
        red: "#FF3939",
      },
      backgroundImage: {
        phone: "url('./assets/illustration-phone-mockup.svg')",
      },
      boxShadow: {
        chooseShadow: "0px 0px 32px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
