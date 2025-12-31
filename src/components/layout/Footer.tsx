import { Link } from "react-router-dom";
import { Sparkles, Heart, Instagram, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-rose-gold flex items-center justify-center shadow-soft">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">
                Glow<span className="text-primary">Up</span>Saheli
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your caring saheli guiding you towards natural beauty, hygiene, and confidence — without chemicals or confusion.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Body Care", "Ingredients", "Vitamins", "Daily Routines", "Blog"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Body Parts */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Body Care</h4>
            <ul className="space-y-3">
              {["Face Care", "Hair & Scalp", "Hands & Nails", "Feet Care", "Intimate Hygiene"].map((item) => (
                <li key={item}>
                  <Link to="/body-care" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {["About Us", "Contact", "Privacy Policy", "Disclaimer", "FAQ"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 GlowUpSaheli. Made with <Heart className="w-4 h-4 inline text-primary" /> for natural beauty
          </p>
          <p className="text-muted-foreground text-xs">
            Disclaimer: This is educational content, not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};
