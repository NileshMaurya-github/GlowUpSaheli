import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { BodyPartsGrid } from "@/components/home/BodyPartsGrid";
import { IngredientsPreview } from "@/components/home/IngredientsPreview";
import { DailyRoutinePreview } from "@/components/home/DailyRoutinePreview";
import { CTASection } from "@/components/home/CTASection";

import SEO from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="GlowUpSaheli – Natural Glow Up Tips for Face, Body & Self Care"
        description="GlowUpSaheli brings natural glow up tips for face, body care, hygiene, vitamins, and daily beauty routines for women."
        canonical="/"
        keywords={["glow up", "skin care", "natural beauty", "self care", "body care", "face glow"]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GlowUpSaheli",
          "url": "https://glowupsaheli.vercel.app",
          "logo": "https://glowupsaheli.vercel.app/logo.png", // Ensure logo exists or remove
          "description": "Your holistic guide to natural beauty and self-care."
        }}
      />
      <HeroSection />
      <BodyPartsGrid />
      <IngredientsPreview />
      <DailyRoutinePreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
