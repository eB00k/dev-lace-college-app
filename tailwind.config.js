/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#82B3FF",
        yell: "#f6e05e",
      },
      backgroundImage: {
        "hero-gradient":
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("./assets/hero-2.jpg")',
        "highlight-gradient":
          "linear-gradient(120deg, #82B3FF 0%, #82B3FF 100%)",
        campus: "url('./assets/campus-1.jpg')",
        mission: "url('./assets/mission-1.jpg')",
        "gallery-1": "url('./assets/gallery-1.jpg')",
        "gallery-2": "url('./assets/gallery-2.jpg')",
        "gallery-3": "url('./assets/gallery-3.jpg')",
        "gallery-4": "url('./assets/gallery-4.jpg')",
      },
      backgroundSize: {
        "full-40": "100% 40%",
      },
      backgroundPosition: {
        "bottom-10": "0 90%",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
