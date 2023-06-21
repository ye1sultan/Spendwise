/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                andada: ['Andada Pro', 'serif'],
                arvo: ['Arvo', 'sans-serif'],
                amiri: ['Amiri', 'serif'],
                sans: ['Open Sans', 'sans-serif'],
                cormorant: ['Cormorant Upright', 'serif'],
                montserrat: ['Montserrat', 'sans-serif']
            }
        },
    }
}