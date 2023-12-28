/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'primary': '#2B2D42',
        'secondary':'#8D99AE',
        'tertiary':'#EDF2F4',
        'quaternary':'#EF233C',
        'quinary':'#D90429'
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'kadwa': ['Kadwa', 'serif']
      },
      boxShadow: {
        'card': '0 6px 20px 0 rgb(60 69 200)'

      }
    },
  },
  plugins: [],
}

