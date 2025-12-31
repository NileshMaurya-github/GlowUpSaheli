import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Leaf, AlertTriangle, Check } from "lucide-react";

const allIngredients = [
  {
    name: "Aloe Vera",
    emoji: "🌵",
    category: "Hydration",
    benefits: ["Hydrates skin deeply", "Soothes sunburn", "Heals minor wounds", "Reduces acne"],
    howToUse: "Apply fresh gel directly to skin or mix with other ingredients",
    frequency: "Daily",
    caution: "Patch test first if you have sensitive skin",
    goodFor: ["Face", "Hair", "Hands", "Body"]
  },
  {
    name: "Turmeric",
    emoji: "🌼",
    category: "Brightening",
    benefits: ["Brightens skin", "Reduces dark spots", "Anti-inflammatory", "Fights acne bacteria"],
    howToUse: "Mix small amount with honey or curd, apply as mask for 10-15 min",
    frequency: "2-3 times per week",
    caution: "Can stain skin temporarily - use small amounts",
    goodFor: ["Face", "Underarms", "Neck"]
  },
  {
    name: "Rose Water",
    emoji: "🌹",
    category: "Toning",
    benefits: ["Balances skin pH", "Refreshes and hydrates", "Reduces redness", "Natural fragrance"],
    howToUse: "Apply with cotton pad as toner or spray directly",
    frequency: "Daily, multiple times",
    caution: "Choose pure rose water without additives",
    goodFor: ["Face", "Hair", "Body"]
  },
  {
    name: "Coconut Oil",
    emoji: "🥥",
    category: "Moisturizing",
    benefits: ["Deep moisturizing", "Removes makeup", "Conditions hair", "Antimicrobial"],
    howToUse: "Warm slightly and massage into skin or hair",
    frequency: "Daily for body, 2-3x week for hair",
    caution: "May clog pores on face for some skin types",
    goodFor: ["Hair", "Body", "Hands", "Feet"]
  },
  {
    name: "Honey",
    emoji: "🍯",
    category: "Nourishing",
    benefits: ["Natural antibacterial", "Moisturizes", "Heals acne scars", "Gentle exfoliation"],
    howToUse: "Apply directly as mask or mix with other ingredients",
    frequency: "2-3 times per week",
    caution: "Use raw, pure honey for best results",
    goodFor: ["Face", "Lips", "Hair"]
  },
  {
    name: "Multani Mitti",
    emoji: "🏜️",
    category: "Cleansing",
    benefits: ["Deep pore cleansing", "Oil control", "Removes tan", "Tightens skin"],
    howToUse: "Mix with rose water to form paste, apply as mask for 15-20 min",
    frequency: "1-2 times per week",
    caution: "Don't let it dry completely on face - may over-dry skin",
    goodFor: ["Face", "Back", "Underarms"]
  },
  {
    name: "Besan (Gram Flour)",
    emoji: "🌾",
    category: "Cleansing",
    benefits: ["Gentle exfoliation", "Removes dead skin", "Brightens complexion", "Oil absorption"],
    howToUse: "Mix with curd or water, use as cleanser or mask",
    frequency: "Daily as cleanser, 2x week as mask",
    caution: "Be gentle - avoid harsh scrubbing",
    goodFor: ["Face", "Body", "Underarms"]
  },
  {
    name: "Neem",
    emoji: "🌿",
    category: "Antibacterial",
    benefits: ["Fights acne", "Antifungal", "Clears skin infections", "Purifies blood"],
    howToUse: "Use neem water for face wash, neem oil for spot treatment",
    frequency: "3-4 times per week",
    caution: "Very potent - don't use directly without dilution",
    goodFor: ["Face", "Scalp", "Body"]
  },
  {
    name: "Castor Oil",
    emoji: "🫒",
    category: "Growth",
    benefits: ["Promotes hair growth", "Thickens eyebrows/lashes", "Deep moisturizing", "Heals dry patches"],
    howToUse: "Mix with coconut oil for hair, apply directly to eyebrows",
    frequency: "2-3 times per week",
    caution: "Very thick - always mix with lighter oils",
    goodFor: ["Hair", "Eyebrows", "Nails"]
  },
  {
    name: "Curd (Yogurt)",
    emoji: "🥛",
    category: "Exfoliating",
    benefits: ["Natural lactic acid exfoliation", "Softens skin", "Conditions hair", "Cools skin"],
    howToUse: "Apply directly or mix with besan/turmeric for masks",
    frequency: "2-3 times per week",
    caution: "Use fresh, plain curd without sugar",
    goodFor: ["Face", "Hair", "Body"]
  },
  {
    name: "Almond Oil",
    emoji: "🌰",
    category: "Nourishing",
    benefits: ["Reduces dark circles", "Softens skin", "Rich in Vitamin E", "Light moisturizing"],
    howToUse: "Massage under eyes or use for face massage",
    frequency: "Daily",
    caution: "Avoid if allergic to nuts",
    goodFor: ["Eyes", "Face", "Lips"]
  },
  {
    name: "Sandalwood",
    emoji: "🪵",
    category: "Soothing",
    benefits: ["Cooling effect", "Reduces pigmentation", "Soothes irritation", "Natural fragrance"],
    howToUse: "Mix powder with rose water for face pack",
    frequency: "1-2 times per week",
    caution: "Use pure sandalwood - many fake products exist",
    goodFor: ["Face", "Body"]
  },
  {
    name: "Rice Water",
    emoji: "🍚",
    category: "Strengthening",
    benefits: ["Strengthens hair", "Adds shine", "Reduces frizz", "Promotes growth"],
    howToUse: "Ferment rice water for 24-48 hours, use as hair rinse",
    frequency: "1-2 times per week",
    caution: "Rinse thoroughly - don't leave in hair",
    goodFor: ["Hair"]
  },
  {
    name: "Glycerin",
    emoji: "💧",
    category: "Hydrating",
    benefits: ["Intense hydration", "Heals cracked heels", "Softens rough patches", "Humectant"],
    howToUse: "Mix with rose water for face mist, apply to feet overnight",
    frequency: "Daily",
    caution: "Always dilute - pure glycerin can be too sticky",
    goodFor: ["Face", "Hands", "Feet", "Lips"]
  },
  {
    name: "Alum (Fitkari)",
    emoji: "💎",
    category: "Astringent",
    benefits: ["Natural deodorant", "Tightens skin", "Stops minor bleeding", "Reduces ingrown hairs"],
    howToUse: "Dissolve in water for aftershave/underarm use",
    frequency: "Daily for underarms",
    caution: "Can be drying - always follow with moisturizer",
    goodFor: ["Underarms", "Face (after shaving)"]
  }
];

