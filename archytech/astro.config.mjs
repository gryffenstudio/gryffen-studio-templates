import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import sanity from '@sanity/astro';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

const saRedirect = () => {
    return {
        name: 'sa-redirect',
        // configureServer is server for dev; configurePreviewServer appears inop on Preview
        configureServer: (app) => {
            app.middlewares.use((req, res, next) => {
                if (
                    req.url.startsWith('/admin-blog-studio') &&
                    req.url !== '/admin-blog-studio' &&
                    // following condition allows starting vision from menu,
                    // but not from url, also browser refresh on vision still 404
                    !req.url.startsWith('/admin-blog-studio/vision')
                ) {
                    const hasMatchingRoute = false; /* for any logic to check for matching route */

                    if (!hasMatchingRoute) {
                        res.writeHead(307, {
                            Location: '/admin-blog-studio',
                        });
                        res.end();
                        return;
                    }
                }
                next();
            });
        },
    };
};

// https://astro.build/config
export default defineConfig({
    site: 'https://archytech.netlify.app',
    adapter: netlify(),
    integrations: [
        react(),
        tailwind(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
        robotsTxt(),
        sitemap(),
        sanity({
            projectId: 'bpernsxq',
            dataset: 'production',
            useCdn: false,
            apiVersion: '2024-05-14',
            studioBasePath: '/sanity-studio-admin',
        }),
    ],
    image: {
        domains: ['cdn.sanity.io'],
    },
    prefetch: {
        prefetchAll: true,
    },
    vite: {
        plugins: [saRedirect()],
    },
});
