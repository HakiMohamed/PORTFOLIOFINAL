/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0ea5e9',
          dark: '#38bdf8',
        },
        secondary: {
          DEFAULT: '#6366f1',
          dark: '#818cf8',
        },
      },
      backgroundColor: {
        dark: '#0f172a',
        'dark-lighter': '#1e293b',
      },
      textColor: {
        dark: '#f1f5f9',
      },
    },
  },
  plugins: [],
}