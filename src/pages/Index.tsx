
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Accessibility from "@/components/Accessibility";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Benefits />
      <CTA />
      <ContactSection />
      <Footer />
      <WhatsappButton />
      <Accessibility />
    </div>
  );
};

export default Index;
