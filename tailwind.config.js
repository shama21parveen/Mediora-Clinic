/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e90ff",
        primaryDark: "#1b2c47",
        ink: "#1f2937",
        soft: "#f4f8fe",
        line: "#dce8f7",
      },
      boxShadow: {
        panel: "0 18px 40px rgba(15, 44, 76, 0.08)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
