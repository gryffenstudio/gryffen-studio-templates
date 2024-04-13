/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'brand-black': '#303136',
                'brand-gray': '#9D9D9D',
            },
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
    },
    plugins: [],
};
