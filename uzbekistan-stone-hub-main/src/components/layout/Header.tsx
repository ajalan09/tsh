import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About Us" },
    { href: "/#contact", label: "Contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#"))
      return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname === href;
  };

  // ✅ Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center">
            <img
              src="/logo.png"
              alt="The Stone Hub Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => {
                  if (link.href === "/") scrollToTop();
                }}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  isActive(link.href) ? "text-gold" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+998904011234"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +998 90 401 1234
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    if (link.href === "/") scrollToTop();
                  }}
                  className={`text-base font-medium py-2 transition-colors ${
                    isActive(link.href) ? "text-gold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-border">
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/#contact" onClick={() => setIsOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
