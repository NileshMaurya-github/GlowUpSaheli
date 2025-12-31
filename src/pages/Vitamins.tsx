import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Apple, Sun, Moon, AlertCircle } from "lucide-react";

const vitamins = [
  {
    name: "Vitamin A",
    emoji: "🥕",
    benefits: ["Promotes cell turnover", "Reduces wrinkles", "Clears acne", "Improves skin texture"],
    sources: ["Carrots", "Sweet potato", "Spinach", "Mangoes", "Papaya"],
    timing: "Morning with meals",
    dailyNeed: "700-900 mcg",
    color: "from-orange-100 to-orange-50"
  },
  {
    name: "Vitamin B Complex",
    emoji: "🌾",
    benefits: ["Energy production", "Healthy hair growth", "Prevents breakouts", "Reduces stress effects"],
    sources: ["Whole grains", "Eggs", "Legumes", "Nuts", "Leafy greens"],
    timing: "Morning",
    dailyNeed: "Various",
    color: "from-amber-100 to-yellow-50"
  },
  {
    name: "Vitamin C",
    emoji: "🍊",
    benefits: ["Collagen production", "Brightens skin", "Fights free radicals", "Heals wounds faster"],
    sources: ["Citrus fruits", "Amla", "Guava", "Bell peppers", "Berries"],
    timing: "Morning or midday",
    dailyNeed: "75-90 mg",
    color: "from-yellow-100 to-orange-50"
  },
  {
    name: "Vitamin D",
    emoji: "☀️",
    benefits: ["Strong bones", "Immune support", "Mood regulation", "Reduces inflammation"],
    sources: ["Sunlight", "Fortified milk", "Egg yolks", "Mushrooms"],
    timing: "Morning with sun exposure",
    dailyNeed: "600-800 IU",
    color: "from-yellow-50 to-amber-50"
  },
  {
    name: "Vitamin E",
    emoji: "🥜",
    benefits: ["Moisturizes skin", "Reduces scars", "Protects from UV", "Antioxidant power"],
    sources: ["Almonds", "Sunflower seeds", "Spinach", "Avocado"],
    timing: "With fatty meals",
    dailyNeed: "15 mg",
    color: "from-green-100 to-green-50"
  },
  {
    name: "Zinc",
    emoji: "🦪",
    benefits: ["Fights acne", "Heals wounds", "Controls oil", "Hair strength"],
    sources: ["Pumpkin seeds", "Chickpeas", "Cashews", "Yogurt"],
    timing: "With meals",
    dailyNeed: "8-11 mg",
    color: "from-stone-100 to-stone-50"
  },
  {
    name: "Iron",
    emoji: "🫘",
    benefits: ["Prevents anemia", "Healthy hair", "Glowing skin", "Energy levels"],
    sources: ["Spinach", "Lentils", "Beetroot", "Pomegranate", "Jaggery"],
    timing: "With Vitamin C foods",
    dailyNeed: "18 mg (women)",
    color: "from-red-100 to-red-50"
  },
  {
    name: "Omega-3",
    emoji: "🐟",
    benefits: ["Hydrates from within", "Reduces inflammation", "Shiny hair", "Supple skin"],
    sources: ["Flaxseeds", "Walnuts", "Chia seeds", "Fish"],
    timing: "Any time with meals",
    dailyNeed: "250-500 mg",
    color: "from-blue-100 to-blue-50"
  }
];

const wellnessTips = {
  water: {
    title: "Hydration for Glow",
    tips: [
      "Drink 8-10 glasses of water daily",
      "Start your day with warm lemon water",
      "Herbal teas count towards hydration",
      "Eat water-rich fruits: cucumber, watermelon",
      "Set reminders to drink water regularly"
    ]
  },
  sleep: {
    title: "Beauty Sleep",
    tips: [
      "Aim for 7-8 hours of quality sleep",
      "Sleep on silk/satin pillowcase",
      "Avoid screens 1 hour before bed",
      "Keep room cool and dark",
      "Night routine: cleanse, moisturize, relax"
    ]
  },
  stress: {
    title: "Stress & Skin",
    tips: [
      "Stress shows on skin - practice relaxation",
      "Deep breathing for 5 minutes daily",
      "Regular exercise releases happy hormones",
      "Journaling helps process emotions",
      "Connect with loved ones regularly"
    ]
  },
  gut: {
    title: "Gut Health = Skin Health",
    tips: [
      "Probiotics: curd, buttermilk, idli, dosa",
      "Fiber-rich foods for digestion",
      "Avoid processed foods",
      "Chew food properly",
      "Don't skip meals"
    ]
  }
};

