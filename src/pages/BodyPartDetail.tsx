import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft, Sun, Moon, Sunset, Coffee,
  Sparkles, AlertTriangle, Calendar, Leaf, Droplets, Heart, CheckCircle2, XCircle
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

// Helper Interface
interface RoutineStep { step: string; time: string; frequency: string; }
interface Ingredient { name: string; benefits: string; howToUse: string; }
interface SeasonalTip { season: string; tips: string[]; }
interface DataStructure {
  name: string;
  emoji: string;
  overview: string;
  commonMistakes: string[];
  doList: string[]; // Added explicit Do's
  dontList: string[]; // Explicit Don'ts
  myths: { myth: string; fact: string }[];
  morningRoutine: RoutineStep[];
  afternoonRoutine: RoutineStep[];
  eveningRoutine: RoutineStep[];
  nightRoutine: RoutineStep[];
  ingredients: Ingredient[];
  weeklyRitual: string;
  seasonalTips: SeasonalTip[];
}

const bodyPartData: Record<string, DataStructure> = {
  face: {
    name: "Face Care",
    emoji: "✨",
    overview: "Your face is your canvas. Achieve a radiant, glass-skin glow with gentle hydration and natural nourishment.",
    commonMistakes: ["Over-washing", "Ignoring neck area", "Popping pimples"],
    doList: ["Wear sunscreen daily", "Double cleanse at night", "Hydrate inside out"],
    dontList: ["Use hot water for washing", "Sleep with makeup on", "Over-exfoliate"],
    myths: [
      { myth: "Oily skin avoids moisturizer", fact: "Oily skin needs hydration to stop overcompensating sebum." },
      { myth: "Pores can open/close", fact: "Pores don't have muscles; they just appear larger/smaller." }
    ],
    morningRoutine: [
      { step: "Cool water splash", time: "30s", frequency: "Daily" },
      { step: "Vitamin C or Rose toner", time: "1m", frequency: "Daily" },
      { step: "SPF 30+ Sunscreen", time: "2m", frequency: "Daily" }
    ],
    afternoonRoutine: [
      { step: "Mist hydration", time: "10s", frequency: "As needed" },
      { step: "Lip balm reapply", time: "10s", frequency: "Daily" }
    ],
    eveningRoutine: [
      { step: "Double Cleanse", time: "3m", frequency: "Daily" },
      { step: "Target Treatment (Serums)", time: "1m", frequency: "Daily" }
    ],
    nightRoutine: [
      { step: "Heavy Moisturizer/Night Cream", time: "2m", frequency: "Daily" },
      { step: "Silk Pillowcase Sleeping", time: "8h", frequency: "Nightly" }
    ],
    ingredients: [
      { name: "Turmeric", benefits: "Brightening & anti-inflammatory", howToUse: "Mix with yogurt for a mask" },
      { name: "Aloe Vera", benefits: "Soothing hydration", howToUse: "Fresh gel on damp skin" },
      { name: "Rose Water", benefits: "pH Balancing toner", howToUse: "Spray directly on face" }
    ],
    weeklyRitual: "Sunday Facial: Steam for 5 mins, clay mask for 10 mins, then ice roller massage.",
    seasonalTips: [
      { season: "Summer", tips: ["Gel moisturizer", "Extra SPF"] },
      { season: "Winter", tips: ["Cream moisturizer", "Face oil sealing"] }
    ]
  },
  hair: {
    name: "Hair & Scalp",
    emoji: "💇‍♀️",
    overview: "Your crown of glory. Nourish your roots for shiny, strong, and voluminous hair.",
    commonMistakes: ["Washing too often", "Tight hairstyles", "Heat without protection"],
    doList: ["Oil massage weekly", "Use lukewarm water", "Trim split ends"],
    dontList: ["Brush wet hair", "Rub vigorously with towel", "Apply conditioner on scalp"],
    myths: [
      { myth: "Cutting makes hair grow", fact: "Growth happens at the scalp, trimming only stops breakage." },
      { myth: "Plucking gray hair spreads it", fact: "It only damages the follicle." }
    ],
    morningRoutine: [
      { step: "Wide-tooth comb detangle", time: "3m", frequency: "Daily" },
      { step: "Hair serum on ends", time: "1m", frequency: "Daily" }
    ],
    afternoonRoutine: [
      { step: "Protective hairstyle", time: "1m", frequency: "As needed" }
    ],
    eveningRoutine: [
      { step: "Scalp massage (dry)", time: "5m", frequency: "Daily" }
    ],
    nightRoutine: [
      { step: "Loose braid for sleep", time: "2m", frequency: "Nightly" },
      { step: "Satin bonnet/pillow", time: "-", frequency: "Nightly" }
    ],
    ingredients: [
      { name: "Coconut Oil", benefits: "Deep penetration & protein protection", howToUse: "Warm oil massage pre-wash" },
      { name: "Rice Water", benefits: "Strength & Shine (Inositol)", howToUse: "Fermented rinse after shampoo" },
      { name: "Amla", benefits: "Growth & Pigment", howToUse: "Powder in oil mask" }
    ],
    weeklyRitual: "Deep Conditioning hot oil treatment followed by a hair mask.",
    seasonalTips: [
      { season: "Monsoon", tips: ["Keep scalp dry", "Anti-fungal neem wash"] },
      { season: "Winter", tips: ["Deep condition more", "Avoid wet hair"] }
    ]
  },
  eyes: {
    name: "Eye Care",
    emoji: "👁️",
    overview: " The windows to your soul. Reduce puffiness, dark circles, and strain for bright, awake eyes.",
    commonMistakes: ["Rubbing eyes", "Reading in dim light", "Sleeping with mascara"],
    doList: ["Wear sunglasses", "Take screen breaks (20-20-20 rule)", "Use ring finger for cream"],
    dontList: ["Apply face wash near eyes", "Pull eyelid skin", "Ignore vision changes"],
    myths: [
      { myth: "Cucumbers cure dark circles forever", fact: "They only reduce temporary puffiness via cooling." },
      { myth: "Vision worsens if you use glasses", fact: "Glasses reduce strain; they don't weaken eyes." }
    ],
    morningRoutine: [
      { step: "Cold water splash", time: "30s", frequency: "Daily" },
      { step: "Under-eye gel/cream", time: "1m", frequency: "Daily" }
    ],
    afternoonRoutine: [
      { step: "20-20-20 Screen Break", time: "20s", frequency: "Every 20m" }
    ],
    eveningRoutine: [
      { step: "Gentle makeup removal", time: "2m", frequency: "Daily" }
    ],
    nightRoutine: [
      { step: "Thick eye cream/oil", time: "1m", frequency: "Nightly" },
      { step: "Sleep gentle (on back)", time: "-", frequency: "Nightly" }
    ],
    ingredients: [
      { name: "Cucumber", benefits: "Cooling & Depuffing", howToUse: "Slices on eyes for 10 min" },
      { name: "Almond Oil", benefits: "Vitamin E for dark circles", howToUse: "Gentle tap under eyes" },
      { name: "Green Tea Bags", benefits: "Caffeine constricts vessels", howToUse: "Chilled bags on eyes" }
    ],
    weeklyRitual: "Chilled spoon massage or iced tea bag compress for 10 minutes.",
    seasonalTips: [
      { season: "Summer", tips: ["Sunglasses with UV protection"] },
      { season: "All Year", tips: ["Blue light filter on screens"] }
    ]
  },
  lips: {
    name: "Lip Care",
    emoji: "💋",
    overview: "Soft, smooth, and pink lips require protection from dehydration and sun damage.",
    commonMistakes: ["Licking lips (dries them out)", "Peeling dead skin", "Using expired lipstick"],
    doList: ["Hydrate constantly", "Scrub gently weekly", "Use SPF lip balm"],
    dontList: ["Bite your lips", "Use matte lipstick daily without prep", "Ignore chapped lips"],
    myths: [
      { myth: "Lip balm causes addiction", fact: "Lips just lack oil glands and need moisture." },
      { myth: "Dark lips can turn pink overnight", fact: "Natural pigmentation is normal; only sun-tan fades." }
    ],
    morningRoutine: [
      { step: "Gentle wash cloth buff", time: "30s", frequency: "Daily" },
      { step: "SPF Lip Balm", time: "10s", frequency: "Daily" }
    ],
    afternoonRoutine: [
      { step: "Reapply balm", time: "10s", frequency: "Post-lunch" }
    ],
    eveningRoutine: [
      { step: "Remove lipstick completely", time: "1m", frequency: "Daily" }
    ],
    nightRoutine: [
      { step: "Thick lip mask/Ghee", time: "1m", frequency: "Nightly" }
    ],
    ingredients: [
      { name: "Sugar", benefits: "Natural exfoliant", howToUse: "Mix with honey for scrub" },
      { name: "Ghee/Butter", benefits: "Deep fatty acid moisture", howToUse: "Apply overnight" },
      { name: "Beetroot", benefits: "Natural pink stain & antioxidants", howToUse: "Rub slice on lips" }
    ],
    weeklyRitual: "Honey & Sugar scrub followed by a thick layer of fresh cream (malai).",
    seasonalTips: [
      { season: "Winter", tips: ["Avoid licking lips at all costs", "Use heavy ointments"] },
      { season: "Summer", tips: ["SPF is mandatory"] }
    ]
  },
  hands: {
    name: "Hands & Nails",
    emoji: "💅",
    overview: "Your hands do everything. Keep them soft, youthful, and your nails strong.",
    commonMistakes: ["Using nails as tools", "Cutting cuticles", "Forgetting sunscreen on hands"],
    doList: ["Wear gloves for chores", "Moisturize after washing", "File nails in one direction"],
    dontList: ["Bite nails", "Peel off polish", "Soak in water too long"],
    myths: [
      { myth: "White spots mean calcium deficiency", fact: "Usually just minor trauma to the nail bed." },
      { myth: "Gel polish strengthens nails", fact: "It makes them hard but removal thins them." }
    ],
    morningRoutine: [
      { step: "Hand cream with SPF", time: "1m", frequency: "Daily" }
    ],
    afternoonRoutine: [
      { step: "Reapply hand cream", time: "30s", frequency: "After washing" }
    ],
    eveningRoutine: [
      { step: "Push back cuticles gently", time: "1m", frequency: "As needed" }
    ],
    nightRoutine: [
      { step: "Cuticle Oil", time: "1m", frequency: "Nightly" },
      { step: "Heavy hand cream", time: "1m", frequency: "Nightly" }
    ],
    ingredients: [
      { name: "Lemon", benefits: "Brightens dark knuckles", howToUse: "Rub peel on joints (wash off if sun exposure)" },
      { name: "Olive Oil", benefits: "Strengthens nails", howToUse: "Warm soak for 5 mins" },
      { name: "Glycerin", benefits: "Locks in moisture", howToUse: "Mix with rose water" }
    ],
    weeklyRitual: "Manicure at home: Warm soak, gentle scrub, trim, and oil massage.",
    seasonalTips: [
      { season: "Winter", tips: ["Wear gloves outside", "Thick creams"] }
    ]
  },
  feet: {
    name: "Foot Care",
    emoji: "🦶",
    overview: "They carry you all day. Keep heels soft and infection-free.",
    commonMistakes: ["Walking barefoot in public", "Ignoring callus", "Wearing tight shoes"],
    doList: ["Dry between toes", "Wear cotton socks", "Moisturize heels"],
    dontList: ["Cut corns yourself", "Ignore fungal changes", "Wear wet shoes"],
    myths: [
      { myth: "Pedicures are just cosmetic", fact: "They prevent infections and ingrown nails." }
    ],
    morningRoutine: [
      { step: "Fresh socks", time: "-", frequency: "Daily" },
      { step: "Foot powder if sweaty", time: "1m", frequency: "Daily" }
    ],
    afternoonRoutine: [],
    eveningRoutine: [
      { step: "Wash thoroughly", time: "2m", frequency: "Daily" }
    ],
    nightRoutine: [
      { step: "Warm water wash", time: "2m", frequency: "Nightly" },
      { step: "Foot cream + Socks", time: "2m", frequency: "Twice weekly" }
    ],
    ingredients: [
      { name: "Pumice Stone", benefits: "Physical exfoliation", howToUse: "Gently rub on wet heels" },
      { name: "Vinegar", benefits: "Antifungal soak", howToUse: "Add to foot bath" },
      { name: "Coconut Oil", benefits: "Heals cracks", howToUse: "Apply generously overnight" }
    ],
    weeklyRitual: "Foot Soak: Warm water + salt + shampoo soak, scrub, and massage.",
    seasonalTips: [
      { season: "Winter", tips: ["Socks are mandatory for cracked heels"] },
      { season: "Monsoon", tips: ["Keep dry to prevent fungus"] }
    ]
  },
  neck: {
    name: "Neck Care",
    emoji: "🌸",
    overview: "The neck shows aging first. Treat it as an extension of your face.",
    commonMistakes: ["Applying skincare only to jawline", "Looking down at phones constantly (Tech Neck)", "Harsh scrubbing"],
    doList: ["Extend face products down", "Massage upward", "Sunscreen on neck!"],
    dontList: ["Pull skin downward", "Spray perfume in sun (causes spots)", "Ignore dark patches"],
    myths: [
      { myth: "Neck darkness is just dirt", fact: "It can be insulin resistance or sun damage." }
    ],
    morningRoutine: [
      { step: "Cleanse & Tone", time: "1m", frequency: "Daily" },
      { step: "SPF Application", time: "1m", frequency: "Daily" }
    ],
    afternoonRoutine: [
      { step: "Posture Check", time: "-", frequency: "Constant" }
    ],
    eveningRoutine: [
      { step: "Cleanse off sweat/spf", time: "2m", frequency: "Daily" }
    ],
    nightRoutine: [
      { step: "Upward massage with oil/cream", time: "3m", frequency: "Nightly" }
    ],
    ingredients: [
      { name: "Potato Juice", benefits: "Natural bleaching for dark patches", howToUse: "Apply juice for 15m" },
      { name: "Yogurt", benefits: "Lactic acid exfoliation", howToUse: "Mask for 20m" },
      { name: "Almond Oil", benefits: "Firming Massage", howToUse: "Upward strokes" }
    ],
    weeklyRitual: "Exfoliate neck gently with oatmeal/yogurt scrub.",
    seasonalTips: [
      { season: "Summer", tips: ["Don't forget back of neck SPF"] }
    ]
  },
  underarms: {
    name: "Underarm Care",
    emoji: "🧴",
    overview: "Delicate skin that needs freshness without harsh irritation.",
    commonMistakes: ["Dry shaving", "Over-using alcohol deodorants", "Scrubbing dark areas hard"],
    doList: ["Exfoliate gently", "Moisturize at night", "Wear breathable fabrics"],
    dontList: ["Shave immediately before beach/swim", "Use bleach", "Ignore rashes"],
    myths: [
      { myth: "Sweat causes odor", fact: "Bacteria digesting sweat causes odor." },
      { myth: "Shaving makes hair thicker", fact: "The blunt tip just feels coarser." }
    ],
    morningRoutine: [
      { step: "Gentle wash", time: "1m", frequency: "Daily" },
      { step: "Natural Deodorant/Alum block", time: "1m", frequency: "Daily" }
    ],
    afternoonRoutine: [],
    eveningRoutine: [
      { step: "Wash off deodorant", time: "2m", frequency: "Daily" }
    ],
    nightRoutine: [
      { step: "Aloe Vera gel soothing", time: "1m", frequency: "Daily" }
    ],
    ingredients: [
      { name: "Potato Slice", benefits: "Brightens pigmentation", howToUse: "Rub slice gently" },
      { name: "Aloe Vera", benefits: "Calms shaving rash", howToUse: "Apply gel" },
      { name: "Glycolic Acid (Low %)", benefits: "Chemical exfoliation & odor control", howToUse: "Apply toner 2x week" }
    ],
    weeklyRitual: "Detox mask: Bentonite clay + apple cider vinegar (carefully) for 5-10 mins.",
    seasonalTips: [
      { season: "Summer", tips: ["Shower twice daily", "Cotton clothes"] }
    ]
  },
  back: {
    name: "Back Care",
    emoji: "🌿",
    overview: "Often neglected, the back needs cleansing to prevent 'bacne' and dryness.",
    commonMistakes: ["Letting conditioner sit on back", "Not scrubbing tight spots", "Wearing sweaty sports bras long"],
    doList: ["Scrub with long brush", "Shower after workout", "Exfoliate weekly"],
    dontList: ["Pop back acne", "Use very hot water", "Wear tight synthetic fabrics 24/7"],
    myths: [
      { myth: "Sun dries up acne", fact: "It can worsen inflammation and spotting long term." }
    ],
    morningRoutine: [
      { step: "Cleansing", time: "2m", frequency: "Daily" }
    ],
    afternoonRoutine: [],
    eveningRoutine: [
      { step: "Post-workout shower", time: "5m", frequency: "As needed" }
    ],
    nightRoutine: [
      { step: "Light lotion (if dry)", time: "1m", frequency: "As needed" }
    ],
    ingredients: [
      { name: "Neem", benefits: "Antibacterial for acne", howToUse: "Neem water rinse" },
      { name: "Tea Tree Oil", benefits: "Spot treatment", howToUse: "Diluted on acne" },
      { name: "Sea Salt", benefits: "Scrub for smoothness", howToUse: "Body scrub weekly" }
    ],
    weeklyRitual: "Full body dry brushing followed by extensive scrub.",
    seasonalTips: [
      { season: "Summer", tips: ["Change out of sweaty clothes fast"] },
      { season: "Winter", tips: ["Rich body butter prevents itch"] }
    ]
  },
  intimate: {
    name: "Intimate Care",
    emoji: "🩷",
    overview: "Less is more. Maintain natural pH balance and focused hygiene.",
    commonMistakes: ["Using scented soaps/washes", "Douching", "Wearing tight synthetics daily"],
    doList: ["Water or prescribed wash only", "Cotton underwear", "Wipe front to back"],
    dontList: ["Use talcum powder", "Shave without lubricant", "Ignore prolonged itching"],
    myths: [
      { myth: "It needs to smell like flowers", fact: "A natural scent is healthy; heavy fragrance irritates." },
      { myth: "Discharge is always bad", fact: "Clear/white discharge varies by cycle and is normal." }
    ],
    morningRoutine: [
      { step: "Standard hygiene wash", time: "1m", frequency: "Daily" },
      { step: "Fresh breathable underwear", time: "-", frequency: "Daily" }
    ],
    afternoonRoutine: [],
    eveningRoutine: [],
    nightRoutine: [
      { step: "Loose clothing for sleep", time: "-", frequency: "Nightly" }
    ],
    ingredients: [
      { name: "Warm Water", benefits: "The best cleanser", howToUse: "Gentle rinsing" },
      { name: "Coconut Oil", benefits: "External moisturizer (if needed)", howToUse: "Tiny amount externally" },
      { name: "Yogurt (Diet)", benefits: "Probiotics for internal PH", howToUse: "Eat daily" }
    ],
    weeklyRitual: "No specific ritual - consistency and gentleness is key.",
    seasonalTips: [
      { season: "Summer", tips: ["Change frequently if sweating", "Avoid tight jeans"] }
    ]
  }
};

