import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'brand-blue': '#A8B8C8',
                'brand-red': '#D17F7F',
                'brand-green-1': '#A3BDA2',
                'brand-green-2': '#7CC39C',
                'brand-orange': '#EAA965',
                'brand-purple': '#AB95BB',
                'brand-gray-1': '#7D7D7D',
                'brand-gray-2': '#737373',
            },
            fontFamily: {
                'visby-regular': ['VisbyRoundRegular', 'sans-serif'],
                'visby-light': ['VisbyRoundLight', 'sans-serif'],
                'visby-medium': ['VisbyRoundMedium', 'sans-serif'],
                'visby-heavy': ['VisbyRoundHeavy', 'sans-serif'],
            },
        },
    },
    plugins: [addDynamicIconSelectors()],
};
