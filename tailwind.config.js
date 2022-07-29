module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
   fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
      h1: ['Alegreya', 'serif'],
    },
    extend: {
     backgroundColor: {
      'main-dark-bg': '#212121',
      'main-bg': '#fff',
      'main-secondary-bg': '#c4ae78',
      'mobile-nav-bg': '#AC8E60',
      'opacity': 'rgba(255, 255, 255, 0.1)',
     },
     colors: {
      'deco-text': '#AC8E60',
      'light-gray': '#D3D3D3',
      'dark-gray': '#6a6a6a',
     }
    },
  },
  plugins: [],
}