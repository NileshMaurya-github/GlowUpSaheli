import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    keywords?: string[];
    ogType?: "website" | "article" | "profile";
    ogImage?: string;
    schema?: Record<string, any>;
}

const SEO = ({
    title,
    description,
    canonical,
    keywords,
    ogType = "website",
    ogImage,
    schema
}: SEOProps) => {
    const siteUrl = "https://glowupsaheli.vercel.app";
    const defaultImage = `${siteUrl}/og-image.jpg`; // Ensure this exists or use a reliable placeholder
    const absoluteCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const absoluteImage = ogImage ? (ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`) : defaultImage;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {keywords && <meta name="keywords" content={keywords.join(", ")} />}
            <link rel="canonical" href={absoluteCanonical} />

            {/* Open Graph / Social Media */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={absoluteCanonical} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:site_name" content="GlowUpSaheli" />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
