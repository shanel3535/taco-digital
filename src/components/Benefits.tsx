
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    "תכנון מקצועי המותאם לצרכים הייחודיים שלך",
    "עיצוב מודרני ונקי שמותאם לזהות המותג שלך",
    "חווית משתמש אינטואיטיבית וקלה לשימוש",
    "תמיכה בכל מכשירי הנייד והטאבלט",
    "מערכות ניהול תוכן קלות לשימוש",
    "אבטחה מתקדמת המגנה על האתר והנתונים שלך",
  ];

  return (
    <section id="benefits" className="py-20 bg-taco-light">
      <div className="container-padded">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="יתרונות טאקו דיגיטל" 
              className="rounded-xl shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">
              למה לבחור <span className="gradient-text">בטאקו דיגיטל</span>?
            </h2>
            <p className="text-taco-gray mb-8">
              אנו מספקים פתרונות איכותיים ומותאמים אישית שיעזרו לעסק שלך להתבלט ולהשיג תוצאות טובות יותר. הנה כמה מהיתרונות שאנו מציעים:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                >
                  <div className="rounded-full bg-taco-blue/10 p-1 mt-1">
                    <Check className="w-4 h-4 text-taco-blue" />
                  </div>
                  <p className="text-taco-dark">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary">יצירת קשר עכשיו</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
