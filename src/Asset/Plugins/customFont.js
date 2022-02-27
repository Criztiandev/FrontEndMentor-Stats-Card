const plugin = require('tailwindcss/plugin')

let customSize = {}

const size = [...Array(1000).keys()] 
size.forEach(numbers =>{
    customSize[`.text-${numbers}px`] = {fontSize : numbers+ "px"}
    customSize[`.w-${numbers}px`] = {width : numbers + "px"}
    customSize[`.h-${numbers}px`] = {height : numbers + "px"}
})

module.exports = plugin.withOptions(() =>{
    return function({addUtilities}){
        addUtilities(customSize)
    }
})