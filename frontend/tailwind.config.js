/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chessboard: {
          light: '#AEE8E8',
          dark: '#2A5D84',
          hoverDark: '#3B6C9C',
        },
        ocean: {
          page: '#121E36',
        },
      }
    },
  },
  plugins: [],
}