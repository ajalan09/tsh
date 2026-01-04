import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const quarries = [
  {
    id: "suvliq",
    name: "Suvliq Quarry",
    description:
      "Known for its distinctive gray-blue granite with unique crystalline patterns.",
    varieties: 3,
    location: "Suvliq Region",
    image: "/suvliq-image.jpg",
  },
  {
    id: "khaterchi",
    name: "Khaterchi Quarry",
    description:
      "Produces warm-toned granite with rich amber and beige variations.",
    varieties: 3,
    location: "Khaterchi Area",
    image: "/khaterchi-img.jpg",
  },
  {
    id: "Gazgan-golden",
    name: "Gazgan Quarry",
    description:
      "A close-up view of Gazgan marble, featuring a speckled, granular texture with a blend of cream, gold, and charcoal-grey mineral patterns.",
    varieties: 3,
    location: "Gazgan Valley",
    image: "/gazgan-img.jpg",
  },
  {
    id: "Buxoro",
    name: "Buxoro Quarry",
    description:
      "Home to rare multi-toned granite with spectacular color depth.",
    varieties: 3,
    location: "Buxoro Region",
    image: "/new-image.jpg",
  },
];

const QuarriesSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase">
            Our Sources
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Four Premium Quarries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each quarry produces unique granite varieties with distinct
            characteristics, colors, and patterns found nowhere else in the
            world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quarries.map((quarry, index) => (
            <motion.div
              key={quarry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/products#${quarry.id}`}
                className="group block bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full"
              >
                <div className="aspect-[4/3] bg-muted rounded-lg mb-6 overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${quarry.image})` }}
                  ></div>

                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-stone-dark/80 text-primary-foreground text-xs rounded-full">
                    {quarry.varieties} varieties
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {quarry.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {quarry.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {quarry.location}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default QuarriesSection;