const categories = ["All", "Hydration", "Brightening", "Toning", "Moisturizing", "Cleansing", "Nourishing", "Antibacterial", "Growth"];

import SEO from "@/components/SEO";

// ... imports

const Ingredients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedIngredient, setExpandedIngredient] = useState<string | null>(null);

  const filteredIngredients = allIngredients.filter((ingredient) => {
    const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ingredient.benefits.some(b => b.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || ingredient.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <SEO
        title="Natural Ingredients for Glowing Skin | GlowUpSaheli"
        description="Discover the benefits of natural ingredients like Aloe Vera, Turmeric, and more for skincare and hair care."
        canonical="/ingredients"
        keywords={["natural ingredients", "skincare", "hair care", "aloe vera", "turmeric", "diy beauty"]}
      />
      {/* Header */}
      <section className="py-12 md:py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/30 border border-sage mb-6">
              <Leaf className="w-4 h-4 text-sage-dark" />
              <span className="text-sm font-medium text-sage-dark">Natural Ingredients Library</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Nature's Best for
              <span className="text-gradient block">Your Glow</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Discover the power of natural ingredients. Learn what each does, how to use it, and what to be careful about.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search ingredients or benefits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIngredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-all cursor-pointer ${expandedIngredient === ingredient.name ? "ring-2 ring-primary" : ""
                  }`}
                onClick={() => setExpandedIngredient(
                  expandedIngredient === ingredient.name ? null : ingredient.name
                )}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{ingredient.emoji}</div>
                  <div>
                    <h3 className="font-display text-xl font-medium">{ingredient.name}</h3>
                    <span className="text-sm text-primary">{ingredient.category}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2 mb-4">
                  {ingredient.benefits.slice(0, expandedIngredient === ingredient.name ? undefined : 2).map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-sage-dark flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Expanded Content */}
                {expandedIngredient === ingredient.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-4 pt-4 border-t border-border"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">How to Use</p>
                      <p className="text-sm text-muted-foreground">{ingredient.howToUse}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Frequency</p>
                      <p className="text-sm text-muted-foreground">{ingredient.frequency}</p>
                    </div>

                    <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/5 border border-destructive/10">
                      <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{ingredient.caution}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Good For</p>
                      <div className="flex flex-wrap gap-2">
                        {ingredient.goodFor.map((part) => (
                          <span key={part} className="px-3 py-1 text-xs rounded-full bg-sage/30 text-sage-dark">
                            {part}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <p className="text-xs text-primary mt-4">
                  {expandedIngredient === ingredient.name ? "Click to collapse" : "Click to learn more"}
                </p>
              </motion.div>
            ))}
          </div>

          {filteredIngredients.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No ingredients found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Ingredients;
