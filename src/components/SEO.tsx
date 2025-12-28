import { Helmet } from "react-helmet-async";
import React from "react";

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterHandle?: string;
    keywords?: string;
    schema?: object;
    noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description = "Zyra Digitals builds high-performance websites, powerful brands, and growth systems. We specialize in web development, SEO, hosting, and strategic brand creation.",
    canonical = "https://www.zyradigitals.com/",
    ogImage = "https://www.zyradigitals.com/og-image.jpg",
    ogType = "website",
    twitterHandle = "@zyradigitals",
    keywords = "web development agency, website designer near me, best website design company, branding agency, India web development company, digital solutions, Mohan Prasath S, Zyra Digitals",
    schema,
    noindex = false,
}) => {
    const siteName = "Zyra Digitals";
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Crafting Premium Digital Experiences`;
    const siteUrl = "https://www.zyradigitals.com";

    const defaultLocalBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteName,
        "image": `${siteUrl}/favicon.png`,
        "@id": `${siteUrl}/#localbusiness`,
        "url": siteUrl,
        "telephone": "+91-9025421149",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Remote Service",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 13.0827,
            "longitude": 80.2707
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "06:00",
            "closes": "22:00"
        },
        "sameAs": [
            "https://www.instagram.com/zyradigitals.co/",
            "https://www.linkedin.com/company/zyra-digitals/"
        ]
    };

    // Ensure canonical is absolute
    const absoluteCanonical = canonical.startsWith("http") ? canonical : `${siteUrl}${canonical.startsWith("/") ? "" : "/"}${canonical}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={absoluteCanonical} />

            {noindex && <meta name="robots" content="noindex, nofollow" />}
            {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={absoluteCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={absoluteCanonical} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
            <meta property="twitter:site" content={twitterHandle} />
            <meta property="twitter:creator" content={twitterHandle} />

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}

            {/* Fallback & Home Scripts */}
            {!title && (
                <>
                    <script type="application/ld+json">
                        {JSON.stringify(defaultLocalBusinessSchema)}
                    </script>
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": siteName,
                            "url": siteUrl,
                            "logo": `${siteUrl}/favicon.png`,
                            "founder": {
                                "@type": "Person",
                                "name": "Mohan Prasath S"
                            },
                            "sameAs": [
                                "https://www.instagram.com/zyradigitals.co/",
                                "https://www.linkedin.com/company/zyra-digitals/"
                            ]
                        })}
                    </script>
                </>
            )}
        </Helmet>
    );
};
