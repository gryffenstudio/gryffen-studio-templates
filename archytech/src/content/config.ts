import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    type:'data',
    schema: ({ image }) => z.object({
        projectName: z.string().max(100, {
            message: 'Project name is too long!'
        }),
        slug: z.string(),
        category: z.enum(['residential', 'commercial', 'in_progress']),
        location: z.string(),
        buildingSize: z.string(),
        completionYear: z.string(),
        designBrief: z.string(),
        heroImageMobile: image(),
        heroImageDesktop: image(),
        heroImageAlt: z.string(),
        cardImageMobile: image(),
        cardImageDesktop: image(),
        cardImageAlt: z.string(),
        designBriefImageMobile: image(),
        designBriefImageDesktop: image(),
        designBriefImageAlt: z.string(),
        interiorImagesMobile: z.array(z.object({
            image: image(),
            alt: z.string()
        })),
        interiorImagesDesktop: z.array(z.object({
            image: image(),
            alt: z.string()
        })),
        exteriorImagesMobile: z.array(z.object({
            image: image(),
            alt: z.string()
        })),
        exteriorImagesDesktop: z.array(z.object({
            image: image(),
            alt: z.string()
        })),
    })
});

export const collections = {
    'projects': projectCollection
}