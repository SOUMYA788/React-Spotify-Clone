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
      keyframes: {
        slideup: {
          '0%': {
            transform: 'translateY(10%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '100%': {
            transform: 'translateY(0%)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      animation: {
        slideup: 'slideup 1s 1',
      },
    },
  },
  plugins: [],
}

