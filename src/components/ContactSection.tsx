
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const phoneNumber = "0539901796";
  const message = "שלום, אני מעוניין לשמוע עוד על השירותים שלכם";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message with form data
    const formattedMessage = `שם: ${formData.name}\nטלפון: ${formData.phone}\nאימייל: ${formData.email}\nהודעה: ${formData.message}`;
    const whatsappFormUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
    
    // Open WhatsApp with the form data
    window.open(whatsappFormUrl, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-padded">
        <div className="text-center mb-16">
          <h2 className="section-title">
            צרו איתנו <span className="gradient-text">קשר</span>
          </h2>
          <p className="section-subtitle">
            מעוניינים לשמוע עוד? מלאו את הפרטים ואנחנו נחזור אליכם בהקדם
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-taco-light p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">פרטי התקשרות</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-taco-blue/10 rounded-full">
                  <Mail className="w-6 h-6 text-taco-blue" />
                </div>
                <div>
                  <p className="text-sm text-taco-gray">דוא"ל</p>
                  <p className="font-medium">takodigital35@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-taco-blue/10 rounded-full">
                  <Phone className="w-6 h-6 text-taco-blue" />
                </div>
                <div>
                  <p className="text-sm text-taco-gray">טלפון</p>
                  <p className="font-medium">+972-53-470-3003</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="p-3 bg-green-500/10 rounded-full">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-green-500 hover:underline">
                    שלח לנו הודעה בוואטסאפ
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-4">שעות פעילות</h4>
              <p className="text-taco-gray">ימים א'-ה': 8:00 - 20:00</p>
              <p className="text-taco-gray">יום ו': 9:00 - 14:00</p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-taco-dark font-medium mb-2">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-taco-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-taco-dark font-medium mb-2">
                  דוא"ל
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-taco-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-taco-dark font-medium mb-2">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-taco-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-taco-dark font-medium mb-2">
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-taco-blue"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                שליחת הודעה לוואטסאפ
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
