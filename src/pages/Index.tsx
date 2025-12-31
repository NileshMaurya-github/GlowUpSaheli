import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { BodyPartsGrid } from "@/components/home/BodyPartsGrid";
import { IngredientsPreview } from "@/components/home/IngredientsPreview";
import { DailyRoutinePreview } from "@/components/home/DailyRoutinePreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BodyPartsGrid />
      <IngredientsPreview />
      <DailyRoutinePreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
