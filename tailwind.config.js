/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '24px',
    },
    colors: {
      'cardColor': '#FFFFFF',
      'gray': '#E6E6E6',
      'dark': '#212121',
      'white': '#FAFAFA',
      'error': '#D86161',
      'placeholder': '#7A7A7A',
      'primary': '#1597E4',
      'textColor': '#212427'
    },
    screens: {
      'sm': '340px',
      'md': '600px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

