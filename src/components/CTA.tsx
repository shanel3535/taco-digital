
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-gradient-hero text-white py-16">
      <div className="container-padded text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          מוכנים להפוך את הרעיון שלכם למציאות?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          צוות המומחים שלנו כאן כדי לעזור לכם לבנות את הנוכחות הדיגיטלית המושלמת לעסק שלכם. יצרו איתנו קשר עוד היום!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-taco-blue hover:bg-white/90 px-8 py-3 font-medium rounded-lg">
            לשיחת ייעוץ חינם
          </Button>
          <Button className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-3 font-medium rounded-lg">
            קבל הצעת מחיר
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
