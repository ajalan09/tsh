import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Play,
  Filter,
  Grid,
  List,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Granite data organized by quarry
const quarryData = [
  {
    id: "suvliq",
    name: "Suvliq Quarry",
    description:
      "Distinguished gray-blue granite with exceptional crystalline structure",
    granites: [
      {
        id: "suvliq-grey",
        name: "Suvliq Grey",
        description: "Classic gray granite with subtle blue undertones",
        dimensions: ["240×120 cm", "280×140 cm", "320×160 cm"],
        thickness: ["2 cm", "3 cm", "5 cm"],
        finishes: ["Polished", "Honed", "Flamed", "Brushed"],
        usage: "Interior flooring, countertops, wall cladding",
      },
      {
        id: "suvliq-blue",
        name: "Suvliq Blue",
        description: "Distinctive blue-gray with dramatic veining",
        dimensions: ["240×120 cm", "280×140 cm"],
        thickness: ["2 cm", "3 cm"],
        finishes: ["Polished", "Honed"],
        usage: "Feature walls, premium countertops, monuments",
      },
      {
        id: "suvliq-silver",
        name: "Suvliq Silver",
        description: "Light silver-gray with fine crystalline texture",
        dimensions: ["240×120 cm", "280×140 cm", "320×160 cm"],
        thickness: ["2 cm", "3 cm", "5 cm"],
        finishes: ["Polished", "Honed", "Flamed", "Sandblasted"],
        usage: "Exterior paving, facades, landscaping",
      },
    ],
  },
  {
    id: "buxoro",
    name: "Buxoro Quarry",
    description: "Warm-toned granite with rich amber and beige variations",
    granites: [
      {
        id: "buxoro-gold",
        name: "Buxoro Gold",
        description: "Warm golden-beige with subtle amber highlights",
        dimensions: ["240×120 cm", "280×140 cm", "300×150 cm"],
        thickness: ["2 cm", "3 cm", "5 cm"],
        finishes: ["Polished", "Honed", "Flamed"],
        usage: "Luxury interiors, hotel lobbies, reception areas",
      },
      {
        id: "buxoro-sunset",
        name: "Buxoro Sunset",
        description: "Rich amber tones with orange-red veining",
        dimensions: ["240×120 cm", "280×140 cm"],
        thickness: ["2 cm", "3 cm"],
        finishes: ["Polished", "Honed"],
        usage: "Statement walls, custom furniture, art installations",
      },
      {
        id: "buxoro-cream",
        name: "Buxoro Cream",
        description: "Soft cream base with delicate warm patterns",
        dimensions: ["240×120 cm", "280×140 cm", "320×160 cm"],
        thickness: ["2 cm", "3 cm", "5 cm"],
        finishes: ["Polished", "Honed", "Flamed", "Brushed"],
        usage: "Residential flooring, bathroom vanities, kitchen tops",
      },
    ],
  },
  {
    id: "xatrichi",
    name: "Xatrichi Quarry",
    description: "Dark granite with elegant silver-gray veining",
    granites: [
      {
        id: "xatrichi-black",
        name: "Xatrichi Black",
        description: "Deep black granite with fine silver specks",
        dimensions: ["240×120 cm", "280×140 cm"],
        thickness: ["2 cm", "3 cm"],
        finishes: ["Polished", "Honed", "Leather"],
        usage: "Modern kitchens, executive offices, luxury retail",
      },
      {
        id: "xatrichi-charcoal",
        name: "Xatrichi Charcoal",
        description: "Dark charcoal with pronounced silver veining",
        dimensions: ["240×120 cm", "280×140 cm", "300×150 cm"],
        thickness: ["2 cm", "3 cm", "5 cm"],
        finishes: ["Polished", "Honed", "Flamed"],
        usage: "Commercial flooring, exterior cladding, monuments",
      },
      {
        id: "xatrichi-night",
        name: "Xatrichi Night",
        description: "Near-black with subtle galaxy-like patterns",
        dimensions: ["240×120 cm", "280×140 cm"],
        thickness: ["2 cm", "3 cm"],
        finishes: ["Polished", "Honed"],
        usage: "High-end residential, boutique hotels, premium showrooms",
      },
    ],
  },
  {
    id: "gazgan",
    name: "Gazgan Quarry",
    description: "Rare multi-toned granite with spectacular color depth",
    granites: [
      {
        id: "gazgan-aurora",
        name: "Gazgan Aurora",
        description: "Multi-colored with green, blue, and gold tones",
        dimensions: ["240×120 cm", "280×140 cm"],
        thickness: ["2 cm", "3 cm"],
        finishes: ["Polished", "Honed"],
        usage: "Exclusive interiors, art pieces, custom projects",
      },
      {
        id: "gazgan-emerald",
        name: "Gazgan Emerald",
        description: "Deep green base with darker veining patterns",
        dimensions: ["240×120 cm", "280×140 cm", "300×150 cm"],
        thickness: ["2 cm", "3 cm"],
        finishes: ["Polished", "Honed", "Leather"],
        usage: "Statement countertops, feature walls, luxury bathrooms",
      },
      {
        id: "gazgan-royal",
        name: "Gazgan Royal",
        description: "Rich burgundy tones with golden highlights",
        dimensions: ["240×120 cm", "280×140 cm"],
        thickness: ["2 cm", "3 cm"],
        finishes: ["Polished", "Honed"],
        usage: "Presidential suites, heritage buildings, museum installations",
      },
    ],
  },
];

