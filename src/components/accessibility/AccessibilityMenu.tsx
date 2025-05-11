
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextSizeSection from "./TextSizeSection";
import ColorDisplaySection from "./ColorDisplaySection";
import NavigationSection from "./NavigationSection";
import ReadingAidsSection from "./ReadingAidsSection";
import FooterActions from "./FooterActions";

interface AccessibilityMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  // Text size props
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  increaseFontSize: () => void;
  // Color & display props
  highContrast: boolean;
  toggleHighContrast: () => void;
  grayscale: boolean;
  toggleGrayscale: () => void;
  dyslexicFont: boolean;
  toggleDyslexicFont: () => void;
  highlightLinks: boolean;
  toggleHighlightLinks: () => void;
  // Navigation props
  cursorSize: number;
  handleCursorSize: (value: number[]) => void;
  animations: boolean;
  toggleAnimations: () => void;
  focusMode: boolean;
  toggleFocusMode: () => void;
  // Reading aids props
  spacing: number;
  handleSpacing: (value: number[]) => void;
  textAlignment: string;
  setAlignment: (value: string) => void;
  readingGuide: boolean;
  toggleReadingGuide: () => void;
  // Footer actions
  resetAll: () => void;
  savePreferences: () => void;
  showAccessibilityStatement: () => void;
}

const AccessibilityMenu = ({
  isOpen,
  toggleMenu,
  // Text size
  decreaseFontSize,
  resetFontSize,
  increaseFontSize,
  // Color & display
  highContrast,
  toggleHighContrast,
  grayscale,
  toggleGrayscale,
  dyslexicFont,
  toggleDyslexicFont,
  highlightLinks,
  toggleHighlightLinks,
  // Navigation
  cursorSize,
  handleCursorSize,
  animations,
  toggleAnimations,
  focusMode,
  toggleFocusMode,
  // Reading aids
  spacing,
  handleSpacing,
  textAlignment,
  setAlignment,
  readingGuide,
  toggleReadingGuide,
  // Footer actions
  resetAll,
  savePreferences,
  showAccessibilityStatement
}: AccessibilityMenuProps) => {
  if (!isOpen) {
    return null;
  }

  return (
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
        <TextSizeSection
          decreaseFontSize={decreaseFontSize}
          resetFontSize={resetFontSize}
          increaseFontSize={increaseFontSize}
        />
        
        <ColorDisplaySection 
          highContrast={highContrast}
          toggleHighContrast={toggleHighContrast}
          grayscale={grayscale}
          toggleGrayscale={toggleGrayscale}
          dyslexicFont={dyslexicFont}
          toggleDyslexicFont={toggleDyslexicFont}
          highlightLinks={highlightLinks}
          toggleHighlightLinks={toggleHighlightLinks}
        />
        
        <NavigationSection
          cursorSize={cursorSize}
          handleCursorSize={handleCursorSize}
          animations={animations}
          toggleAnimations={toggleAnimations}
          focusMode={focusMode}
          toggleFocusMode={toggleFocusMode}
        />
        
        <ReadingAidsSection
          spacing={spacing}
          handleSpacing={handleSpacing}
          textAlignment={textAlignment}
          setAlignment={setAlignment}
          readingGuide={readingGuide}
          toggleReadingGuide={toggleReadingGuide}
        />
        
        <FooterActions
          resetAll={resetAll}
          savePreferences={savePreferences}
          showAccessibilityStatement={showAccessibilityStatement}
        />
      </div>
    </div>
  );
};

export default AccessibilityMenu;
