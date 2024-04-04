import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';
import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 'zgzkbg6y',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-03-29',
});

export const imageBuilder = imageUrlBuilder(client);

export function urlFor(source: Image) {
    if (source) {
        return imageBuilder.image(source);
    }
}
