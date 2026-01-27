/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    bg: '#ffffff',
                    secondary: '#f9fafb',
                },
                text: {
                    primary: '#111827',
                    secondary: '#6b7280',
                },
                border: '#e5e7eb',
                accent: {
                    orange: '#f97316',
                    hover: '#ea580c',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
