import type { StructuredDataInput } from './structuredData';
import siteData from '../data/siteData.json';

export interface BuildDefaultStructuredDataProps {
    title: string;
    url: URL;
}

export default function buildDefaultStructuredData(
    props: BuildDefaultStructuredDataProps,
): StructuredDataInput[] {
    return [
        {
            type: 'WebSite',
            data: {
                name: siteData.organizationName,
                url: siteData.url,
            },
        } satisfies StructuredDataInput,
        {
            type: 'WebPage',
            data: {
                '@id': props.url,
                name: props.title,
                isPartOf: {
                    '@type': 'WebSite',
                    '@id': siteData.url,
                },
            },
        } satisfies StructuredDataInput,
        {
            type: 'Organization',
            data: {
                name: siteData.organizationName,
                url: siteData.url,
                logo: siteData.image.src,
            },
        } satisfies StructuredDataInput,
    ];
}
