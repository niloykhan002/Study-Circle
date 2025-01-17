/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c2410c",
        secondary: "#ffedd5",
        rare: "#fff7ed",
      },
    },
  },
  plugins: [require("daisyui")],
};
