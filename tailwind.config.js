/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0a7ea4",
        secondary: "#687076",
        // Puedes agregar aquí los colores que necesites
      },
    },
  },
  plugins: [],
}