module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage:{
        'mobile' : "url(./Asset/Img/pattern-background-mobile.svg)",
        'desc' : "url(./Asset/Img/pattern-background-desktop.svg)"
      },

      screens :{
        'mobile': '360px',
        'desc': '1020px'
      },


        colors :{
          primary: {
            'main' : "hsl(233, 47%, 7%)",
            'card' :  "hsl(244, 38%, 16%)",
            'accent' : "hsl(277, 64%, 61%)",
            'accent-50' : "hsl(277, 64%, 61%,0.5)",
            
          },

          neutral: {
            "para" : " hsla(0, 0%, 100%, 0.75)", // main paragraph
             "stats"  : " hsla(0, 0%, 100%, 0.6)", //stat heading
          }
        },

        fontFamily:{
          "font-inter" : 'Inter',
          "font-lexend": 'Lexend Deca'
        },

        fontWeight:{
          reg : '500',
          med : "700",
          bold : "900"
        }
    },
  },

  variant:{
    extend:{
     
    }
  },
  plugins: [
    require('./src/Asset/Plugins/customFont')
  ]
}
