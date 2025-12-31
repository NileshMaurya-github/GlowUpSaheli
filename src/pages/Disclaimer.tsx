import { Layout } from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const Disclaimer = () => {
    return (
        <Layout>
            <SEO
                title="Disclaimer - GlowUpSaheli"
                description="Medical disclaimer for GlowUpSaheli. We provide information, not medical advice."
                canonical="/disclaimer"
            />
            <div className="container mx-auto px-4 py-24 max-w-3xl">
                <h1 className="font-display text-4xl font-bold mb-8 text-red-800">Medical Disclaimer</h1>
                <div className="prose prose-lg text-gray-700 bg-red-50 p-8 rounded-2xl border border-red-100">
                    <h3>Not Medical Advice</h3>
                    <p className="font-bold">
                        The content on GlowUpSaheli is for informational and educational purposes only. It is NOT intended to substitute professional medical advice, diagnosis, or treatment.
                    </p>
                    <p>
                        Always seek the advice of your physician or qualified health provider regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                    </p>
                    <h3>Natural Remedies</h3>
                    <p>
                        Natural ingredients (like turmeric, lemon, etc.) can cause allergic reactions. Always perform a patch test before trying any new skincare ingredient.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Disclaimer;
