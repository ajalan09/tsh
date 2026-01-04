// import { motion } from "framer-motion";
// import { Play, Factory, Cog, Ruler, Package } from "lucide-react";

// const FactorySection = () => {
//   /*
//   const capabilities = [
//     { icon: Factory, label: "20,000 sqm Facility" },
//     { icon: Cog, label: "Modern CNC Machines" },
//     { icon: Ruler, label: "Custom Dimensions" },
//     { icon: Package, label: "Expert Packaging" },
//   ];
//   */

//   return (
//     <>
//       {/*
//       <section id="factory" className="py-24 bg-background">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <span className="text-gold text-sm font-medium tracking-wider uppercase">
//                 Our Factory
//               </span>

//               <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
//                 State-of-the-Art Processing Facility
//               </h2>

//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 Our modern factory is equipped with the latest Italian and German
//                 machinery, enabling us to process granite blocks into finished
//                 products with exceptional precision and efficiency.
//               </p>

//               <p className="text-muted-foreground leading-relaxed mb-8">
//                 From cutting and polishing to edge finishing and quality control,
//                 every step is carried out by skilled craftsmen using advanced
//                 technology. Our monthly capacity exceeds 50,000 square meters of
//                 processed granite.
//               </p>

//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 {capabilities.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
//                   >
//                     <item.icon className="w-5 h-5 text-gold" />
//                     <span className="text-sm font-medium text-foreground">
//                       {item.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <div className="p-6 bg-stone-dark rounded-xl text-primary-foreground">
//                 <h4 className="font-display font-semibold mb-2">
//                   Processing Capabilities
//                 </h4>
//                 <ul className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
//                   <li>• Slabs up to 320cm x 180cm</li>
//                   <li>• Thickness: 2cm to 10cm</li>
//                   <li>• Polished, Honed, Flamed</li>
//                   <li>• Brushed, Sandblasted</li>
//                 </ul>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="relative">
//                 <div
//                   id="factory-video"
//                   className="aspect-video rounded-xl overflow-hidden shadow-lg"
//                 >
//                   <video controls className="w-full h-full">
//                     <source src="/factory-tour.mp4" />
//                   </video>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>
//       */}
//     </>
//   );
// };

// export default FactorySection;

//////////////////////////////                  removed content only video is their         ////////////////////////////////

import { motion } from "framer-motion";

const FactorySection = () => {
  return (
    <section id="factory" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Factory Video */}
          <div
            id="factory-video"
            className="aspect-video rounded-xl overflow-hidden shadow-lg"
          >
            <video controls className="w-full h-full">
              <source src="/factory-tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FactorySection;
