import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';
import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 'bpernsxq',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-05-14',
});

export const imageBuilder = imageUrlBuilder(client);

export function urlFor(source: Image) {
    return imageBuilder.image(source);
}
