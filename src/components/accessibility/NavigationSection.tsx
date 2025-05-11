
import { MousePointer } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface NavigationSectionProps {
  cursorSize: number;
  handleCursorSize: (value: number[]) => void;
  animations: boolean;
  toggleAnimations: () => void;
  focusMode: boolean;
  toggleFocusMode: () => void;
}

const NavigationSection = ({
  cursorSize,
  handleCursorSize,
  animations,
  toggleAnimations,
  focusMode,
  toggleFocusMode
}: NavigationSectionProps) => {
  return (
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
          <Switch id="animations" checked={!animations} onCheckedChange={toggleAnimations} />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="focusMode" className="flex-grow">מצב מיקוד</Label>
          <Switch id="focusMode" checked={focusMode} onCheckedChange={toggleFocusMode} />
        </div>
      </div>
    </div>
  );
};

export default NavigationSection;
