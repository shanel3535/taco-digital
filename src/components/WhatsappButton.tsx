
import { MessageCircle } from "lucide-react";

const WhatsappButton = () => {
  const phoneNumber = "0534703003";
  const message = "שלום, אני מעוניין לשמוע עוד על השירותים שלכם";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      aria-label="צור קשר בוואטסאפ"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsappButton;
