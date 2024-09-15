/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Fira Code"],
      colors: {
        border: "#1E2D3D",
      },
    },
  },
  plugins: [],
};
