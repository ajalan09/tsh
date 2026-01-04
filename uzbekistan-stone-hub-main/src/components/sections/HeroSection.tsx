import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleExploreClick = () => {
    const productsSection = document.getElementById("products");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-stone-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-dark/80 via-stone-dark/60 to-stone-dark/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/public/hero-bg.jpg')",
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-medium tracking-wider uppercase rounded-full mb-8">
            Premium Granite from Uzbekistan
          </span>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Timeless Elegance in
            <span className="block text-gold">Natural Stone</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover exceptional granite from Uzbekistan's most prestigious
            quarries. Superior quality, remarkable patterns, delivered
            worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* ✅ UPDATED BUTTON */}
            <Button variant="heroSolid" size="xl" onClick={handleExploreClick}>
              Explore Collection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <a
              href="#factory-video"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-primary-foreground hover:bg-white/20 transition group text-lg"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Video
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-20 max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-col items-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">
              4
            </div>
            <div className="text-sm text-primary-foreground/60 uppercase tracking-widest">
              Quarries
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">
              12+
            </div>
            <div className="text-sm text-primary-foreground/60 uppercase tracking-widest">
              Granite Types
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">
              5+
            </div>
            <div className="text-sm text-primary-foreground/60 uppercase tracking-widest">
              Countries Served
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-gold rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
