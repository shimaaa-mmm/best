/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ["Vazirmatn", "sans-serif"]
      },
      screens: {
        'max-sm': '375px',
        'max-md': '468px',
        'max-lg': '576px',
        'tablet': '640px',
        'desktop': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      gridTemplateRows: {
        '5': 'repeat(5, minmax(5, 1fr))',
      },
    },
  },
  plugins: [],
};
