/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // main: "#82B3FF",
        // main: "rgba(249,211,61,1)",
        main: "#F6C90E",
        "main-100": "#ddb50d",
        "main-gray": "#F5F7F8",
        "main-second": "#495E57",
        "main-third": "#45474B",
        "dark-brown": "rgba(53,52,49,1)",
        yell: "#f6e05e",

        // primary: "rgba(249,211,61,1)",
      },
      backgroundImage: {
        "hero-gradient":
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("./assets/hero-2.jpg")',
        "highlight-gradient":
          "linear-gradient(120deg, rgba(249,211,61,1) 0%, rgba(249,211,61,1) 100%)",
        // "linear-gradient(120deg, #82B3FF 0%, #82B3FF 100%)",
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
