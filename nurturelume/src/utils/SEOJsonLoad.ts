import siteData from '../data/siteData.json';

interface JsonLDGeneratorProps {
    url: URL;
    name: string;
    description: string;
}

export default function jsonLDGenerator(props: JsonLDGeneratorProps) {
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
      "@id": "https://nurturelume.com/#organization",
      "name": "NurtureLume",
      "url": "${siteData.url}",
      "inLanguage": "en-US",
      "image": {
        "@id": "${siteData.image.src}"
      },
      "logo": "${siteData.image.src}",
      "sameAs": [
        "https://www.facebook.com/nurturelume",
        "https://twitter.com/nurturelume",
        "https://www.instagram.com/nurturelume",
        "https://www.linkedin.com/company/nurturelume"
      ]
    }]}
    </script>`;
}
