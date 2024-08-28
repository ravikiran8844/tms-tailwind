/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '3rem',
      },
    },
    extend: {
      colors:{
        'orange': {
          '50': '#FFFCF5', 
          '100': '#FFF9E8', 
          '200': '#FCECC5', 
          '300': '#FCDFA4', 
          '400': '#FAB95F', 
          '500': '#F78D1E', 
          '600': '#DE7818', 
          '700': '#BA5D11', 
          '800': '#94440A', 
          '900': '#702D06', 
          '950': '#471902',
          'DEFAULT':'#F78D1E'
      },
        'rkBlack':"#2D2D2D",
        'rkGray':"#6C6C6C",

      }
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}

