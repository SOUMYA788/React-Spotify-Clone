/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '300px': '300px',
        '600px': '600px',
        "640px": '640px',
        '734px': '734px',
        '768px': '768px',
        '1024px': '1024px',
        '1280px': '1280px',
        '1536px': '1536px',
      },
    },
  },
  plugins: [],
}

