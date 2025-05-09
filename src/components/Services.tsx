
import { Code, Layout, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "בניית אתרים",
      description: "אתרים מודרניים, מותאמים לנייד, מהירים ותומכי SEO. גישה לכל סוגי העסקים והתקציבים",
      icon: <Layout className="w-10 h-10 text-taco-blue" />,
    },
    {
      title: "פיתוח אפליקציות",
      description: "אפליקציות מותאמות אישית לכל פלטפורמה, מעוצבות בקפידה וקלות לשימוש עבור כל משתמש",
      icon: <Code className="w-10 h-10 text-taco-teal" />,
    },
    {
      title: "דפי נחיתה",
      description: "דפי נחיתה ממוקדים המרה שמובילים לתוצאות עסקיות אמיתיות ומגדילים את הכנסות העסק",
      icon: <Search className="w-10 h-10 text-taco-orange" />,
    },
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="container-padded">
        <div className="text-center mb-16">
          <h2 className="section-title">
            הפתרונות <span className="gradient-text">הדיגיטליים</span> שלנו
          </h2>
          <p className="section-subtitle">
            אנו מתמחים במגוון פתרונות דיגיטליים שיעזרו לעסק שלכם לצמוח ולהגיע לקהלים חדשים
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 p-4 rounded-full bg-blue-50">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-taco-gray">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
