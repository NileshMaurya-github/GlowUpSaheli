import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/TiltCard";
import { ArrowRight, Tag, Clock, Calendar, Search } from "lucide-react";

// --- Mock Data: Repurposed from Website Content ---
const blogPosts = [
    // --- Vitamins & Supplements ---
    {
        id: 101,
        title: "Vitamin C: The Ultimate Glow Giver",
        category: "Vitamins",
        excerpt: "Why is everyone obsessed with Vitamin C? It fades dark spots, boosts collagen, and gives you that 'glass skin' look. Learn how to layer it correctly.",
        date: "Jan 01, 2026",
        readTime: "4 min read",
        image: "🍊",
        color: "bg-orange-100",
        slug: "face" // Directs to Face care where Vit C is mentioned
    },
    {
        id: 102,
        title: "Biotin & Keratin: The Hair Power Couple",
        category: "Vitamins",
        excerpt: "Thinning hair? Brittle nails? These two nutrients are building blocks for strength. Discover natural sources and supplement tips.",
        date: "Jan 02, 2026",
        readTime: "5 min read",
        image: "💊",
        color: "bg-blue-50",
        slug: "hair"
    },
    {
        id: 103,
        title: "Vitamin E: The Skin Healer",
        category: "Vitamins",
        excerpt: "From healing scars to deep moisture, Vitamin E is a winter essential. We break down the difference between Tocopherol oils and creams.",
        date: "Jan 03, 2026",
        readTime: "3 min read",
        image: "🥑",
        color: "bg-green-50",
        slug: "face"
    },

    // --- Detailed Body Care ---
    {
        id: 1,
        title: "The 10-Step Korean Skincare Routine (Simplified)",
        category: "Skincare",
        excerpt: "You don't need 10 hours, just 10 minutes. Master the art of double cleansing, toning, and layering for radiant face care.",
        date: "Dec 31, 2025",
        readTime: "6 min read",
        image: "✨",
        color: "bg-peach",
        slug: "face"
    },
    {
        id: 2,
        title: "Stop Washing Your Hair Daily!",
        category: "Haircare",
        excerpt: "Training your scalp is real. Learn the 'No-Poo' method, why sulfates are the enemy, and how to use dry shampoo effectively.",
        date: "Dec 30, 2025",
        readTime: "4 min read",
        image: "💇‍♀️",
        color: "bg-blush",
        slug: "hair"
    },
    {
        id: 3,
        title: "Digital Eye Strain: The 20-20-20 Rule",
        category: "Wellness",
        excerpt: "Your eyes look tired because they are. Practical exercises to reduce puffiness and dark circles caused by screen time.",
        date: "Dec 29, 2025",
        readTime: "3 min read",
        image: "👁️",
        color: "bg-sage",
        slug: "eyes"
    },

    // --- Ingredient Deep Dives ---
    {
        id: 201,
        title: "Turmeric: Ancient Gold for Acne",
        category: "Ingredients",
        excerpt: "It stains everything, but it cures inflammation like nothing else. How to use Haldi without turning yellow.",
        date: "Jan 05, 2026",
        readTime: "3 min read",
        image: "🥣",
        color: "bg-yellow-100",
        slug: "face"
    },
    {
        id: 202,
        title: "Rice Water: The Village Secret for Long Hair",
        category: "Ingredients",
        excerpt: "Don't throw that water away! Fermented rice water is packed with Inositol that repairs damaged hair from the inside out.",
        date: "Jan 06, 2026",
        readTime: "4 min read",
        image: "🍚",
        color: "bg-gray-50",
        slug: "hair"
    },

    // --- Specific Body Parts ---
    {
        id: 4,
        title: "Lip Pigmentation: Causes & Cures",
        category: "Skincare",
        excerpt: "Why do lips turn dark? Sun exposure, smoking, or just genetics? We explore beetroot remedies and SPF balms.",
        date: "Dec 28, 2025",
        readTime: "3 min read",
        image: "💋",
        color: "bg-primary/20",
        slug: "lips"
    },
    {
        id: 5,
        title: "Anti-Aging for Your Hands",
        category: "Body",
        excerpt: "Your hands age faster than your face. Why you need to start wearing gloves for chores and applying retinol on your hands.",
        date: "Dec 27, 2025",
        readTime: "4 min read",
        image: "💅",
        color: "bg-blush",
        slug: "hands"
    },
    {
        id: 6,
        title: "Cracked Heels? The Kitchen Cure",
        category: "Body",
        excerpt: "Forget expensive creams. Banana peels, honey, and socks overnight can heal the deepest fissures.",
        date: "Dec 26, 2025",
        readTime: "3 min read",
        image: "🦶",
        color: "bg-peach",
        slug: "feet"
    },
    {
        id: 7,
        title: "Neck Darkness (Acanthosis Nigricans)",
        category: "Skincare",
        excerpt: "Is it dirt or insulin resistance? Understanding neck lines and how cosmetic dermatology handles tech-neck.",
        date: "Dec 25, 2025",
        readTime: "4 min read",
        image: "🌸",
        color: "bg-sage",
        slug: "neck"
    },
    {
        id: 8,
        title: "The Truth About Deodorants & Cancer",
        category: "Hygiene",
        excerpt: "Debunking myths about aluminum. Plus, natural alternatives like Alum and Glycolic Acid for odor control.",
        date: "Dec 24, 2025",
        readTime: "5 min read",
        image: "🧴",
        color: "bg-cream",
        slug: "underarms"
    },
    {
        id: 9,
        title: "Intimate Hygiene: PH Balance 101",
        category: "Hygiene",
        excerpt: "Stop using soap! Understanding the delicate microbiome and why water is often the only cleanser you need.",
        date: "Dec 23, 2025",
        readTime: "5 min read",
        image: "🩷",
        color: "bg-peach",
        slug: "intimate"
    },
    {
        id: 10,
        title: "Back Acne ('Bacne') Boot Camp",
        category: "Body",
        excerpt: "Sweat, friction, and conditioner residue. The trifecta of back acne and how Salicylic Acid body washes help.",
        date: "Dec 22, 2025",
        readTime: "4 min read",
        image: "🚿",
        color: "bg-green-50",
        slug: "back"
    }
];

const categories = ["All", "Vitamins", "Skincare", "Haircare", "Ingredients", "Body", "Wellness", "Hygiene"];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <Layout>
            {/* Header */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
                    >
                        The Glow Journal
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Expert insights, ancient secrets, and modern science for your holistic beauty journey.
                    </motion.p>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="pb-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                        {/* Categories */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${activeCategory === cat
                                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                                        : "bg-white text-gray-600 border-gray-200 hover:border-primary/50"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-72">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/80 backdrop-blur-sm"
                            />
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link to={`/body-care/${post.slug}`}>
                                    <TiltCard className="h-full flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden group hover:border-primary/30 transition-all shadow-sm hover:shadow-xl">
                                        {/* Image Placeholder Area */}
                                        <div className={`h-48 ${post.color} relative overflow-hidden flex items-center justify-center`}>
                                            <div className="text-8xl filter drop-shadow-md transform group-hover:scale-110 transition-transform duration-500">
                                                {post.image}
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1">
                                                    <Tag className="w-3 h-3" /> {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center gap-4 text-gray-400 text-xs font-medium mb-3">
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                            </div>
                                            <h3 className="font-display text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center text-primary font-bold text-sm uppercase tracking-widest group/btn">
                                                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </TiltCard>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            <p className="text-xl">No articles found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Blog;
