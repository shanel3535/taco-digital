
import { Type } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TextSizeSectionProps {
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  increaseFontSize: () => void;
}

const TextSizeSection = ({ decreaseFontSize, resetFontSize, increaseFontSize }: TextSizeSectionProps) => {
  return (
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
  );
};

export default TextSizeSection;
