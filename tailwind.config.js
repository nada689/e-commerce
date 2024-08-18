/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "transition-time": "0.5s",
      colors: {
        main: "#131118",
        secound: "#eee",
        third: "red",
      },
    },
  },
  plugins: [],
};
