/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      amaranth: ['var(--font-Amaranth)', 'sans-serif'],
      montserrat: ['var(--font-Montserrat)', 'sans-serif'],
      silkscreen: ['var(--font-Silkscreen)', 'sans-serif'],
      silkscreenExpand: ['var(--font-SilkscreenExpand)', 'sans-serif'],
    },
  },
  plugins: [],
};
