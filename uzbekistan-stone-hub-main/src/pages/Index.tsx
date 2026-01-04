import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import QuarriesSection from "@/components/sections/QuarriesSection";
import FactorySection from "@/components/sections/FactorySection";
import ExportSection from "@/components/sections/ExportSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  // ✅ FORCE PAGE TO START FROM TOP ON REFRESH
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <QuarriesSection />
        <FactorySection />
        <ExportSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
