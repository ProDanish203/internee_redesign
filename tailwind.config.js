/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43a724",
        secondary: "#8c52fe",
      },
    },
    backgroundImage: {
      "hero-pattern":
        "linear-gradient(to right, rgba(67, 167, 36, 0.8), rgba(67, 167, 36, 0.8)), url('/src/assets/banner.jpg')",
      newsletter:
        "linear-gradient(to right, rgba(67, 167, 36, 0.8), rgba(67, 167, 36, 0.5)), url('/src/assets/newsletter.jpg')",
    },
  },
  plugins: [],
};
