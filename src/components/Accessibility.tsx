
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Accessibility as AccessibilityIcon } from "lucide-react";

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      const newSize = fontSize + 0.1;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}rem`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.8) {
      const newSize = fontSize - 0.1;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}rem`;
    }
  };

  const resetFontSize = () => {
    setFontSize(1);
    document.documentElement.style.fontSize = "1rem";
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  };

  const toggleGrayscale = () => {
    setGrayscale(!grayscale);
    if (!grayscale) {
      document.body.classList.add("grayscale");
    } else {
      document.body.classList.remove("grayscale");
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <Button
        onClick={toggleMenu}
        className="bg-taco-blue text-white p-3 rounded-full shadow-lg hover:bg-taco-blue/90 h-12 w-12 flex items-center justify-center"
      >
        <AccessibilityIcon size={24} />
      </Button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-72 border border-gray-200">
          <h3 className="text-lg font-bold mb-4 text-taco-dark">הגדרות נגישות</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">גודל טקסט</p>
              <div className="flex items-center gap-2">
                <Button onClick={decreaseFontSize} variant="outline" size="sm" className="h-8 w-8 p-0">-</Button>
                <Button onClick={resetFontSize} variant="outline" size="sm" className="h-8">איפוס</Button>
                <Button onClick={increaseFontSize} variant="outline" size="sm" className="h-8 w-8 p-0">+</Button>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button 
                onClick={toggleHighContrast} 
                variant={highContrast ? "default" : "outline"} 
                className="justify-start h-auto py-2"
              >
                ניגודיות גבוהה
              </Button>
              
              <Button 
                onClick={toggleGrayscale} 
                variant={grayscale ? "default" : "outline"} 
                className="justify-start h-auto py-2"
              >
                גווני אפור
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accessibility;
