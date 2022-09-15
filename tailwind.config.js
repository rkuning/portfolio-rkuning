/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        brandColor: "#fb6012",
        darkColor: "#25282a",
        midColor: "#97a2a8",
        lightColor: "#ffffff",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
