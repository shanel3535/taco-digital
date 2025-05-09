
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "אתר משכנתאות - עמית דניאל",
      category: "אתרי אינטרנט",
      image: "/lovable-uploads/5f1eb38b-f301-4af1-9928-7d7fdcbeb2b1.png",
      description: "אתר שמחבר בין עיצוב נקי ומודרני, חוויית משתמש ברמה גבוהה, ומסרים ברורים שמובילים לפעולה.",
      url: "https://www.elle-m.co.il"
    },
    {
      title: "אתר חנות אונליין",
      category: "אתרי אינטרנט",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "אפליקציה לניהול זמן",
      category: "אפליקציות",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "דף נחיתה למוצר טכנולוגי",
      category: "דפי נחיתה",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container-padded">
        <div className="text-center mb-16">
          <h2 className="section-title">
            העבודות <span className="gradient-text">האחרונות</span> שלנו
          </h2>
          <p className="section-subtitle">
            חלק מהפרויקטים האחרונים שיצרנו עבור לקוחותינו המרוצים
          </p>
          <div className="mt-4 mb-8">
            <p className="text-taco-blue font-semibold inline-block px-4 py-2 bg-blue-50 rounded-full">
              אתר חדש באוויר ללקוחה מדהימה – עמית דניאל!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group rounded-xl overflow-hidden shadow-lg relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-taco-teal text-sm font-medium">{project.category}</span>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  {project.description && (
                    <p className="text-white/90 text-sm mt-2">{project.description}</p>
                  )}
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-taco-teal mt-3 text-sm hover:underline"
                    >
                      צפה באתר <ExternalLink size={16} className="mr-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-taco-gray">
            בטאקו דיגיטל אנחנו בונים אתרים ואפליקציות שמייצרים תוצאות, לא רק רושם.
          </p>
          <p className="mb-8 font-medium">
            גם אתם רוצים אתר שמביא לקוחות?
            שלחו לנו הודעה ונראה איך הופכים את הרעיון שלכם למציאות דיגיטלית.
          </p>
          <Button className="btn-secondary">
            צפה בכל העבודות
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
