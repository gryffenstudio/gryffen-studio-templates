import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schema';
export default defineConfig({
    name: 'default',
    title: 'archytech',
    projectId: 'bpernsxq',
    dataset: 'production',
    plugins: [structureTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});
