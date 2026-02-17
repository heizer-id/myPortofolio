import type { Config } from 'tailwindcss'

export default <Config>{
    content: [
        './app/components/**/*.{js,vue,ts}',
        './app/layouts/**/*.vue',
        './app/pages/**/*.vue',
        './app/plugins/**/*.{js,ts}',
        './app/app.vue',
        './app/error.vue'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1e3a8a', // Deep Blue
                secondary: '#0891b2', // Cyan/Teal
                accent: '#f59e0b', // Amber
                dark: '#0f172a', // Slate 900
                light: '#f8fafc', // Slate 50
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Usng Inter as proxy for Geist Sans
                display: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
