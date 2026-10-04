/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#006B3C',
          dark: '#004D2A',
          yellow: '#F4E500',
          lime: '#B7D936',
          soft: '#F4FAF6',
        }
      }
    },
  },
  plugins: [],
};
