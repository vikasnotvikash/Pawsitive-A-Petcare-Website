/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':"rgba(212, 224, 155)"
      },
      gridTemplateColumns: {
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}

