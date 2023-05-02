/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./node_modules/flowbite/**/*.js", 'node_modules/preline/dist/*.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin'),],
}