import SEO from "@/components/SEO";

// ... existing imports

const BodyPartDetail = () => {
  const { partId } = useParams();
  const data = bodyPartData[partId || "face"] || bodyPartData["face"];

  // ... tabs data
  const routineTabs = [
    { id: "morning", label: "Morning", icon: Sun, data: data.morningRoutine },
    { id: "afternoon", label: "Afternoon", icon: Coffee, data: data.afternoonRoutine },
    { id: "evening", label: "Evening", icon: Sunset, data: data.eveningRoutine },
    { id: "night", label: "Night", icon: Moon, data: data.nightRoutine },
  ];

  return (
    <Layout>
      <SEO
        title={`${data.name} Routine - Natural Glow Up Tips | GlowUpSaheli`}
        description={data.overview}
        canonical={`/body-care/${partId || "face"}`}
        keywords={[data.name.toLowerCase(), "skin care", "routine", "natural remedies", "glow up"]}
        ogType="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${data.name} - Natural Care Guide`,
          "description": data.overview,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://glowupsaheli.vercel.app/body-care/${partId || "face"}`
          }
        }}
      />
      {/* 1. Hero Header */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4">
          <Link to="/body-care" className="inline-block mb-8">
            <Button variant="ghost" className="hover:bg-white/50 gap-2 rounded-full px-6">
              <ArrowLeft className="w-4 h-4" /> Back to Interactive Model
            </Button>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-8xl mb-6 filter drop-shadow-xl inline-block"
            >
              {data.emoji}
            </motion.div>
            <h1 className="font-display text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-800 mb-6 py-2">
              {data.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {data.overview}
            </p>
          </div>
        </div>
      </section>

      {/* 2. DO's and DON'Ts (Categorized Boxes) */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-semibold text-center mb-10">Care Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Do's */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-green-50/80 border border-green-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-full text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Do's</h3>
              </div>
              <ul className="space-y-4">
                {data.doList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Don'ts */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-red-50/80 border border-red-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 rounded-full text-red-600">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-red-800">Don'ts</h3>
              </div>
              <ul className="space-y-4">
                {data.dontList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Routine Tabs (Glass Cards) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-semibold mb-3">Daily Rituals</h2>
            <p className="text-gray-500 text-lg">Step-by-step guidance for every part of your day</p>
          </div>

          <Tabs defaultValue="morning" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 w-full h-auto p-2 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm mb-8">
              {routineTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="py-3 flex flex-col sm:flex-row items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-rose-gold data-[state=active]:text-white rounded-xl transition-all"
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="text-sm font-semibold">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {routineTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="space-y-4">
                  {tab.data.length > 0 ? (
                    tab.data.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="p-5 md:p-6 bg-white border border-gray-100 rounded-3xl flex items-center justify-between shadow-sm hover:border-primary/30 transition-all hover:shadow-md">
                          <div className="flex items-center gap-6">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-gray-800 mb-1">{item.step}</h4>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-primary" /> {item.frequency}</span>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4 px-4 py-1.5 bg-gray-50 rounded-full text-sm font-bold text-gray-600 border border-gray-200 whitespace-nowrap min-w-[60px] text-center">
                            {item.time}
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="p-12 text-center text-gray-400 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                      <Coffee className="w-10 h-10 mx-auto mb-3 opacity-20" />
                      <p>No specific routine for this time. Relax! 🌿</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 4. Ingredients Showcase */}
      <section className="py-16 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-semibold text-center mb-12">Nature's Best</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.ingredients.map((ing, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="h-full p-8 rounded-[2rem] bg-white border border-white/50 shadow-card hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />

                  <Leaf className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="text-2xl font-display font-bold mb-2 text-gray-800">{ing.name}</h3>
                  <p className="text-primary font-medium mb-4">{ing.benefits}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">How to use</span>
                    <p className="text-gray-600 mt-1">{ing.howToUse}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Myths vs Facts Accordion style boxes */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-center mb-10">Busting Myths</h2>
          <div className="grid gap-6">
            {data.myths.map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="p-6 bg-red-50 flex flex-col justify-center">
                  <span className="text-red-500 font-bold text-xs uppercase tracking-widest mb-2">Myth</span>
                  <p className="text-lg font-medium text-red-900">"{item.myth}"</p>
                </div>
                <div className="p-6 bg-green-50 flex flex-col justify-center relative">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 bg-white rounded-full p-1 border border-gray-100 shadow-sm hidden md:block">
                    <ArrowLeft className="w-4 h-4 text-gray-400 rotate-180" />
                  </div>
                  <span className="text-green-600 font-bold text-xs uppercase tracking-widest mb-2">Fact</span>
                  <p className="text-lg font-medium text-green-900">{item.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default BodyPartDetail;
