import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';
import sanity from '@sanity/astro';
import netlify from '@astrojs/netlify';
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'zgzkbg6y';
const dataset = import.meta.env.PUBLIC_SANITY_STUDIO_DATASET || 'production';
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
    image: {
        domains: ['cdn.sanity.io'],
        remotePatterns: [
            {
                protocol: 'https',
            },
        ],
    },
    integrations: [
        tailwind(),
        react(),
        sitemap(),
        robotsTxt(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
        sanity({
            projectId: projectId,
            dataset: dataset,
            useCdn: false,
            apiVersion: '2024-03-28',
            studioBasePath: '/admin-blog-studio',
        }),
    ],
    site: 'https://nurturelume.com',
    vite: {
        plugins: [saRedirect()],
    },
    output: 'hybrid',
    adapter: netlify(),
});
