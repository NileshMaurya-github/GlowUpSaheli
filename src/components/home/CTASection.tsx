import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60" />

      {/* Floating 3D Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-peach rounded-full blur-3xl animate-float opacity-60" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-200 rounded-full blur-3xl animate-float-delayed opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass-card rounded-[3rem] p-12 md:p-16 shadow-2xl border-white/50"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 mb-8 backdrop-blur-sm shadow-sm">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-bold tracking-wide text-primary uppercase">Start Your Journey</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Embrace Your
            <span className="text-gradient block mt-2 filter drop-shadow-sm">Natural Glow?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of women who have discovered the joy of natural self-care.
            Your caring saheli is here to guide you every step of the way with clear, 3D-visualized routines.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button variant="hero" size="xl" className="shadow-neon hover:shadow-glow transition-all hover:scale-105" asChild>
              <Link to="/body-care">
                Start Exploring
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" className="bg-white/50 hover:bg-white/80 border-2 border-white/50" asChild>
              <Link to="/learn">
                <Sparkles className="w-5 h-5 mr-2 text-primary" />
                Beginner's Guide
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
