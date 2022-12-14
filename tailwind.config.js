/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'xxxs': '180px',
      },
      animation: {
        rotateInfinite: 'rotateInfinite 1s linear infinite',
      },
      keyframes: {
        rotateInfinite: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}