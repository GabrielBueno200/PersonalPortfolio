/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#00CC00",
        "secondary-green": "#2B4126",
        "white-green": "#C1F2B6"
      },
      backgroundSize: {
        '50%': '50%',
      },
      height: {
        '80vh': '80vh',
      },
      width: {
        '80vw': '80vw',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/typography')
  ],
}
