
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Accessibility as AccessibilityIcon, 
  Type, 
  PaintBucket, 
  MousePointer, 
  Eye, 
  XCircle 
} from "lucide-react";

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [cursorSize, setCursorSize] = useState(1);
  const [animations, setAnimations] = useState(true);
  const [spacing, setSpacing] = useState(1);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [textAlignment, setTextAlignment] = useState("right");
  const [voiceReader, setVoiceReader] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
  const [readingGuidePosition, setReadingGuidePosition] = useState({ x: 0, y: 0 });

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

  const toggleDyslexicFont = () => {
    setDyslexicFont(!dyslexicFont);
    if (!dyslexicFont) {
      document.body.classList.add("dyslexic-font");
    } else {
      document.body.classList.remove("dyslexic-font");
    }
  };

  const handleCursorSize = (value: number[]) => {
    const size = value[0];
    setCursorSize(size);
    const cursorSizeClasses = ["default-cursor", "large-cursor", "xl-cursor"];
    
    // Remove all cursor classes first
    cursorSizeClasses.forEach(cls => {
      document.body.classList.remove(cls);
    });
    
    // Add the appropriate class based on cursor size
    if (size > 2) {
      document.body.classList.add("xl-cursor");
    } else if (size > 1) {
      document.body.classList.add("large-cursor");
    } else {
      document.body.classList.add("default-cursor");
    }
  };

  const toggleAnimations = () => {
    setAnimations(!animations);
    if (animations) {
      document.body.classList.add("reduce-motion");
    } else {
      document.body.classList.remove("reduce-motion");
    }
  };

  const handleSpacing = (value: number[]) => {
    const spacingValue = value[0];
    setSpacing(spacingValue);
    document.body.style.letterSpacing = `${(spacingValue - 1) * 0.12}em`;
    document.body.style.wordSpacing = `${(spacingValue - 1) * 0.16}em`;
    document.body.style.lineHeight = `${1 + (spacingValue - 1) * 0.1}`;
  };

  const toggleHighlightLinks = () => {
    setHighlightLinks(!highlightLinks);
    if (!highlightLinks) {
      document.body.classList.add("highlight-links");
    } else {
      document.body.classList.remove("highlight-links");
    }
  };

  const setAlignment = (value: string) => {
    setTextAlignment(value);
    document.body.classList.remove("text-left", "text-center", "text-right");
    document.body.classList.add(`text-${value}`);
  };

  const toggleVoiceReader = () => {
    setVoiceReader(!voiceReader);
    // Implementation depends on specific voice reader integration
  };

  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
    if (!focusMode) {
      document.body.classList.add("focus-mode");
    } else {
      document.body.classList.remove("focus-mode");
    }
  };

  const toggleReadingGuide = () => {
    setReadingGuide(!readingGuide);
  };

  // Track mouse for reading guide
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (readingGuide) {
        setReadingGuidePosition({ x: e.clientX, y: e.clientY });
      }
    };

    if (readingGuide) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [readingGuide]);

  // Reset all accessibility options
  const resetAll = () => {
    resetFontSize();
    setHighContrast(false);
    setGrayscale(false);
    setDyslexicFont(false);
    setCursorSize(1);
    setAnimations(true);
    setSpacing(1);
    setHighlightLinks(false);
    setTextAlignment("right");
    setVoiceReader(false);
    setFocusMode(false);
    setReadingGuide(false);
    
    document.body.classList.remove(
      "high-contrast", 
      "grayscale", 
      "dyslexic-font", 
      "large-cursor", 
      "xl-cursor", 
      "reduce-motion",
      "highlight-links",
      "text-left",
      "text-center",
      "focus-mode"
    );
    
    document.body.style.letterSpacing = "";
    document.body.style.wordSpacing = "";
    document.body.style.lineHeight = "";
  };

  // Add accessibility statement and help
  const [showAccessibilityStatement, setShowAccessibilityStatement] = useState(false);

  return (
    <>
      <div className="fixed bottom-24 right-4 z-50">
        <Button
          onClick={toggleMenu}
          className="bg-taco-blue text-white p-3 rounded-full shadow-lg hover:bg-taco-blue/90 h-12 w-12 flex items-center justify-center"
          aria-label="פתח תפריט נגישות"
        >
          <AccessibilityIcon size={24} />
        </Button>

        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-80 border border-gray-200 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-taco-dark">הגדרות נגישות</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleMenu}
                className="h-8 w-8 p-0"
                aria-label="סגור תפריט נגישות"
              >
                <XCircle size={20} />
              </Button>
            </div>
            
            <div className="space-y-6">
              {/* Text Size Section */}
              <div className="space-y-3 border-b pb-4">
                <div className="flex items-center gap-2">
                  <Type size={18} />
                  <h4 className="text-sm font-medium">גודל טקסט</h4>
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={decreaseFontSize} variant="outline" size="sm" className="h-8 w-8 p-0" aria-label="הקטן טקסט">-</Button>
                  <Button onClick={resetFontSize} variant="outline" size="sm" className="h-8 text-xs">איפוס</Button>
                  <Button onClick={increaseFontSize} variant="outline" size="sm" className="h-8 w-8 p-0" aria-label="הגדל טקסט">+</Button>
                </div>
              </div>
              
              {/* Color & Display Section */}
              <div className="space-y-3 border-b pb-4">
                <div className="flex items-center gap-2">
                  <PaintBucket size={18} />
                  <h4 className="text-sm font-medium">צבעים ותצוגה</h4>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="highContrast" checked={highContrast} onCheckedChange={() => toggleHighContrast()} />
                    <Label htmlFor="highContrast">ניגודיות גבוהה</Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Checkbox id="grayscale" checked={grayscale} onCheckedChange={() => toggleGrayscale()} />
                    <Label htmlFor="grayscale">מצב אפור</Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Checkbox id="dyslexicFont" checked={dyslexicFont} onCheckedChange={() => toggleDyslexicFont()} />
                    <Label htmlFor="dyslexicFont">גופן לדיסלקטים</Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Checkbox id="highlightLinks" checked={highlightLinks} onCheckedChange={() => toggleHighlightLinks()} />
                    <Label htmlFor="highlightLinks">הדגשת קישורים</Label>
                  </div>
                </div>
              </div>
              
              {/* Content & Navigation */}
              <div className="space-y-3 border-b pb-4">
                <div className="flex items-center gap-2">
                  <MousePointer size={18} />
                  <h4 className="text-sm font-medium">ניווט והתמצאות</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="cursorSize" className="text-xs mb-1 block">גודל סמן</Label>
                    <Slider
                      id="cursorSize"
                      defaultValue={[cursorSize]}
                      max={3}
                      step={1}
                      min={1}
                      onValueChange={handleCursorSize}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Checkbox id="animations" checked={animations} onCheckedChange={() => toggleAnimations()} />
                    <Label htmlFor="animations">הפחתת אנימציות</Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Checkbox id="focusMode" checked={focusMode} onCheckedChange={() => toggleFocusMode()} />
                    <Label htmlFor="focusMode">מצב מיקוד</Label>
                  </div>
                </div>
              </div>
              
              {/* Reading Aids */}
              <div className="space-y-3 border-b pb-4">
                <div className="flex items-center gap-2">
                  <Eye size={18} />
                  <h4 className="text-sm font-medium">עזרי קריאה</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="spacing" className="text-xs mb-1 block">מרווח בין אותיות ושורות</Label>
                    <Slider
                      id="spacing"
                      defaultValue={[spacing]}
                      max={3}
                      step={0.5}
                      min={1}
                      onValueChange={handleSpacing}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-xs block">יישור טקסט</Label>
                    <RadioGroup value={textAlignment} onValueChange={setAlignment} className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <RadioGroupItem value="right" id="right" />
                        <Label htmlFor="right" className="text-xs">ימין</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <RadioGroupItem value="center" id="center" />
                        <Label htmlFor="center" className="text-xs">מרכז</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <RadioGroupItem value="left" id="left" />
                        <Label htmlFor="left" className="text-xs">שמאל</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Checkbox id="readingGuide" checked={readingGuide} onCheckedChange={() => toggleReadingGuide()} />
                    <Label htmlFor="readingGuide">מדריך קריאה</Label>
                  </div>
                </div>
              </div>
              
              {/* Footer Actions */}
              <div className="space-y-3">
                <Button 
                  onClick={resetAll} 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-dashed"
                >
                  איפוס כל ההגדרות
                </Button>
                
                <Button 
                  onClick={() => setShowAccessibilityStatement(!showAccessibilityStatement)} 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-xs text-gray-600"
                >
                  הצהרת נגישות
                </Button>
              </div>
              
              {showAccessibilityStatement && (
                <div className="mt-4 pt-4 border-t text-xs">
                  <h5 className="font-bold mb-2">הצהרת נגישות</h5>
                  <p className="text-gray-600 leading-normal">
                    אתר זה נבנה בהתאם לתקנות נגישות האינטרנט הישראליות (תקנות שוויון זכויות לאנשים עם מוגבלות, תשע"ג 2013) וההנחיות הבינלאומיות (WCAG 2.1 AA).
                    אנו מחויבים להנגשת האתר לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות.
                  </p>
                  <p className="text-gray-600 mt-2 leading-normal">
                    לדיווח על בעיות נגישות או לקבלת עזרה בנושאי נגישות אנא פנו אלינו בדוא"ל: takodigital35@gmail.com.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {readingGuide && (
        <div 
          className="fixed w-full h-8 bg-yellow-200/30 pointer-events-none z-40"
          style={{top: readingGuidePosition.y - 20}}
        ></div>
      )}
    </>
  );
};

export default Accessibility;
