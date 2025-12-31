import { Layout } from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const Privacy = () => {
    return (
        <Layout>
            <SEO
                title="Privacy Policy - GlowUpSaheli"
                description="Privacy Policy for GlowUpSaheli. Learn how we handle your data."
                canonical="/privacy-policy"
            />
            <div className="container mx-auto px-4 py-24 max-w-3xl">
                <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-lg text-gray-700">
                    <p>Last updated: January 2026</p>
                    <p>At GlowUpSaheli, accessible from https://glowupsaheli.vercel.app/, one of our main priorities is the privacy of our visitors.</p>
                    <h3>Information We Collect</h3>
                    <p>We do not collect any personal identifiable information (PII) like names or emails unless explicitly provided by you via contact forms.</p>
                    <h3>Cookies</h3>
                    <p>We use local storage keys to improve user experience (like theme preferences). We may use third-party analytics (like Google Analytics) which may store cookies.</p>
                    <h3>Contact Us</h3>
                    <p>If you have additional questions, contact us at privacy@glowupsaheli.vercel.app</p>
                </div>
            </div>
        </Layout>
    );
};

export default Privacy;
