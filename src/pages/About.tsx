import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Heart, Sparkles, Leaf, Shield } from "lucide-react";

const About = () => {
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
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Meet Your
              <span className="text-gradient block">Caring Saheli</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              GlowUpSaheli is more than a website — it's your trusted friend guiding you towards natural beauty, hygiene, and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every woman deserves to feel confident and beautiful in her own skin — without needing expensive products or harmful chemicals. 
                GlowUpSaheli brings together traditional wisdom and modern knowledge to create simple, effective, and safe self-care routines 
                that work for real women with real lives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Natural Beauty",
                  description: "We champion ingredients that have been trusted for generations — from your grandmother's kitchen to modern understanding of their benefits.",
                  color: "bg-peach"
                },
                {
                  icon: Leaf,
                  title: "Chemical-Free",
                  description: "No harsh chemicals, no confusing labels. Just pure, natural ingredients that nourish and heal your skin and hair.",
                  color: "bg-sage"
                },
                {
                  icon: Heart,
                  title: "Caring Approach",
                  description: "Like a caring saheli (friend), we guide without judgment. Every body is beautiful, and every woman deserves care.",
                  color: "bg-blush"
                },
                {
                  icon: Shield,
                  title: "Safe & Respectful",
                  description: "Our content is educational, inclusive, and respectful. We discuss hygiene openly while maintaining dignity and comfort.",
                  color: "bg-primary/20"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl ${item.color}`}
                >
                  <item.icon className="w-10 h-10 text-foreground mb-4" />
                  <h3 className="font-display text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-2xl font-semibold mb-4">Important Disclaimer</h2>
            <div className="p-6 rounded-2xl bg-muted/50 text-left space-y-4 text-sm text-muted-foreground">
              <p>
                The information provided on GlowUpSaheli is for educational and informational purposes only. 
                It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                Always seek the advice of your physician, dermatologist, or other qualified health provider 
                with any questions you may have regarding a medical condition or skincare concern.
              </p>
              <p>
                Natural ingredients can cause allergic reactions in some individuals. Always perform a patch test 
                before trying new ingredients and discontinue use if irritation occurs.
              </p>
              <p>
                Individual results may vary. What works for one person may not work for another due to different 
                skin types, allergies, and health conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
