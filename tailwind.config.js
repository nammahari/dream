/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    },
    fontFamily: {
      'display': ['Poppins', 'sans-serif'],
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

}
