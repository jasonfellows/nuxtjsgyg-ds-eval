/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.vue",
    "./src/pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    fontSize: {
      base: ["16px", "22px"],
      lg: ["20px", "24px"],
      xl: ["24px", "30px"],
    },
    extend: {
      colors: {
        "label-primary": "#1A2B49",
        "interactive-primary": "#0071EB",
      },
      fontFamily: {
        "sans": ["GT Eesti"]
      }
    },
  },
  plugins: [],
}
