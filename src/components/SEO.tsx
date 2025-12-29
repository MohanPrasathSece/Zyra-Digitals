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
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tag?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description = "Zyra Digitals is a leading website design and development company in Coimbatore. We build high-performance websites, powerful brands, and growth systems for businesses across Tamil Nadu and India.",
    canonical = "https://www.zyradigitals.com/",
    ogImage = "https://www.zyradigitals.com/og-image.jpg",
    ogType = "website",
    twitterHandle = "@zyradigitals",
    keywords = "Zyra Digitals, Zyra Digital, Zira Digitals, Zyra Digitels, Zyra Web Design, Zyra Digitalz, best website design company Coimbatore, website development Coimbatore, web design agency Coimbatore, professional website developers, famous web design company, popular website development, top web designers in Coimbatore, website designer near me, Tamil Nadu web development, branding agency, digital solutions, Mohan Prasath S",
    schema,
    noindex = false,
    publishedTime,
    modifiedTime,
    author = "Mohan Prasath S",
    section,
    tag
}) => {
    const siteName = "Zyra Digitals";
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Crafting Premium Digital Experiences`;
    const siteUrl = "https://www.zyradigitals.com";
    const currentYear = new Date().getFullYear();

    // Default structured data
    const defaultSchema = {
        "@context": "https://schema.org",
        "@graph": [
            // Organization Schema
            {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                "name": siteName,
                "url": siteUrl,
                "logo": {
                    "@type": "ImageObject",
                    "url": `${siteUrl}/logo.png`,
                    "width": 512,
                    "height": 512
                },
                "sameAs": [
                    "https://www.instagram.com/zyradigitals.co/",
                    "https://www.linkedin.com/company/zyra-digitals/"
                ],
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+91-9025421149",
                        "contactType": "customer service",
                        "availableLanguage": ["en", "ta"]
                    }
                ]
            },
            // WebSite Schema
            {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                "url": siteUrl,
                "name": siteName,
                "description": description,
                "publisher": {
                    "@id": `${siteUrl}/#organization`
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
                    },
                    "query-input": "required name=search_term_string"
                }
            },
            // WebPage Schema
            {
                "@type": "WebPage",
                "@id": `${siteUrl}${canonical}#webpage`,
                "url": `${siteUrl}${canonical}`,
                "inLanguage": "en-US",
                "name": fullTitle,
                "description": description,
                "isPartOf": {
                    "@id": `${siteUrl}/#website`
                },
                "about": {
                    "@id": `${siteUrl}/#organization`
                },
                "primaryImageOfPage": {
                    "@id": `${siteUrl}${canonical}#primaryimage`
                },
                "datePublished": publishedTime || new Date().toISOString(),
                "dateModified": modifiedTime || new Date().toISOString(),
                "breadcrumb": {
                    "@id": `${siteUrl}${canonical}#breadcrumb`
                }
            },
            // Breadcrumb Schema
            {
                "@type": "BreadcrumbList",
                "@id": `${siteUrl}${canonical}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": siteUrl
                    },
                    ...(title ? [{
                        "@type": "ListItem",
                        "position": 2,
                        "name": title,
                        "item": `${siteUrl}${canonical}`
                    }] : [])
                ]
            },
            // Local Business Schema
            {
                "@type": "ProfessionalService",
                "@id": `${siteUrl}/#local-business`,
                "name": siteName,
                "image": `${siteUrl}/images/logo.png`,
                "url": siteUrl,
                "telephone": "+91-9025421149",
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Remote Service",
                    "addressLocality": "Coimbatore",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "641001",
                    "addressCountry": "IN"
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Coimbatore"
                    },
                    {
                        "@type": "State",
                        "name": "Tamil Nadu"
                    }
                ],
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 11.0168,
                    "longitude": 76.9558
                },
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "09:00",
                        "closes": "18:00"
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Saturday"],
                        "opens": "10:00",
                        "closes": "15:00"
                    }
                ],
                "sameAs": [
                    "https://www.instagram.com/zyradigitals.co/",
                    "https://www.linkedin.com/company/zyra-digitals/"
                ]
            }
        ]
    };

    // Merge with custom schema if provided
    const mergedSchema = schema ? { ...defaultSchema, ...schema } : defaultSchema;

    // Ensure canonical is absolute
    const absoluteCanonical = canonical.startsWith("http") ? canonical : `${siteUrl}${canonical.startsWith("/") ? "" : "/"}${canonical}`;
    const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={absoluteCanonical} />
            <meta name="author" content={author} />
            {section && <meta name="article:section" content={section} />}
            {tag && <meta name="article:tag" content={tag} />}
            {publishedTime && <meta name="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta name="article:modified_time" content={modifiedTime} />}

            {/* Robots */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <>
                    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                </>
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={absoluteCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteOgImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_US" />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {section && <meta property="article:section" content={section} />}
            {tag && <meta property="article:tag" content={tag} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={absoluteCanonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteOgImage} />
            <meta name="twitter:site" content={twitterHandle} />
            <meta name="twitter:creator" content={twitterHandle} />

            {/* Additional Meta Tags */}
            <meta name="theme-color" content="#000000" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content={siteName} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="application-name" content={siteName} />

            {/* Favicons */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(mergedSchema)}
            </script>
            <meta property="twitter:image" content={ogImage} />
            <meta property="twitter:site" content={twitterHandle} />
            <meta property="twitter:creator" content={twitterHandle} />

            {/* Fallback Organization Script */}
            {!title && (
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
            )}
        </Helmet>
    );
};
