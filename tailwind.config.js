/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F6C90E",
        "main-100": "#ddb50d",
        "main-gray": "#F5F7F8",
        "main-second": "#495E57",
        "main-third": "#45474B",
        "dark-brown": "rgba(53,52,49,1)",
        yell: "#f6e05e",
      },
      backgroundImage: {
        "hero-gradient":
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("./assets/students_5.jpeg")',
        "h-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0) 65%, #F6C90E 65%)",
        campus: "url('./assets/college_outside_1.jpeg')",
        mission: "url('./assets/students_6.jpeg')",
        "gallery-1": "url('./assets/students_1.jpeg')",
        "gallery-2": "url('./assets/students_2.jpeg')",
        "gallery-3": "url('./assets/students_3.jpeg')",
        "gallery-4": "url('./assets/class_students_3.jpeg')",
      },
      backgroundSize: {
        "full-40": "100% 40%",
      },
      backgroundPosition: {
        "bottom-10": "0 90%",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
      },
      animation: {
        pulseRing: "pulseRing 1.5s cubic-bezier(0.7, 0, 0.3, 1) infinite",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
