/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_site/**/*.{html,njk}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}