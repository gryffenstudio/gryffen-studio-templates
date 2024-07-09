import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'websiteLink',
            title: 'Website Link',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['https'],
                }),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
});
