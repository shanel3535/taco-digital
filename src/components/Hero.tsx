
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+972534703003";
  const message = "שלום, אני מעוניין לשיחת ייעוץ חינם";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const handlePortfolioClick = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-20 lg:py-32 hero-section">
      <div className="container-padded">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`order-2 md:order-1 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              פתרונות <span className="gradient-text">דיגיטליים</span> מתקדמים שעובדים
            </h1>
            <p className="text-taco-gray text-lg mb-8">
              בניית אתרי אינטרנט מרהיבים, אפליקציות מתקדמות ודפי נחיתה ממירים שמניעים תוצאות עסקיות אמיתיות
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary hover:scale-105 transition-all animate-bounce">לשיחת ייעוץ חינם</Button>
              </a>
              <Button 
                className="btn-secondary hover:scale-105 transition-all" 
                onClick={handlePortfolioClick}
              >
                צפה בעבודות
              </Button>
            </div>
          </div>
          <div className={`order-1 md:order-2 flex justify-center transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-hero rounded-xl blur-xl opacity-30 animate-pulse"></div>
              <img 
                src="/lovable-uploads/72a97398-c951-4577-92d0-acc44a48465e.png" 
                alt="טאקו דיגיטל - פתרונות דיגיטליים מתקדמים" 
                className="relative max-w-xs rounded-xl w-full object-contain mx-auto animate-float"
                style={{ 
                  filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15))",
                  background: "transparent" 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
