/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            typography: theme => ({
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                    },
                },
            }),
            colors: {
                'border-color': '#f3f3f3',
                'border-color-dark': '#424242',
                'background-color-dark': '#242224',
            },
        },
    },
    variants: {
        extend: {
            typography: ['dark'],
        },
    },
    plugins: [],
};
