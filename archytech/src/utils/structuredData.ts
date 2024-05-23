export interface ListItem {
    '@type': string;
    position: number;
    name: string;
    item: string;
}

export interface BreadcrumbList {
    '@type': 'BreadcrumbList';
    itemListElement: ListItem[];
}

export interface BlogPosting {
    '@type': 'BlogPosting';
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    author: {
        '@type': 'Person';
        name: string;
    };
    publisher: {
        '@type': 'Organization';
        name: string;
        logo: {
            '@type': 'ImageObject';
            url: string;
        };
    };
    mainEntityOfPage: {
        '@type': 'WebPage';
        '@id': string;
    };
    image: string;
}

export interface WebSite {
    '@type': 'WebSite';
    name: string;
    url: string;
}

export interface WebPage {
    '@type': 'WebPage';
    '@id': string;
    name: string;
    isPartOf: {
        '@type': 'WebSite';
        '@id': string;
    };
}

export interface Organization {
    '@type': 'Organization';
    name: string;
    url: string;
    logo: string;
}

export type StructuredData = BreadcrumbList | BlogPosting | WebSite | WebPage | Organization;

export interface StructuredDataInput {
    type: keyof typeof structuredDataTypes;
    data: any;
}

const structuredDataTypes = {
    BreadcrumbList: {} as BreadcrumbList,
    BlogPosting: {} as BlogPosting,
    WebSite: {} as WebSite,
    WebPage: {} as WebPage,
    Organization: {} as Organization,
};
