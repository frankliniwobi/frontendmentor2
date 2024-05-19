/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
      ],
  theme: {
    extend: {
        colors: {
            "primary" : "#f25f3a",
            "secondary" : "#242d52",
            "dark-grey" : "#9095a7",
            "dark" : "#1d1e25",
            "light" : "#ffefeb",
        },
        fontFamily: {
            "be-vietnam" : ["Be Vietnam Pro", "San Serif"]
        }
    },
  },
  plugins: [],
}
