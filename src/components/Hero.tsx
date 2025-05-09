
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-20 lg:py-32">
      <div className="container-padded">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              פתרונות <span className="gradient-text">דיגיטליים</span> מתקדמים שעובדים
            </h1>
            <p className="text-taco-gray text-lg mb-8">
              בניית אתרי אינטרנט מרהיבים, אפליקציות מתקדמות ודפי נחיתה ממירים שמניעים תוצאות עסקיות אמיתיות
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">לשיחת ייעוץ חינם</Button>
              <Button className="btn-secondary">צפה בעבודות</Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-hero rounded-xl blur-xl opacity-30"></div>
              <img 
                src="/lovable-uploads/5d8be59e-eb75-4508-9417-94e08069e4e7.png" 
                alt="טאקו דיגיטל - פתרונות דיגיטליים מתקדמים" 
                className="relative max-w-xs rounded-xl w-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
