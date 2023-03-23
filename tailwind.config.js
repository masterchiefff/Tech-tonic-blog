/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '2rem',
        flexGrow: {
          1: '1',
          2: '2',
          3: '3',
          4: '4',
        },
        gap: {
          '1': '1rem',
        }
      }, 
    },
  },
  plugins: [],
}
