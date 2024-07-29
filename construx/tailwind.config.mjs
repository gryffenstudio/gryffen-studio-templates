/** @type {import('tailwindcss').Config} */

import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                'brand-green-primary': '#899883',
                'brand-green-secondary': '#e2e76f',
                'brand-gray': '#f5f7fa',
                'brand-gray-dark': '#757575',
                'brand-gray-light': '#b3b3b3',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '24px',
                md: '80px',
                '2xl': '147px',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1440px',
            },
        },
    },
    plugins: [addDynamicIconSelectors()],
};
