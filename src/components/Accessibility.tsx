
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Accessibility as AccessibilityIcon, 
  Type, 
  PaintBucket, 
  MousePointer, 
  Eye, 
  XCircle,
  Info,
  RotateCcw
} from "lucide-react";
import AccessibilityStatement from './AccessibilityStatement';
import { useToast } from "@/components/ui/use-toast";

const Accessibility = () => {
  const { toast } = useToast();
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

  // Add state for accessibility statement
  const [showAccessibilityStatement, setShowAccessibilityStatement] = useState(false);

  // Load saved preferences
  useEffect(() => {
    try {
      const savedPreferences = localStorage.getItem('accessibilityPreferences');
      if (savedPreferences) {
        const preferences = JSON.parse(savedPreferences);
        setFontSize(preferences.fontSize || 1);
        setHighContrast(preferences.highContrast || false);
        setGrayscale(preferences.grayscale || false);
        setDyslexicFont(preferences.dyslexicFont || false);
        setCursorSize(preferences.cursorSize || 1);
        setAnimations(preferences.animations !== undefined ? preferences.animations : true);
        setSpacing(preferences.spacing || 1);
        setHighlightLinks(preferences.highlightLinks || false);
        setTextAlignment(preferences.textAlignment || "right");
        setFocusMode(preferences.focusMode || false);
        
        // Apply saved preferences
        applyFontSize(preferences.fontSize || 1);
        applyHighContrast(preferences.highContrast || false);
        applyGrayscale(preferences.grayscale || false);
        applyDyslexicFont(preferences.dyslexicFont || false);
        applyCursorSize(preferences.cursorSize || 1);
        applyAnimations(preferences.animations !== undefined ? preferences.animations : true);
        applySpacing(preferences.spacing || 1);
        applyHighlightLinks(preferences.highlightLinks || false);
        applyAlignment(preferences.textAlignment || "right");
        applyFocusMode(preferences.focusMode || false);
      }
    } catch (error) {
      console.error('Error loading accessibility preferences:', error);
    }
  }, []);

  // Save current settings to localStorage
  const savePreferences = () => {
    try {
      const preferences = {
        fontSize,
        highContrast,
        grayscale,
        dyslexicFont,
        cursorSize,
        animations,
        spacing,
        highlightLinks,
        textAlignment,
        focusMode
      };
      localStorage.setItem('accessibilityPreferences', JSON.stringify(preferences));
      toast({
        title: "הגדרות נשמרו",
        description: "הגדרות הנגישות שלך נשמרו בהצלחה",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error saving accessibility preferences:', error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const applyFontSize = (size: number) => {
    document.documentElement.style.fontSize = `${size}rem`;
  };

  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      const newSize = fontSize + 0.1;
      setFontSize(newSize);
      applyFontSize(newSize);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.8) {
      const newSize = fontSize - 0.1;
      setFontSize(newSize);
      applyFontSize(newSize);
    }
  };

  const resetFontSize = () => {
    setFontSize(1);
    applyFontSize(1);
  };

  const applyHighContrast = (enabled: boolean) => {
    if (enabled) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  };

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    applyHighContrast(newValue);
  };

  const applyGrayscale = (enabled: boolean) => {
    if (enabled) {
      document.body.classList.add("grayscale");
    } else {
      document.body.classList.remove("grayscale");
    }
  };

  const toggleGrayscale = () => {
    const newValue = !grayscale;
    setGrayscale(newValue);
    applyGrayscale(newValue);
  };

  const applyDyslexicFont = (enabled: boolean) => {
    if (enabled) {
      document.body.classList.add("dyslexic-font");
    } else {
      document.body.classList.remove("dyslexic-font");
    }
  };

  const toggleDyslexicFont = () => {
    const newValue = !dyslexicFont;
    setDyslexicFont(newValue);
    applyDyslexicFont(newValue);
  };

  const applyCursorSize = (size: number) => {
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
    }
  };

  const handleCursorSize = (value: number[]) => {
    const size = value[0];
    setCursorSize(size);
    applyCursorSize(size);
  };

  const applyAnimations = (enabled: boolean) => {
    if (!enabled) {
      document.body.classList.add("reduce-motion");
    } else {
      document.body.classList.remove("reduce-motion");
    }
  };

  const toggleAnimations = () => {
    const newValue = !animations;
    setAnimations(newValue);
    applyAnimations(newValue);
  };

  const applySpacing = (spacingValue: number) => {
    document.body.style.letterSpacing = `${(spacingValue - 1) * 0.12}em`;
    document.body.style.wordSpacing = `${(spacingValue - 1) * 0.16}em`;
    document.body.style.lineHeight = `${1 + (spacingValue - 1) * 0.1}`;
  };

  const handleSpacing = (value: number[]) => {
    const spacingValue = value[0];
    setSpacing(spacingValue);
    applySpacing(spacingValue);
  };

  const applyHighlightLinks = (enabled: boolean) => {
    if (enabled) {
      document.body.classList.add("highlight-links");
    } else {
      document.body.classList.remove("highlight-links");
    }
  };

  const toggleHighlightLinks = () => {
    const newValue = !highlightLinks;
    setHighlightLinks(newValue);
    applyHighlightLinks(newValue);
  };

  const applyAlignment = (value: string) => {
    document.body.classList.remove("text-left", "text-center", "text-right");
    document.body.classList.add(`text-${value}`);
  };

  const setAlignment = (value: string) => {
    setTextAlignment(value);
    applyAlignment(value);
  };

  const toggleVoiceReader = () => {
    setVoiceReader(!voiceReader);
    // Implementation depends on specific voice reader integration
  };

  const applyFocusMode = (enabled: boolean) => {
    if (enabled) {
      document.body.classList.add("focus-mode");
    } else {
      document.body.classList.remove("focus-mode");
    }
  };

  const toggleFocusMode = () => {
    const newValue = !focusMode;
    setFocusMode(newValue);
    applyFocusMode(newValue);
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
    
    toast({
      title: "איפוס הגדרות",
      description: "הגדרות הנגישות אופסו בהצלחה",
      duration: 3000,
    });
  };

  return (
    <>
      {/* Accessibility Button */}
      <div 
        className="fixed bottom-24 right-4 z-50"
        role="region"
        aria-label="תפריט נגישות"
      >
        <Button
          onClick={toggleMenu}
          className="bg-taco-blue text-white p-3 rounded-full shadow-lg hover:bg-taco-blue/90 h-12 w-12 flex items-center justify-center"
          aria-label="פתח תפריט נגישות"
          aria-expanded={isOpen}
          aria-controls="accessibility-menu"
        >
          <AccessibilityIcon size={24} className="accessibility-icon" />
        </Button>

        {isOpen && (
          <div 
            id="accessibility-menu"
            className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-80 border border-gray-200 max-h-[80vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-title"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 id="accessibility-title" className="text-lg font-bold text-taco-dark">הגדרות נגישות</h3>
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="highContrast" className="flex-grow">ניגודיות גבוהה</Label>
                    <Switch id="highContrast" checked={highContrast} onCheckedChange={toggleHighContrast} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="grayscale" className="flex-grow">מצב אפור</Label>
                    <Switch id="grayscale" checked={grayscale} onCheckedChange={toggleGrayscale} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dyslexicFont" className="flex-grow">גופן לדיסלקטים</Label>
                    <Switch id="dyslexicFont" checked={dyslexicFont} onCheckedChange={toggleDyslexicFont} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="highlightLinks" className="flex-grow">הדגשת קישורים</Label>
                    <Switch id="highlightLinks" checked={highlightLinks} onCheckedChange={toggleHighlightLinks} />
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
                      value={[cursorSize]}
                      max={3}
                      step={1}
                      min={1}
                      onValueChange={handleCursorSize}
                      aria-valuemin={1}
                      aria-valuemax={3}
                      aria-valuenow={cursorSize}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="animations" className="flex-grow">הפחתת אנימציות</Label>
                    <Switch id="animations" checked={!animations} onCheckedChange={() => toggleAnimations()} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="focusMode" className="flex-grow">מצב מיקוד</Label>
                    <Switch id="focusMode" checked={focusMode} onCheckedChange={toggleFocusMode} />
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
                      value={[spacing]}
                      max={3}
                      step={0.5}
                      min={1}
                      onValueChange={handleSpacing}
                      aria-valuemin={1}
                      aria-valuemax={3}
                      aria-valuenow={spacing}
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
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="readingGuide" className="flex-grow">מדריך קריאה</Label>
                    <Switch id="readingGuide" checked={readingGuide} onCheckedChange={toggleReadingGuide} />
                  </div>
                </div>
              </div>
              
              {/* Footer Actions */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    onClick={resetAll} 
                    variant="outline" 
                    size="sm" 
                    className="border-dashed flex items-center justify-center"
                    aria-label="איפוס כל ההגדרות"
                  >
                    <RotateCcw size={16} className="mr-1" />
                    איפוס הגדרות
                  </Button>
                  
                  <Button 
                    onClick={savePreferences} 
                    variant="secondary" 
                    size="sm" 
                    className="flex items-center justify-center"
                    aria-label="שמור הגדרות"
                  >
                    שמירת הגדרות
                  </Button>
                </div>
                
                <Button 
                  onClick={() => setShowAccessibilityStatement(true)} 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-xs text-gray-600 flex items-center justify-center"
                  aria-label="הצג הצהרת נגישות"
                >
                  <Info size={14} className="ml-1" />
                  הצהרת נגישות
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Reading Guide */}
      {readingGuide && (
        <div 
          className="fixed w-full h-8 bg-yellow-200/30 pointer-events-none z-40"
          style={{top: readingGuidePosition.y - 20}}
          role="presentation"
          aria-hidden="true"
        ></div>
      )}
      
      {/* Accessibility Statement */}
      <AccessibilityStatement 
        open={showAccessibilityStatement} 
        onOpenChange={setShowAccessibilityStatement} 
      />
    </>
  );
};

export default Accessibility;
