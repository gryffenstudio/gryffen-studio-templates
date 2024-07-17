import { z, defineCollection } from 'astro:content';
import { getImage } from 'astro:assets';

const projectCollection = defineCollection({
    type: 'data',
    schema: ({ image }) =>
        z.object({
            projectName: z.string().max(100, {
                message: 'Project name is too long!',
            }),
            slug: z.string(),
            category: z.enum(['residential', 'commercial', 'in_progress']),
            featured: z.boolean(),
            cardImageMobile: z.object({
                image: image(),
                alt: z.string(),
            }),
            cardImageDesktop: z.object({
                image: image(),
                alt: z.string(),
            }),
        }),
});

// const teamCollection = defineCollection({
//     type: 'data',
//     schema: ({ image }) =>
//         z.object({
//             name: z.string().max(100, {
//                 message: 'Team member name is too long!',
//             }),
//             role: z.string(),
//             slug: z.string(),
//             description1: z.string(),
//             description2: z.string().nullable(),
//             description3: z.string().nullable(),
//             location: z.string(),
//             phoneNumber: z.string(),
//             email: z.string().email(),
//             profileImageMobile: image(),
//             profileImageDesktop: image(),
//             cardImageMobile: image(),
//             cardImageDesktop: image(),
//         }),
// });

export const collections = {
    projects: projectCollection,
    // team: teamCollection,
};
