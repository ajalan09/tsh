import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Office & Factory",
      value:
        "Marmarabad MFY, Factory -1, 2 and 3, City- Gazgan, Navoi Region, Uzbekistan - 210704",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+998 90 401 1234",
      href: "tel:+998901234567",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "+998 90 401 1234",
      href: "https://wa.me/998901234567",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@thestonehub.uz / bbabulal@gmail.com",
      // href: "mailto:info@thestonehub.uz",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to source premium granite? Contact our team for quotes,
            samples, and expert consultation.
          </p>
        </motion.div>

        <div className="grid gap-12 max-w-4xl mx-auto">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-background p-8 rounded-xl shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MAP REMOVED TEMPORARILY */}
          {/*
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square lg:aspect-auto lg:h-full bg-muted rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-light/30 to-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Map Integration
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Tashkent, Uzbekistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
