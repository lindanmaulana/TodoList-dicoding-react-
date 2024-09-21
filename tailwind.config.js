/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'primary': "#006D77",
        "secondary": "#83C5BE",
        "third": "#FFDDD2",
        "quaternary": "#EDF6F9"
      },
      fontFamily: {
        'inter': ["Inter", "serif"]
      }
    },
  },
  plugins: [],
}

