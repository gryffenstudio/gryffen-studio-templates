import { createClient } from '@sanity/client';
import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import Author from '../../schema/author.ts';

export const client = createClient({
    projectId: 'zgzkbg6y',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-03-29',
});

export async function getPosts(): Promise<Post[]> {
    return await client.fetch(
        `*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`,
    );
}

export async function getPost(slug: string): Promise<Post> {
    return await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
                    title,
                    description,
                    slug,
                    author->{
                        _id,
                        name,
                    },
                    categories,
                    mainImage,
                    _createdAt,
                    body
        }
    `,
        {
            slug,
        },
    );
}

export interface Post {
    _type: 'post';
    _createdAt: string;
    title: string;
    description: string;
    slug: Slug;
    mainImage?: ImageAsset;
    body: PortableTextBlock[];
    author: typeof Author;
}