const Vitamins = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Glow from Inside</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Vitamins & Nutrition
              <span className="text-gradient block">for Natural Glow</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              True beauty comes from within. Learn which vitamins and nutrients your body needs for healthy skin, hair, and nails.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-destructive/5 border-y border-destructive/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <p>This is educational content, not medical advice. Consult a healthcare professional before taking supplements.</p>
          </div>
        </div>
      </section>

      {/* Vitamins Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-semibold text-center mb-12"
          >
            Essential Vitamins & Minerals
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vitamins.map((vitamin, index) => (
              <motion.div
                key={vitamin.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${vitamin.color} hover:shadow-card transition-all`}
              >
                <div className="text-4xl mb-3">{vitamin.emoji}</div>
                <h3 className="font-display text-xl font-medium mb-3">{vitamin.name}</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-foreground mb-1">Benefits</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {vitamin.benefits.slice(0, 3).map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-foreground mb-1">Natural Sources</p>
                    <p className="text-xs text-muted-foreground">
                      {vitamin.sources.slice(0, 3).join(", ")}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-foreground/10">
                    {vitamin.timing.includes("Morning") ? (
                      <Sun className="w-3 h-3 text-amber-600" />
                    ) : (
                      <Moon className="w-3 h-3 text-indigo-600" />
                    )}
                    <span className="text-xs text-muted-foreground">{vitamin.timing}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/30 border border-sage mb-4">
              <Apple className="w-4 h-4 text-sage-dark" />
              <span className="text-sm font-medium text-sage-dark">Holistic Wellness</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Wellness Habits for Glow
            </h2>
          </motion.div>

          <Tabs defaultValue="water" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8 bg-muted/50">
              <TabsTrigger value="water">💧 Hydration</TabsTrigger>
              <TabsTrigger value="sleep">😴 Sleep</TabsTrigger>
              <TabsTrigger value="stress">🧘 Stress</TabsTrigger>
              <TabsTrigger value="gut">🌿 Gut Health</TabsTrigger>
            </TabsList>

            {Object.entries(wellnessTips).map(([key, section]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-sage/20 to-peach/20"
                >
                  <h3 className="font-display text-2xl font-semibold mb-6">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.tips.map((tip, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground">{tip}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Food Sources Visual */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Eat the Rainbow
            </h2>
            <p className="text-muted-foreground">
              Each color in your diet brings unique benefits for your skin and hair
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { color: "Red", foods: "Tomatoes, Pomegranate, Beetroot", benefit: "Antioxidants", bg: "bg-red-100" },
              { color: "Orange", foods: "Carrots, Papaya, Mango", benefit: "Vitamin A", bg: "bg-orange-100" },
              { color: "Yellow", foods: "Lemons, Banana, Pineapple", benefit: "Vitamin C", bg: "bg-yellow-100" },
              { color: "Green", foods: "Spinach, Broccoli, Cucumber", benefit: "Iron & Fiber", bg: "bg-green-100" },
              { color: "Purple", foods: "Eggplant, Grapes, Berries", benefit: "Anthocyanins", bg: "bg-purple-100" },
              { color: "White", foods: "Garlic, Onion, Cauliflower", benefit: "Immune Support", bg: "bg-stone-100" }
            ].map((item, index) => (
              <motion.div
                key={item.color}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-2xl ${item.bg} text-center`}
              >
                <p className="font-display text-lg font-medium mb-2">{item.color}</p>
                <p className="text-xs text-muted-foreground mb-2">{item.foods}</p>
                <p className="text-xs font-medium text-foreground">{item.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vitamins;
