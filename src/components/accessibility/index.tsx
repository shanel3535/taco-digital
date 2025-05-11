
import { useState } from 'react';
import useAccessibilitySettings from '@/hooks/useAccessibilitySettings';
import AccessibilityButton from './AccessibilityButton';
import AccessibilityMenu from './AccessibilityMenu';
import ReadingGuide from './ReadingGuide';
import AccessibilityStatement from '@/components/AccessibilityStatement';

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAccessibilityStatement, setShowAccessibilityStatement] = useState(false);
  
  const {
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
    toggleFocusMode,
    toggleReadingGuide,
    resetAll
  } = useAccessibilitySettings();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Accessibility Button */}
      <div 
        className="fixed bottom-24 right-4 z-50"
        role="region"
        aria-label="תפריט נגישות"
      >
        <AccessibilityButton
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />

        <AccessibilityMenu
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          // Text size props
          decreaseFontSize={decreaseFontSize}
          resetFontSize={resetFontSize}
          increaseFontSize={increaseFontSize}
          // Color & display props
          highContrast={highContrast}
          toggleHighContrast={toggleHighContrast}
          grayscale={grayscale}
          toggleGrayscale={toggleGrayscale}
          dyslexicFont={dyslexicFont}
          toggleDyslexicFont={toggleDyslexicFont}
          highlightLinks={highlightLinks}
          toggleHighlightLinks={toggleHighlightLinks}
          // Navigation props
          cursorSize={cursorSize}
          handleCursorSize={handleCursorSize}
          animations={animations}
          toggleAnimations={toggleAnimations}
          focusMode={focusMode}
          toggleFocusMode={toggleFocusMode}
          // Reading aids props
          spacing={spacing}
          handleSpacing={handleSpacing}
          textAlignment={textAlignment}
          setAlignment={setAlignment}
          readingGuide={readingGuide}
          toggleReadingGuide={toggleReadingGuide}
          // Footer actions
          resetAll={resetAll}
          savePreferences={savePreferences}
          showAccessibilityStatement={() => setShowAccessibilityStatement(true)}
        />
      </div>
      
      {/* Reading Guide */}
      <ReadingGuide 
        readingGuide={readingGuide} 
        yPosition={readingGuidePosition.y} 
      />
      
      {/* Accessibility Statement */}
      <AccessibilityStatement 
        open={showAccessibilityStatement} 
        onOpenChange={setShowAccessibilityStatement} 
      />
    </>
  );
};

export default Accessibility;
