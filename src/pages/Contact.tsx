import { Layout } from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <Layout>
            <SEO
                title="Contact Us - GlowUpSaheli"
                description="Get in touch with GlowUpSaheli. We'd love to hear from you!"
                canonical="/contact"
            />
            <section className="py-20 md:py-32 gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-xl text-muted-foreground">
                            Have a question about a routine? Or just want to share your glow story? We're all ears!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                        <div className="p-8 bg-white rounded-3xl shadow-sm text-center border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Email Us</h3>
                            <p className="text-gray-600 mb-4">For collaborations and queries</p>
                            <a href="mailto:hello@glowupsaheli.com" className="text-primary font-bold hover:underline">hello@glowupsaheli.com</a>
                        </div>

                        <div className="p-8 bg-white rounded-3xl shadow-sm text-center border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Social Media</h3>
                            <p className="text-gray-600 mb-4">DM us for quick tips</p>
                            <span className="text-primary font-bold">@GlowUpSaheli</span>
                        </div>

                        <div className="p-8 bg-white rounded-3xl shadow-sm text-center border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Location</h3>
                            <p className="text-gray-600 mb-4">Digital First</p>
                            <span className="text-primary font-bold">Global 🌍</span>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
