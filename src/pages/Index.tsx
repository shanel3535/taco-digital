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
import Accessibility from "@/components/Accessibility"; // The import path stays the same, thanks to our re-export

const Index = () => {
  useEffect(() => {
    // Check if reduce-motion is enabled before initiating animations
    const applyAnimations = () => {
      const reduceMotion = document.body.classList.contains('reduce-motion');
      
      // Add intersection observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            // Check if reduce-motion is enabled before adding animations
            if (!reduceMotion) {
              // Add different animation classes based on index for variety
              const sections = Array.from(document.querySelectorAll('section'));
              const sectionsElements = sections.filter((s): s is HTMLElement => s instanceof HTMLElement);
              
              if (sectionsElements.includes(entry.target)) {
                const index = sectionsElements.indexOf(entry.target);
                
                if (index % 3 === 0) {
                  entry.target.classList.add('animate-fade-in-up');
                } else if (index % 3 === 1) {
                  entry.target.classList.add('animate-fade-in');
                  entry.target.style.animationDuration = '1s';
                } else {
                  entry.target.classList.add('animate-fade-in-up');
                  entry.target.style.animationDelay = '0.2s';
                }
                
                // Add animation to children elements
                const children = entry.target.querySelectorAll('h2, p, .service-card, .benefit-item, .portfolio-item');
                children.forEach((child, i) => {
                  if (child instanceof HTMLElement) {
                    child.classList.add('opacity-0');
                    setTimeout(() => {
                      child.classList.remove('opacity-0');
                      child.classList.add('animate-fade-in-up');
                      child.style.animationDelay = `${i * 0.15}s`;
                    }, 300);
                  }
                });
              }
            } else {
              // If reduce-motion is enabled, just make elements visible without animations
              entry.target.classList.remove('opacity-0');
              const children = entry.target.querySelectorAll('.opacity-0');
              children.forEach(child => {
                if (child instanceof HTMLElement) {
                  child.classList.remove('opacity-0');
                }
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
          if (!reduceMotion) {
            section.classList.add('opacity-0');
          }
          observer.observe(section);
        }
      });
      
      return () => {
        sections.forEach(section => {
          if (section instanceof HTMLElement) {
            observer.unobserve(section);
          }
        });
      };
    };
    
    // Initial application of animations
    const cleanup = applyAnimations();
    
    // Add scroll animations for background parallax effect
    const handleScroll = () => {
      // Only apply parallax if reduce-motion is not enabled
      if (!document.body.classList.contains('reduce-motion')) {
        const scrollPosition = window.scrollY;
        const headerBg = document.querySelector('.hero-section');
        if (headerBg && headerBg instanceof HTMLElement) {
          headerBg.style.backgroundPosition = `50% ${scrollPosition * 0.05}px`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Listen for accessibility changes
    const handleReduceMotionChange = () => {
      const reduceMotion = document.body.classList.contains('reduce-motion');
      
      // Reset animations
      document.querySelectorAll('.animate-fade-in, .animate-fade-in-up').forEach((el) => {
        if (el instanceof HTMLElement) {
          if (reduceMotion) {
            el.style.animationName = 'none';
            el.style.opacity = '1';
            el.style.transform = 'none';
          } else {
            el.style.animationName = '';
          }
        }
      });
      
      // Reapply animations if needed
      if (!reduceMotion) {
        cleanup();
        const newCleanup = applyAnimations();
        return newCleanup;
      }
      
      return cleanup;
    };
    
    // Create MutationObserver to detect when the reduce-motion class is added/removed
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          handleReduceMotionChange();
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      cleanup();
    };
  }, []);

  // Add animation for floating elements
  useEffect(() => {
    // Apply a floating animation to certain elements
    const floatingElements = document.querySelectorAll('.animate-float');
    let animationFrame: number;
    let lastTime = 0;
    
    const floatAnimation = (time: number) => {
      // Only apply float animation if reduce-motion is not enabled
      if (!document.body.classList.contains('reduce-motion')) {
        // Calculate delta time for smooth animations
        const deltaTime = time - lastTime;
        lastTime = time;
        
        floatingElements.forEach((el, index) => {
          if (el instanceof HTMLElement) {
            const t = time * 0.001 + index * 1.5;
            const y = Math.sin(t) * 8;
            
            el.style.transform = `translateY(${y}px)`;
          }
        });
        
        animationFrame = requestAnimationFrame(floatAnimation);
      } else {
        // Reset transform for floating elements when animations are disabled
        floatingElements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.transform = 'none';
          }
        });
      }
    };
    
    // Only start animation if reduce-motion is not enabled
    if (!document.body.classList.contains('reduce-motion')) {
      animationFrame = requestAnimationFrame(floatAnimation);
    }
    
    // Listen for accessibility changes
    const handleReduceMotionChange = () => {
      const reduceMotion = document.body.classList.contains('reduce-motion');
      
      if (reduceMotion) {
        // Stop animation and reset elements
        cancelAnimationFrame(animationFrame);
        floatingElements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.transform = 'none';
          }
        });
      } else {
        // Restart animation
        lastTime = performance.now();
        animationFrame = requestAnimationFrame(floatAnimation);
      }
    };
    
    // Create MutationObserver to detect when the reduce-motion class is added/removed
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          handleReduceMotionChange();
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
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
