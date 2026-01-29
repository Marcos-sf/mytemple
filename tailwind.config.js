/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        templePurple: '#4a1d4a',
        saffron: '#ff9933',
        templeGold: '#d4af37',
        templeDark: '#2a0e2a',
      },
    },
  },
  plugins: [],
}