const salesContact = {
  name: "Aziz Karimov",
  title: "Sales Manager",
  phone: "+998 90 123 45 67",
  whatsapp: "+998901234567",
  email: "sales@thestonehub.uz",
};

const Products = () => {
  const [activeQuarry, setActiveQuarry] = useState("suvliq");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-stone-dark text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Our Collection
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Premium Granite Products
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Explore our complete range of granite varieties from four
                premium quarries. Each stone is carefully selected and processed
                to meet international quality standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-video bg-muted rounded-xl overflow-hidden relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-medium/30 to-stone-dark/50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold">
                      <Play className="w-6 h-6 text-stone-dark ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 left-4 text-primary-foreground text-sm font-medium">
                    {i === 1
                      ? "Quarry Overview"
                      : i === 2
                      ? "Factory Tour"
                      : "Product Showcase"}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products by Quarry */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar - Quarry Tabs */}
              <div className="lg:w-64 shrink-0">
                <div className="sticky top-28 space-y-4">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                    Select Quarry
                  </h3>
                  {quarryData.map((quarry) => (
                    <button
                      key={quarry.id}
                      onClick={() => setActiveQuarry(quarry.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        activeQuarry === quarry.id
                          ? "bg-gold text-stone-dark shadow-gold"
                          : "bg-secondary text-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="font-semibold block">{quarry.name}</span>
                      <span
                        className={`text-xs ${
                          activeQuarry === quarry.id
                            ? "text-stone-dark/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {quarry.granites.length} varieties
                      </span>
                    </button>
                  ))}

                  {/* Sales Contact Card */}
                  <div className="mt-8 p-6 bg-stone-dark text-primary-foreground rounded-xl">
                    <h4 className="font-display font-semibold mb-4">
                      Sales Contact
                    </h4>
                    <p className="font-medium">{salesContact.name}</p>
                    <p className="text-sm text-primary-foreground/70 mb-4">
                      {salesContact.title}
                    </p>
                    <div className="space-y-2">
                      <a
                        href={`tel:${salesContact.phone}`}
                        className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {salesContact.phone}
                      </a>
                      <a
                        href={`https://wa.me/${salesContact.whatsapp}`}
                        className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a
                        href={`mailto:${salesContact.email}`}
                        className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {salesContact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {quarryData
                  .filter((q) => q.id === activeQuarry)
                  .map((quarry) => (
                    <div key={quarry.id} id={quarry.id}>
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                            {quarry.name}
                          </h2>
                          <p className="text-muted-foreground">
                            {quarry.description}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant={
                              viewMode === "grid" ? "default" : "outline"
                            }
                            size="icon"
                            onClick={() => setViewMode("grid")}
                          >
                            <Grid className="w-4 h-4" />
                          </Button>
                          <Button
                            variant={
                              viewMode === "list" ? "default" : "outline"
                            }
                            size="icon"
                            onClick={() => setViewMode("list")}
                          >
                            <List className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div
                        className={
                          viewMode === "grid"
                            ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                            : "space-y-6"
                        }
                      >
                        {quarry.granites.map((granite, index) => (
                          <motion.div
                            key={granite.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow ${
                              viewMode === "list"
                                ? "flex flex-col md:flex-row"
                                : ""
                            }`}
                          >
                            {/* Image Placeholder */}
                            <div
                              className={`bg-muted relative ${
                                viewMode === "list"
                                  ? "md:w-72 aspect-video md:aspect-auto md:h-auto"
                                  : "aspect-[4/3]"
                              }`}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-stone-light/50 to-stone-medium/30 flex items-center justify-center">
                                <span className="text-muted-foreground text-sm">
                                  {granite.name}
                                </span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1">
                              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                                {granite.name}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-4">
                                {granite.description}
                              </p>

                              {/* Specifications */}
                              <div className="space-y-3 text-sm">
                                <div>
                                  <span className="font-medium text-foreground">
                                    Dimensions:
                                  </span>
                                  <span className="text-muted-foreground ml-2">
                                    {granite.dimensions.join(" | ")}
                                  </span>
                                </div>
                                <div>
                                  <span className="font-medium text-foreground">
                                    Thickness:
                                  </span>
                                  <span className="text-muted-foreground ml-2">
                                    {granite.thickness.join(", ")}
                                  </span>
                                </div>
                                <div>
                                  <span className="font-medium text-foreground">
                                    Finishes:
                                  </span>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {granite.finishes.map((finish) => (
                                      <span
                                        key={finish}
                                        className="px-2 py-0.5 bg-secondary text-xs rounded"
                                      >
                                        {finish}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <span className="font-medium text-foreground">
                                    Best for:
                                  </span>
                                  <span className="text-muted-foreground ml-2">
                                    {granite.usage}
                                  </span>
                                </div>
                              </div>

                              <Button
                                variant="gold"
                                size="sm"
                                className="mt-6 w-full"
                              >
                                Request Quote
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Image Gallery
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
                Our Granite in Detail
              </h2>
            </motion.div>

            {/* Gallery Grid - 12 image placeholders */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer group ${
                    i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-stone-light/40 to-stone-medium/30 flex items-center justify-center relative">
                    <span className="text-muted-foreground text-sm">
                      Gallery Image {i + 1}
                    </span>
                    <div className="absolute inset-0 bg-stone-dark/0 group-hover:bg-stone-dark/30 transition-colors flex items-center justify-center">
                      <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                        View
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
