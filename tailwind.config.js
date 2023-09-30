/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "staatliches": "'Staatliches', cursive",
      },
      width:{
        84: "22rem",
      },
      height:{
        84: "22rem",
      },
    },
  },
  plugins: [],
}

