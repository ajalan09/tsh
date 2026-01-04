import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src="/logo.png"
              alt="The Stone Hub Logo"
              className="h-14 w-auto object-contain"
            />

            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Premium granite supplier from Uzbekistan&apos;s finest quarries.
              Delivering excellence in natural stone since 2010.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/*
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="text-primary-foreground/60 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              */}

              <a
                href="https://www.linkedin.com/company/the-stone-hub-granite-marble-industry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-gold transition-colors"
                aria-label="The Stone Hub LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/*
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-gold transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              */}
            </div>
          </div>

          {/* Our Quarries */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Our Quarries
            </h4>
            <ul className="space-y-3">
              {[
                "Suvliq Quarry",
                "Buxoro Quarry",
                "Xatrichi Quarry",
                "Gazgan Quarry",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm text-primary-foreground/70 cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Marmarabad MFY, Factory -1, 2 and 3, City- Gazgan, Navoi
                  Region, Uzbekistan - 210704
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a
                  href="tel:+998904011234"
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  +998 90 401 1234
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a
                  href="mailto:info@thestonehub.uz"
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  info@thestonehub.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 The Stone Hub. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="#"
              className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
