import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    // output: 'hybrid',
    // adapter: netlify(),
    integrations: [react(), tailwind(), partytown(), robotsTxt(), sitemap()],
    prefetch: {
        prefetchAll: true
    }
});
