import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Cw1eYZP-.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Cl_9Z9Fw.mjs');
const _page1 = () => import('./chunks/studio-route_CoPWUUKB.mjs');
const _page2 = () => import('./chunks/404_CpdtG73J.mjs');
const _page3 = () => import('./chunks/babysitters-and-nannies_CYWwWVHA.mjs');
const _page4 = () => import('./chunks/_slug__78TfwtB3.mjs');
const _page5 = () => import('./chunks/index_DsXkqMGk.mjs');
const _page6 = () => import('./chunks/daycare-centers_DutIp9i_.mjs');
const _page7 = () => import('./chunks/families_RkQDNJw8.mjs');
const _page8 = () => import('./chunks/index_CsZF4OId.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/babysitters-and-nannies.astro", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/daycare-centers.astro", _page6],
    ["src/pages/families.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c023e0c3-cbed-461b-8241-83ce32711c5d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
