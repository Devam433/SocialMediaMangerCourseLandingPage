/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const strokes = theme('textStrokeWidth');
      const utilities = Object.entries(strokes).reduce((acc, [key, value]) => {
        acc[`.text-stroke-${key}`] = {
          '-webkit-text-stroke-width': value,
        };
        return acc;
      }, {});
      addUtilities(utilities);
    },
  ],
}