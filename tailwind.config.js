/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/App.jsx",
      "./src/components/Header/*.jsx",
      "./src/pages/About/*.jsx",
      "./src/pages/Gallery/*.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

