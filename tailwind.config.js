
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
        colorButton: '#D9D9D95E',
        farmColor: '#131313',
        inputFarmColor: '#2F2F2F',
        textColor: "#848484",
        buttonFarm: "rgba(84,138,202)"
      },
      backgroundImage:{
        'sushiSnow': 'url(/src/assets/img/snowSushi.svg)',
        'samurai': "url('/src/assets/img/samurai.svg')",
        'samuraiXl': "url('/src/assets/img/samuraiXl.svg')",
        'samurai2Xl': "url('/src/assets/img/samuraiXxl.svg')"
      }
        
    },
  },
  plugins: [],
}
