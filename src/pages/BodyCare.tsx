import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { InteractiveBodyModel } from "@/components/body/InteractiveBodyModel";
import { BodyPartsGrid } from "@/components/home/BodyPartsGrid";
import { Sparkles } from "lucide-react";

import SEO from "@/components/SEO";

const BodyCare = () => {
  const navigate = useNavigate();
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const handleBodyPartClick = (part: string) => {
    navigate(`/body-care/${part}`);
  };

  return (
    <Layout>
      <SEO
        title="Interactive Body Care Map | GlowUpSaheli"
        description="Explore our interactive 3D body map to find natural care routines for every body part."
        canonical="/body-care"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Interactive Body Care Guide</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Click to Explore
              <span className="text-gradient block">Body Care Routines</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interact with the 3D model below or scroll down to explore care routines for every part of your body
            </p>
          </motion.div>

          {/* Interactive 3D Model */}
          <InteractiveBodyModel
            onBodyPartClick={handleBodyPartClick}
            hoveredPart={hoveredPart}
          />
        </div>
      </section>

      {/* Body Parts Grid */}
      <BodyPartsGrid />
    </Layout>
  );
};

export default BodyCare;
