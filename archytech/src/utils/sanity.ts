import { createClient } from '@sanity/client';
import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, SanityDocument, Slug } from '@sanity/types';

export const client = createClient({
    projectId: 'bpernsxq',
    dataset: 'production',
    useCdn: true,
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
                    title,
                    description,
                    slug,
                    author->{
                        name,
                    },
                    category->{
                        title,
                        slug
                    },
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
    return await client.config({useCdn: false}).fetch(
        `*[_type == "category" && defined(slug.current)]`,
    );
}

export async function getCategory(slug: string): Promise<Category>{
    return await client.config({useCdn: false}).fetch(
        `*[_type == "category" && slug.current == $slug][0]`,
        {
            slug,
        }
    );
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
    _type: 'author'
    name: string;
    slug: Slug;
    websiteLink: URL;
    image: ImageAsset;
}
