/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      "light",
    ],
  },
  theme: {
    fontFamily: {
      'Roboto': "'Roboto Condensed', 'sans-serif'",
      'Poppins': "'Poppins', 'sans-serif'",
    },
    extend: {
      colors: {
        Primary_Color: '#04E762',
        Black_Color: '#020202',
        White_Color: '#fff',
        Yellow_Color: '#F5B700',
        Accent_Color: '#433BFF',
      },
    },
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
  
  plugins: [require("daisyui")],
}
