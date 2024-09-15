/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Fira Code"],
      colors: {
        border: "#1E2D3D",
      },
      backgroundImage: {
        gradient:
          " linear-gradient(150deg, rgba(23, 85, 83, 0.70) 1.7%, rgba(67, 217, 173, 0.09) 81.82%)",
      },
      boxShadow: {
        "shadow-box": "0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset",
      },
    },
  },
  plugins: [],
};
