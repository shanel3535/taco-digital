
import { Eye } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ReadingAidsSectionProps {
  spacing: number;
  handleSpacing: (value: number[]) => void;
  textAlignment: string;
  setAlignment: (value: string) => void;
  readingGuide: boolean;
  toggleReadingGuide: () => void;
}

const ReadingAidsSection = ({
  spacing,
  handleSpacing,
  textAlignment,
  setAlignment,
  readingGuide,
  toggleReadingGuide
}: ReadingAidsSectionProps) => {
  return (
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
  );
};

export default ReadingAidsSection;
