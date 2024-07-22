/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-1': '0px 3px 1px 0px rgba(0, 0, 0, 0.06)',
        'custom-2': '0px 3px 8px 0px rgba(0, 0, 0, 0.15)',
        'custom-3': '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}