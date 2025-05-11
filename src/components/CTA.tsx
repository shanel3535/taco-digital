
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+972534703003";
  const message = "שלום, אני מעוניין לשיחת ייעוץ חינם";
  const quoteMessage = "שלום, אני מעוניין לקבל הצעת מחיר";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const quoteUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(quoteMessage)}`;
  
  const handleGetQuoteClick = () => {
    window.open(quoteUrl, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="cta-section" className="bg-gradient-hero text-white py-16">
      <div className="container-padded text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-pulse">
            מוכנים להפוך את הרעיון שלכם למציאות?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto animate-fade-in">
            צוות המומחים שלנו כאן כדי לעזור לכם לבנות את הנוכחות הדיגיטלית המושלמת לעסק שלכם. יצרו איתנו קשר עוד היום!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-taco-blue hover:bg-white/90 px-8 py-3 font-medium rounded-lg transition-all hover:scale-105 animate-bounce">
                לשיחת ייעוץ חינם
              </Button>
            </a>
            <Button 
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-3 font-medium rounded-lg transition-all hover:scale-105"
              onClick={handleGetQuoteClick}
            >
              קבל הצעת מחיר
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
