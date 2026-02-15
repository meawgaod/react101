/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#9E3B3B',
        primaryContent: '#9E3B3B',
        primarySubcontent: '#D25353',
        primaryBase: '#EA7B7B',
        primaryAccent: '#EA7B7B',
        primaryBg: '#FFEAD3',
      },
    },
  },
  plugins: [],
}

