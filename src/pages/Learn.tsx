import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Sparkles, Heart, Star, Clock } from "lucide-react";

const guides = [
  {
    title: "Beginner's Glow-Up Guide",
    description: "Start your natural beauty journey with simple, effective basics",
    duration: "7 days",
    difficulty: "Beginner",
    emoji: "🌱",
    color: "from-green-100 to-green-50",
    topics: ["Basic skincare routine", "Natural ingredients 101", "Building habits"]
  },
  {
    title: "Teenage Care Guide",
    description: "Gentle care for young skin - dealing with acne, oiliness, and more",
    duration: "Ongoing",
    difficulty: "Beginner",
    emoji: "🌸",
    color: "from-pink-100 to-rose-50",
    topics: ["Acne management", "Oil control", "Self-confidence"]
  },
  {
    title: "Working Women's Guide",
    description: "Quick, effective routines for busy schedules",
    duration: "5-10 min/day",
    difficulty: "Easy",
    emoji: "💼",
    color: "from-blue-100 to-blue-50",
    topics: ["Quick routines", "Desk-friendly tips", "Stress management"]
  },
  {
    title: "Bridal Glow Preparation",
    description: "Complete 3-month preparation for your special day",
    duration: "3 months",
    difficulty: "Comprehensive",
    emoji: "👰",
    color: "from-amber-100 to-yellow-50",
    topics: ["Full body care", "Hair treatments", "Stress-free prep"]
  },
  {
    title: "Post-Travel Recovery",
    description: "Restore your skin after long flights and travel stress",
    duration: "3-5 days",
    difficulty: "Moderate",
    emoji: "✈️",
    color: "from-purple-100 to-purple-50",
    topics: ["Dehydration fix", "Jet lag skin", "Quick recovery"]
  },
  {
    title: "Monsoon Skincare",
    description: "Combat humidity, fungal issues, and monsoon-specific problems",
    duration: "Seasonal",
    difficulty: "Moderate",
    emoji: "🌧️",
    color: "from-cyan-100 to-cyan-50",
    topics: ["Oil control", "Fungal prevention", "Hair care"]
  }
];

const Learn = () => {
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
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Learning Hub</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Learn Natural
              <span className="text-gradient block">Self-Care</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Comprehensive guides for every stage of your glow-up journey. From beginners to brides, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${guide.color} hover:shadow-card transition-all h-full flex flex-col`}>
                  <div className="text-4xl mb-4">{guide.emoji}</div>
                  <h3 className="font-display text-xl font-medium mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{guide.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {guide.difficulty}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.topics.map((topic) => (
                      <span key={topic} className="px-2 py-1 text-xs rounded-full bg-background/50">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline-primary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Start Learning
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-semibold mb-2">Quick Glow Tips</h2>
            <p className="text-muted-foreground">Simple habits that make a big difference</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { tip: "Drink warm water with lemon every morning", icon: "🍋" },
              { tip: "Never sleep with makeup on", icon: "🧴" },
              { tip: "Massage face in upward strokes", icon: "✋" },
              { tip: "Change pillowcase twice a week", icon: "🛏️" },
              { tip: "Apply sunscreen even on cloudy days", icon: "☀️" },
              { tip: "Eat seasonal fruits daily", icon: "🍎" },
              { tip: "Get 7-8 hours of beauty sleep", icon: "😴" },
              { tip: "Smile more - it's the best glow!", icon: "😊" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-background border border-border flex items-center gap-3"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm text-muted-foreground">{item.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl font-semibold mb-4">
              Your Glow Journey Starts Here
            </h2>
            <p className="text-muted-foreground mb-6">
              Ready to explore natural body care routines? Start with the interactive body map!
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/body-care">
                Explore Body Care
                <Sparkles className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Learn;
