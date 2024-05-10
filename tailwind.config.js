
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
        'samurai': "url('/src/assets/img/samurai.svg')",
        'samuraiXl': "url('/src/assets/img/samuraiXl.svg')",
        'samurai2Xl': "url('/src/assets/img/samuraiXxl.svg')"
      },
      backgroundColor: {
        bgCustom: 'rgba(0, 0, 0, 0.3)'
      }
        
    },
  },
  plugins: [],
}
