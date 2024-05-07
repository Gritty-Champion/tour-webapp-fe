/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FB520E",
        sectionColor: "#F7F7F7",
        bgBlue: "#0065B5",
        bgBlue: "#073D61",
        grayBG: '#f6f7fa',
      },
      boxShadow:{
        boxShadowHeader: '0 1px 3px 0 rgba(0, 0, 0, 0.35)'  
      },
      backgroundColor:{
        bgColor: 'rgba(255, 255, 255, 1)'
      },
      borderColor:{
         border_color: '#d9d9d9',
      },
      borderWidth:{
        border_width: '1px'
      },
    },
  },
  plugins: [],
}