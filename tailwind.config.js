/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#C3110C',
        primaryContent: '#C3110C',
        primarySubcontent: '#E6501B',
        primaryBase: '#740A03',
        primaryAccent: '#740A03',
        primaryBg: '#280905',
      },
    },
  },
  plugins: [],
}

