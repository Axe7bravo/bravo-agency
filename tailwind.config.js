/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                linen: '#FAF9F6',
                charcoal: '#1A1A1A',
                electricCobalt: '#0020C2',
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'], // Adding a backup sans font
            },
        },
    },
    plugins: [],
}
