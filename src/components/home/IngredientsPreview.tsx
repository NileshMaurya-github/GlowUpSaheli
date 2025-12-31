import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/TiltCard";

const ingredients = [
  { name: "Aloe Vera", benefit: "Hydration & Healing", emoji: "🌵", color: "from-green-100 to-green-50" },
  { name: "Turmeric", benefit: "Brightening & Anti-inflammatory", emoji: "🌼", color: "from-yellow-100 to-orange-50" },
  { name: "Rose Water", benefit: "Toning & Refreshing", emoji: "🌹", color: "from-pink-100 to-rose-50" },
  { name: "Coconut Oil", benefit: "Deep Moisturizing", emoji: "🥥", color: "from-amber-50 to-orange-50" },
  { name: "Honey", benefit: "Antibacterial & Nourishing", emoji: "🍯", color: "from-amber-100 to-yellow-50" },
  { name: "Multani Mitti", benefit: "Deep Cleansing", emoji: "🏜️", color: "from-stone-100 to-stone-50" },
];

export const IngredientsPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] translate-x-1/2 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1 rounded-full bg-sage/20">
                <Leaf className="w-4 h-4 text-sage-dark" />
              </span>
              <span className="text-sage-dark font-bold uppercase tracking-wide text-xs">Pure & Organic</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Nature's Best for Your Skin
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We carefully select ingredients that have stood the test of time.
              Our 3D guide shows you exactly <strong>why</strong> they work and <strong>how</strong> to use them for maximum glow.
            </p>
          </div>
          <Button variant="outline-primary" size="lg" className="shrink-0 shadow-lg hover:shadow-xl transition-all" asChild>
            <Link to="/ingredients">
              View All Ingredients
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-[240px]"
            >
              <TiltCard
                className={`rounded-2xl bg-gradient-to-br ${ingredient.color}`}
                classNameContent="bg-white/30 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center gap-2"
              >
                <div className="text-5xl mb-4 filter drop-shadow-md">{ingredient.emoji}</div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {ingredient.name}
                </h3>
                <div className="w-8 h-1 bg-white/50 rounded-full my-1" />
                <p className="text-xs font-medium text-muted-foreground/80 uppercase tracking-tight">
                  {ingredient.benefit}
                </p>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-4 h-4 text-primary/70" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
