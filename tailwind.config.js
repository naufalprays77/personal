/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'z-section': "url('/img/hero-pattern.svg')",
        'break-section': "url('/src/Assets/Img/break-section1.jpg')",

        // 'about-section': "url('/src/Assets/Img/bg-home-1.jpg')",
        'about-section': 'linear-gradient(to right, #1F1F1F, #32637B, #1F1F1F);',
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
