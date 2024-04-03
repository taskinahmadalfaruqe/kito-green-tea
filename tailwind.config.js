/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      "cupcake",
    ],
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "10px",
        lg: "30px",
        xl: "50px",
        "2xl": "80px",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}
