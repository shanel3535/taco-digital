
import { PaintBucket } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface ColorDisplaySectionProps {
  highContrast: boolean;
  toggleHighContrast: () => void;
  grayscale: boolean;
  toggleGrayscale: () => void;
  dyslexicFont: boolean;
  toggleDyslexicFont: () => void;
  highlightLinks: boolean;
  toggleHighlightLinks: () => void;
}

const ColorDisplaySection = ({
  highContrast, toggleHighContrast,
  grayscale, toggleGrayscale,
  dyslexicFont, toggleDyslexicFont,
  highlightLinks, toggleHighlightLinks
}: ColorDisplaySectionProps) => {
  return (
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
  );
};

export default ColorDisplaySection;
