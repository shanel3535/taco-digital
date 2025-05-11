
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

export interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  grayscale: boolean;
  dyslexicFont: boolean;
  cursorSize: number;
  animations: boolean;
  spacing: number;
  highlightLinks: boolean;
  textAlignment: string;
  focusMode: boolean;
}

const useAccessibilitySettings = () => {
  const { toast } = useToast();
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

  // Save preferences to localStorage
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

  // Font size functions
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

  // High contrast functions
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

  // Grayscale functions
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

  // Dyslexic font functions
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

  // Cursor size functions
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

  // Animation functions
  const applyAnimations = (enabled: boolean) => {
    if (!enabled) {
      document.body.classList.add("reduce-motion");
      
      // Force update of any active animations and floating elements
      const floatingElements = document.querySelectorAll('.animate-float');
      floatingElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.transform = 'none';
        }
      });
      
      // Remove animation classes that might be active
      document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-pulse').forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.animation = 'none';
        }
      });
      
    } else {
      document.body.classList.remove("reduce-motion");
      
      // Let animations restart naturally by removing inline styles
      document.querySelectorAll('.animate-float, .animate-fade-in, .animate-fade-in-up, .animate-pulse').forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.animation = '';
        }
      });
    }
  };

  const toggleAnimations = () => {
    const newValue = !animations;
    setAnimations(newValue);
    applyAnimations(newValue);
  };

  // Text spacing functions
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

  // Highlight links functions
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

  // Text alignment functions
  const applyAlignment = (value: string) => {
    document.body.classList.remove("text-left", "text-center", "text-right");
    document.body.classList.add(`text-${value}`);
  };

  const setAlignment = (value: string) => {
    setTextAlignment(value);
    applyAlignment(value);
  };

  // Voice reader functions
  const toggleVoiceReader = () => {
    setVoiceReader(!voiceReader);
    // Implementation depends on specific voice reader integration
  };

  // Focus mode functions
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

  // Reading guide functions
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
    
    // Also ensure animations are reset
    document.querySelectorAll('.animate-float, .animate-fade-in, .animate-fade-in-up').forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.transform = '';
        el.style.animation = '';
      }
    });
    
    toast({
      title: "איפוס הגדרות",
      description: "הגדרות הנגישות אופסו בהצלחה",
      duration: 3000,
    });
  };

  return {
    // States
    fontSize,
    highContrast,
    grayscale,
    dyslexicFont,
    cursorSize,
    animations,
    spacing,
    highlightLinks,
    textAlignment,
    focusMode,
    readingGuide,
    voiceReader,
    readingGuidePosition,
    // Functions
    savePreferences,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleHighContrast,
    toggleGrayscale,
    toggleDyslexicFont,
    handleCursorSize,
    toggleAnimations,
    handleSpacing,
    toggleHighlightLinks,
    setAlignment,
    toggleVoiceReader,
    toggleFocusMode,
    toggleReadingGuide,
    resetAll
  };
};

export default useAccessibilitySettings;
