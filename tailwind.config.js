/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
      ],
  theme: {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    extend: {
        colors: {
            "primary" : "#f25f3a",
            "secondary" : "#242d52",
            "dark-grey" : "#9095a7",
            "dark" : "#1d1e25",
            "light" : "#ffefeb",
        }
    },
  },
  plugins: [],
}
