import { createClient } from '@sanity/client';
import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, SanityDocument, Slug } from '@sanity/types';

export const client = createClient({
    projectId: 'bpernsxq',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-05-14',
});

export async function getPosts(): Promise<Post[]> {
    return await client.fetch(
        `*[_type == "post" && defined(slug.current)] | order(_createdAt desc){
            title,
                    description,
                    slug,
                    author->{
                        _id,
                        name,
                    },
                    category->,
                    cardImageMobile,
                    cardImageDesktop,
                    _createdAt,
                    body
        }`,
    );
}

export async function getPost(slug: string): Promise<Post> {
    return await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
                    ...,
                    author->{
                        name,
                        websiteLink,
                        slug,
                        image
                    },
                    category->{
                        title,
                        slug
                    },
        }
    `,
        {
            slug,
        },
    );
}

export async function getCategories(): Promise<Category[]> {
    return await client.fetch(`*[_type == "category" && defined(slug.current)]`);
}

export async function getCategory(slug: string): Promise<Category> {
    return await client.fetch(`*[_type == "category" && slug.current == $slug][0]`, {
        slug,
    });
}

export interface Post {
    _type: 'post';
    _createdAt: string;
    title: string;
    description: string;
    slug: Slug;
    cardImageMobile: ImageAsset;
    cardImageDesktop: ImageAsset;
    heroImageMobile: ImageAsset;
    heroImageDesktop: ImageAsset;
    body: PortableTextBlock[];
    category: Category;
    author: Author;
}

export interface Category {
    _type: 'category';
    title: string;
    description: string;
    slug: Slug;
}

export interface Author {
    _type: 'author';
    name: string;
    slug: Slug;
    websiteLink: URL;
    image: ImageAsset;
}
