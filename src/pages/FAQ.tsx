import { Layout } from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            q: "Are the remedies suitable for all skin types?",
            a: "Most natural remedies are gentle, but we always recommend doing a patch test first. Ingredients like lemon or vinegar can be harsh on sensitive skin."
        },
        {
            q: "How long does it take to see results?",
            a: "Natural skincare is about consistency. You can expect to see visible changes in 4-6 weeks of regular use, though hydration benefits can be instant."
        },
        {
            q: "Can I use these remedies if I have acne?",
            a: "Yes, we have specific sections for acne-prone skin using Neem, Turmeric, and Aloe Vera. However, for severe cystic acne, please consult a dermatologist."
        },
        {
            q: "Is GlowUpSaheli content medically verified?",
            a: "Our content is research-based but is for educational purposes only. It is not a substitute for professional medical advice."
        },
        {
            q: "Do you sell products?",
            a: "Currently, we only provide educational guides and routine recommendations. We do not sell our own products."
        }
    ];

    return (
        <Layout>
            <SEO
                title="Frequently Asked Questions - GlowUpSaheli"
                description="Common questions about natural beauty, skin care routines, and our content."
                canonical="/faq"
            />
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-2xl px-6">
                                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary transition-colors py-6">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </Layout>
    );
};

export default FAQ;
