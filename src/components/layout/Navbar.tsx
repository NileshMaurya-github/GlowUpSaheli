import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Leaf, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Body Care", path: "/body-care", icon: Heart },
  { name: "Ingredients", path: "/ingredients", icon: Leaf },
  { name: "Vitamins", path: "/vitamins", icon: Sparkles },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "About", path: "/about" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "pt-2" : "pt-6"}`}>
      {/* 
        Floating Glowing Glass Island Design 
        - Bright White Glass (`bg-white/70`)
        - Peach Neon Glow (`shadow-[0_0_30px_rgba(255,183,178,0.6)]`)
        - Crispy Border (`border-white`)
      */}
      <div className="container mx-auto px-4">
        <div className={`
          relative mx-auto transition-all duration-500 flex items-center justify-between
          backdrop-blur-xl border border-white/60 rounded-full
          ${scrolled ? "h-14 px-6 bg-white/80 shadow-[0_5px_30px_rgba(255,183,178,0.4)] max-w-5xl" : "h-20 px-8 bg-white/60 shadow-[0_0_40px_rgba(255,183,178,0.5)]"}
        `}>

          {/* Glowing Aura Effect behind navbar */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-xl -z-10 opacity-50" />

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-10">
            <div className={`
              rounded-full bg-gradient-to-br from-primary to-rose-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300
              ${scrolled ? "w-8 h-8" : "w-10 h-10"}
            `}>
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className={`font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-primary/80 ${scrolled ? "text-lg" : "text-2xl"}`}>
              GlowUp<span className="text-primary">Saheli</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-sm font-semibold transition-colors group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${location.pathname === link.path ? "text-primary-foreground" : "text-gray-600 group-hover:text-black"
                  }`}>
                  {link.name}
                </span>

                {/* Active Indicator uses a deep peach pill */}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-primary shadow-lg shadow-primary/30 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover Effect */}
                {location.pathname !== link.path && (
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              size={scrolled ? "sm" : "default"}
              className="rounded-full px-6 bg-gradient-to-r from-primary to-[#ff9a9e] text-white shadow-neon hover:shadow-glow hover:scale-105 transition-all text-sm font-bold tracking-wide"
            >
              Start Your Glow
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors bg-white/50 rounded-full"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-28 left-4 right-4 bg-white/95 backdrop-blur-xl border border-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden z-40"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-primary/5 pointer-events-none" />

            <div className="relative p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold transition-all duration-300 ${location.pathname === link.path
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {link.icon && <link.icon className="w-5 h-5" />}
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100/50">
                <Button className="w-full rounded-xl shadow-glow bg-gradient-to-r from-primary to-rose-gold text-white font-bold py-6">
                  Start Your Glow
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
