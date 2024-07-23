/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: '#0E5932',
                '100': '#E3FFF0'
            },
            lineActive: {
                DEFAULT: '#F9A92A'
            },
            required:{
                DEFAULT: '#cd220c'
            }
        },
        extend: {
            boxShadow: {
                'custom-1': '0px 3px 1px 0px rgba(0, 0, 0, 0.06)',
                'custom-2': '0px 3px 8px 0px rgba(0, 0, 0, 0.15)',
                'custom-3': '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                'light-1': '0px 0px 1px 0px #0000000F',
                'light-2':  '1px 0px 8px 0px #00000026',
                'light-3': '0px 2px 0px 1px #0000000A'
            }
        },
    },
    plugins: [],
}