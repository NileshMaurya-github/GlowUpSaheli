import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const bodyParts = [
  { name: "Face", slug: "face", emoji: "✨", description: "Radiant skin care routines", color: "bg-peach" },
  { name: "Hair & Scalp", slug: "hair", emoji: "💇‍♀️", description: "Healthy hair from roots", color: "bg-blush" },
  { name: "Eyes", slug: "eyes", emoji: "👁️", description: "Bright, refreshed eyes", color: "bg-sage" },
  { name: "Lips", slug: "lips", emoji: "💋", description: "Soft, nourished lips", color: "bg-primary/20" },
  { name: "Hands & Nails", slug: "hands", emoji: "💅", description: "Beautiful, healthy nails", color: "bg-blush" },
  { name: "Feet", slug: "feet", emoji: "🦶", description: "Soft, pampered feet", color: "bg-peach" },
  { name: "Neck", slug: "neck", emoji: "🌸", description: "Smooth, even-toned neck", color: "bg-sage" },
  { name: "Underarms", slug: "underarms", emoji: "🧴", description: "Fresh, clean care", color: "bg-cream" },
  { name: "Back", slug: "back", emoji: "🌿", description: "Clear, healthy back skin", color: "bg-blush" },
  { name: "Intimate Care", slug: "intimate", emoji: "🩷", description: "Gentle hygiene routines", color: "bg-peach" },
];

export const BodyPartsGrid = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-peach/30 rounded-full blur-[100px] -translate-y-1/2 -ml-20 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Holistic Care</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Complete Body Care
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Explore our curated 3D interactive guide. Click on any body part to reveal ancient secrets and modern science for your diverse needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {bodyParts.map((part, index) => (
            <motion.div
              key={part.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
              className="h-[280px]"
            >
              <Link to={`/body-care/${part.slug}`} className="block h-full">
                <TiltCard
                  classNameContent="bg-white/40 border border-white/60 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 gap-4"
                  className="rounded-2xl"
                >
                  <div className="text-6xl filter drop-shadow-md transform transition-transform duration-300 group-hover:scale-110">{part.emoji}</div>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-foreground mb-2">
                      {part.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {part.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-1 text-primary text-sm font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
