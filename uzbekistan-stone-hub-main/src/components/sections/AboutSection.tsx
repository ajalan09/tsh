import { motion } from "framer-motion";
import { Award, Globe, Truck, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Handpicked granite from Uzbekistan's finest deposits",
    },
    {
      icon: Globe,
      title: "Global Export",
      description: "Delivering to over 50 countries worldwide",
    },
    {
      icon: Truck,
      title: "Reliable Logistics",
      description: "Professional packaging and timely delivery",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous testing and certification standards",
    },
  ];

  return (
    /* ✅ STEP-1: ID ADDED FOR NAVBAR SCROLL */
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div
                className="aspect-[4/5] rounded-lg overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/public/querry-image.jpg')" }}
              />
              <div
                className="aspect-square rounded-lg overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/public/granite-img.jfif')" }}
              />
            </div>

            <div className="space-y-4 pt-8">
              <div
                className="aspect-square rounded-lg overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/public/factory_image.jpg')" }}
              />
              <div
                className="aspect-[4/5] rounded-lg overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/public/team-image.jpg')" }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              About The Stone Hub
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              THE STONE HUB LLC — In Conjunction with EDIFICE AASPIRE
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              THE STONE HUB LLC, in conjunction with EDIFICE AASPIRE, is a
              leading exporter of premium granite from Central Asia, serving key
              markets across Tajikistan, Kyrgyzstan, Kazakhstan, Uzbekistan, and
              Russia. Backed by strong quarry ownership, advanced processing
              capabilities, and reliable regional logistics, we consistently
              deliver high-quality natural stone at scale.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Our quarries in Suvliq, Buxoro, Xatrichi, and Gazgan produce
              distinctive granite known for durability, natural beauty, and
              architectural versatility. Using state-of-the-art machinery from
              leading manufacturers in India and China, we supply granite in
              multiple thicknesses and finishes—including polished,
              leather-polished, flamed, and sandblasted—serving residential,
              commercial, and infrastructure projects worldwide with a monthly
              capacity of 30,000 sqm.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
