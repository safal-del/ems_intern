/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {  
    colors:{
      "primarycolor":"#1034A6",
      "secondarycolor":"#03AC13"
    },
    // extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
