import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Heart, Leaf, Star, ShieldCheck, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 3D Background is handled globally in Layout */}

      {/* Glass overlay for content readability */}
      <div className="absolute inset-0 bg-transparent z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-neon mb-8 hover:scale-105 transition-transform cursor-default"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-bold tracking-wide text-primary uppercase">Unlock Your Radiance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 drop-shadow-sm text-foreground"
            >
              Glow Up
              <span className="block text-gradient animate-gradient-x">Naturally &</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-foreground/80 font-medium mt-2">
                Boldly Beautiful.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed text-balance"
            >
              Welcome to <span className="font-semibold text-foreground">GlowUpSaheli</span>, your ultimate 3D interactive guide to holistic beauty.
              Dive into a world where ancient wisdom meets modern science. We explain
              <span className="italic"> exactly</span> how natural ingredients work for your unique body,
              giving you the confidence to shine from the inside out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="shadow-neon hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1" asChild>
                <Link to="/body-care">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline-primary" size="xl" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 text-foreground" asChild>
                <Link to="/ingredients">
                  Explore Ingredients
                </Link>
              </Button>
            </motion.div>

            {/* Enhanced Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { icon: Heart, text: "100% Organic", color: "text-primary" },
                { icon: ShieldCheck, text: "Dermatologist Verified", color: "text-sage-dark" },
                { icon: Sun, text: "Daily Routines", color: "text-rose-gold" },
                { icon: Star, text: "Premium Quality", color: "text-yellow-500" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm"
                >
                  <item.icon className={`w-8 h-8 ${item.color} drop-shadow-md`} />
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider text-center">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Area - mostly empty to let the 3D scene shine, but can add floating info cards */}
          <div className="relative hidden lg:block h-[600px] pointer-events-none">
            {/* The 3D Scene covers this, but we can add floating glass cards here for extra depth */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute top-20 right-10 glass-card p-6 rounded-2xl max-w-[240px] shadow-neon z-20 pointer-events-auto cursor-pointer border-white/20 bg-white/10 backdrop-blur-md"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-primary/20">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">Natural Power</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Experience the potent healing properties of nature's finest ingredients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="absolute bottom-40 left-10 glass-card p-6 rounded-2xl max-w-[240px] shadow-neon z-20 pointer-events-auto cursor-pointer border-white/20 bg-white/10 backdrop-blur-md"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-sage/30">
                  <Sparkles className="w-6 h-6 text-sage-dark" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">Daily Glow</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Simple, effective routines designed to bring out your inner shine every day.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

