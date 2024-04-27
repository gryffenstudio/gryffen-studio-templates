import author from '../../schema/author';
import siteData from '../data/siteData.json';

interface ImageUrl {
    [key: string]: string;
}

interface BlogAuthorData {
    name: string;
    url: string;
}

interface BlogData {
    headline: string;
    datePublished: Date;
    dateModified: Date;
    author?: BlogAuthorData;
}
interface JsonLDGeneratorProps {
    url: URL;
    name: string;
    description: string;
    blogData?: BlogData;
    imageUrls?: ImageUrl;
}

export default function jsonLDGenerator(props: JsonLDGeneratorProps) {
    if (props.blogData) {
        return `
        <script type="application/ld+json">
            {"@context": "https://schema.org/",
                "@type": "BlogPosting",
                "headline": ${props.blogData.headline},
                "image": [
                    ${props.imageUrls && props.imageUrls['blogImage'] ? props.imageUrls['blogImage'] : siteData.image.src}
                ],
                "datePublished": "2024-04-19T22:45:00",
                "dateModified": "2024-04-20T01:41:36",
                "author": {
                    "@type": "Person",
                    "name": ${props.blogData.author ? props.blogData.author.name : ''},
                }
                "publisher": {
                    "@type": "Organization",
                    "name": "Archytech",
                    "url": "https://www.archytech.com/",
                    "sameAs": [
                        "https://www.facebook.com/archytech",
                        "https://twitter.com/archytech",
                        "https://www.instagram.com/archytech",
                        "https://www.linkedin.com/company/archytech"
                    ]
                    "logo": {
                        "@type": "ImageObject",
                        "url": ${siteData.image.src},
                        "width": ${siteData.image.width},
                        "height": ${siteData.image.height},
                    }
                },
                "@id": "${props.url}",
                "name": "${props.name}",
                "description": "${props.description || siteData.description}",
                "inLanguage": "en-US"
            }
        </script>`;
    }
    return `<script type="application/ld+json">
      {"@context": "https://schema.org/",
      "@graph": [{
        "@type": "WebPage",
        "@id": "${props.url || siteData.id}",
        "name": "${props.name || siteData.title}",
        "url": "${props.url || siteData.url}",
        "description": "${props.description || siteData.description}",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebSite",
        "@id": "${siteData.id}",
        "name": "${siteData.title}",
        "url": "${siteData.url}",
        "description": "${siteData.description}",
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://www.archytech.com/#organization",
        "name": "Archytech",
        "url": "https://www.archytech.com/",
        "sameAs": [
            "https://www.facebook.com/archytech",
            "https://twitter.com/archytech",
            "https://www.instagram.com/archytech",
            "https://www.linkedin.com/company/archytech"
        ]
        "logo": {
            "@type": "ImageObject",
            "url": ${siteData.image.src},
            "width": ${siteData.image.width},
            "height": ${siteData.image.height},
        }
        "image": {
            "@type": "ImageObject",
            "@id": "${props.imageUrls && props.imageUrls['organization'] ? props.imageUrls['organization'] : siteData.image.src}"
        },
    }]}
    </script>`;
}
