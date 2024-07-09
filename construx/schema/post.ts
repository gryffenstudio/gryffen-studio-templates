import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'cardImageMobile',
            title: 'Mobile Card Image (W 327px x H 303px)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'cardImageDesktop',
            title: 'Desktop Card Image (W 380px x H 303px)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'heroImageMobile',
            title: 'Mobile Hero Image (W 375px x H 812px)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'heroImageDesktop',
            title: 'Desktop Hero Image (W 1440px x H 1024px)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: 'category' },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            description: 'description',
            media: 'heroImageDesktop',
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
});
