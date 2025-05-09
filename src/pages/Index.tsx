
import { useEffect } from "react";
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
  useEffect(() => {
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add different animation classes based on index for variety
          const sections = Array.from(document.querySelectorAll('section'));
          // Ensure entry.target is in the sections array and is an HTMLElement
          if (entry.target instanceof HTMLElement && sections.includes(entry.target)) {
            const index = sections.indexOf(entry.target);
            
            if (index % 3 === 0) {
              entry.target.classList.add('animate-fade-in-up');
            } else if (index % 3 === 1) {
              entry.target.classList.add('animate-fade-in');
              entry.target.style.animationDuration = '1s';
            } else {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.style.animationDelay = '0.2s';
            }
            
            // Add animation to children elements with type checking
            const children = entry.target.querySelectorAll('h2, p, .service-card, .benefit-item, .portfolio-item');
            children.forEach((child, i) => {
              child.classList.add('opacity-0');
              setTimeout(() => {
                child.classList.remove('opacity-0');
                child.classList.add('animate-fade-in-up');
                // Fix: Cast to HTMLElement to access style
                if (child instanceof HTMLElement) {
                  child.style.animationDelay = `${i * 0.15}s`;
                }
              }, 300);
            });
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all sections except hero
    const sections = document.querySelectorAll('section:not(.hero-section)');
    sections.forEach(section => {
      if (section instanceof HTMLElement) {
        section.classList.add('opacity-0');
        observer.observe(section);
      }
    });
    
    // Add scroll animations for background parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerBg = document.querySelector('.hero-section');
      if (headerBg && headerBg instanceof HTMLElement) {
        headerBg.style.backgroundPosition = `50% ${scrollPosition * 0.05}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add animation for floating elements
  useEffect(() => {
    // Apply a floating animation to certain elements
    const floatingElements = document.querySelectorAll('.animate-float');
    
    const floatAnimation = () => {
      floatingElements.forEach((el, index) => {
        if (el instanceof HTMLElement) {
          const time = Date.now() * 0.001 + index * 1.5;
          const y = Math.sin(time) * 8;
          
          el.style.transform = `translateY(${y}px)`;
        }
      });
      
      requestAnimationFrame(floatAnimation);
    };
    
    const animationFrame = requestAnimationFrame(floatAnimation);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

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
