import { createClient } from '@sanity/client';
import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, SanityDocument, Slug } from '@sanity/types';
import Author from '../../schema/author.ts';
import Category from '../../schema/category.ts';


export const client = createClient({
    projectId: 'bpernsxq',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-05-14',
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
                    category,
                    cardImageMobile,
                    cardImageDesktop,
                    _createdAt,
                    body
        }
    `,
        {
            slug,
        },
    );
}

export async function getCategories(): Promise<Category[]> {
    return await client.fetch(
        `*[_type == "category" && defined(slug.current)]`,
    );
}

export async function getCategory(ref: string): Promise<SanityDocument | undefined>{
    return await client.getDocument(ref);
}

export interface Post {
    _type: 'post';
    _createdAt: string;
    title: string;
    description: string;
    slug: Slug;
    cardImageMobile: ImageAsset;
    cardImageDesktop: ImageAsset;
    body: PortableTextBlock[];
    category: typeof Category;
    author: typeof Author;
}

export interface Category {
    _type: 'category';
    title: string;
    description: string;
    slug: string;
}
