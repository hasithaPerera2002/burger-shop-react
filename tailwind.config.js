/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#2B2D42',
                'secondary': '#8D99AE',
                'tertiary': '#EDF2F4',
                'quaternary': '#EF233C',
                'quinary': '#D90429'
            },
            fontFamily: {
                'sans': ['Poppins', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
                'kadwa': ['Kadwa', 'serif'],
                'rampart': ['Rampart One', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 6px 20px 0 rgb(1 5 64 / 21%)'

            },
            textShadow: {
                sm: '2px 2px 2px  var(--tw-shadow-color)',
                DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
                lg: '4px 4px 8px var(--tw-shadow-color)',
                xl: '4px 4px 16px var(--tw-shadow-color)',
            }
        },
    },
    plugins: [
        plugin(function ({matchUtilities, theme}) {
                matchUtilities(
                    {
                        'text-shadow': (value) => ({
                            textShadow: value,
                        }),
                    },
                    {values: theme('textShadow')}
                )
            }
        )
    ],
}

