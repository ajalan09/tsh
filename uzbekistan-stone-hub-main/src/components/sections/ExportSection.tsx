import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const ExportSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const suvliqImages = [
    { src: "suvliq-product.jpg", name: "Suvliq Polished" },
    { src: "suvliq-product.jpg", name: "Suvliq Leather Polished" },
    { src: "suvliq-product.jpg", name: "Suvliq Flamed" },
    { src: "suvliq-product.jpg", name: "Suvliq Sandblasted" },
  ];

  const gazgonImages = [
    { src: "gazgan-product.jpg", name: "Gazgon Polished" },
    { src: "gazgan-product.jpg", name: "Gazgon Leather Polished" },
    { src: "gazgan-product.jpg", name: "Gazgon Flamed" },
    { src: "gazgan-product.jpg", name: "Gazgon Sandblasted" },
  ];

  return (
    // ✅ ADDING ID HERE IS THE KEY FIX
    <section id="products" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium granite collections sourced from Uzbekistan’s leading
            quarries.
          </p>
        </motion.div>

        {/* ===== Suvliq Section ===== */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-center">
            Suvliq
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suvliqImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <div
                  className="relative overflow-hidden rounded-2xl shadow-medium group cursor-pointer w-full"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="mt-3 text-sm font-medium text-foreground text-center">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== Gazgan Section ===== */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-center">
            Gazgan
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gazgonImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <div
                  className="relative overflow-hidden rounded-2xl shadow-medium group cursor-pointer w-full"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="mt-3 text-sm font-medium text-foreground text-center">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔍 IMAGE LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
              >
                <X className="w-8 h-8" />
              </button>

              <img
                src={selectedImage}
                alt="Expanded product"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExportSection;
