/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'z-section': "url('/img/hero-pattern.svg')",
      },
      colors: {
        blackSoft: '#1F1F1F',
        blueSoft: '#32637B',
        blueSoft2: '#254c60',
        paragraph: '#808080',
      },
    },
  },
  plugins: [],
};
