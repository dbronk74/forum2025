/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { portal: "#0ea5e9", glyph: "#a78bfa" },
    },
  },
  plugins: [],
}