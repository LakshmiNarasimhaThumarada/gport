/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0ea5e9', // Sky-500 (Neon Blue)
                secondary: '#09090b', // Zinc-950 (Dark background)
                accent: '#a855f7', // Purple-500 (Neon Purple)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
