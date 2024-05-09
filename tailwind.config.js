
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Montserrat"]
      },
      colors: {
        primaryBg: '#101B40',
        colorButton: '#D9D9D95E'
        
      },
      backgroundImage:{
        'sushiSnow': 'url(/src/assets/img/snowSushi.svg)',
        'samurai': "url('/src/assets/img/samurai.svg')"
      }
        
    },
  },
  plugins: [],
}
