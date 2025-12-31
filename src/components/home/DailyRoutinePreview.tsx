import { motion } from "framer-motion";
import { Sun, Moon, Sunset, Coffee, Clock, Sparkles } from "lucide-react";

const routines = [
  {
    time: "Morning",
    subtitle: "Awaken & Protect",
    icon: Sun,
    gradient: "from-amber-100 to-orange-50",
    border: "border-amber-200",
    iconColor: "text-amber-600",
    steps: ["Gentle cleanse to remove night oils", "Hydrating toner for balance", "Vitamin C serum for brightness", "SPF protection is non-negotiable"],
    desc: "Start your day by protecting your skin from UV rays and pollution while boosting hydration.",
  },
  {
    time: "Afternoon",
    subtitle: "Refresh & Reset",
    icon: Coffee,
    gradient: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    iconColor: "text-blue-600",
    steps: ["Hydrating mist spray", "Apply lip balm with SPF", "Hand cream application", "Drink water!"],
    desc: "Mid-day slump affects skin too. A quick refresh keeps your glow intact and hydration levels up.",
  },
  {
    time: "Evening",
    subtitle: "Cleanse & Unwind",
    icon: Sunset,
    gradient: "from-rose-100 to-purple-50",
    border: "border-rose-200",
    iconColor: "text-rose-600",
    steps: ["Double cleanse (Oil + Foam)", "Exfoliate (2x week)", "Facial massage for circulation", "Hydrating eye cream"],
    desc: "Remove the day's buildup. Double cleansing ensures no pollutants remain to clog your pores.",
  },
  {
    time: "Night",
    subtitle: "Repair & Renew",
    icon: Moon,
    gradient: "from-indigo-100 via-purple-100 to-slate-100",
    border: "border-indigo-200",
    iconColor: "text-indigo-600",
    steps: ["Retinol or Repair serum", "Heavy moisturizer", "Sleep mask (optional)", "Silk pillowcase"],
    desc: "Night is when skin repairs itself. Give it the active ingredients it needs to regenerate cells.",
  },
];

export const DailyRoutinePreview = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Clock className="w-3 h-3 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Circadian Rhythm Care</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Your Daily Glow Routine
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto text-balance">
            Skincare isn't just about products; it's about timing. Align your routine with your body's natural clock for optimal results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routines.map((routine, index) => (
            <motion.div
              key={routine.time}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group h-full"
            >
              <div
                className={`relative h-full p-6 rounded-3xl bg-gradient-to-b ${routine.gradient} border ${routine.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between`}
              >
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center mb-6 ${routine.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <routine.icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {routine.time}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4 uppercase tracking-widest text-xs">
                    {routine.subtitle}
                  </p>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {routine.desc}
                  </p>

                  <ul className="space-y-3">
                    {routine.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="font-medium">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-black/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold uppercase">View Products</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
