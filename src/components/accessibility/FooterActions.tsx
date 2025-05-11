
import { RotateCcw, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterActionsProps {
  resetAll: () => void;
  savePreferences: () => void;
  showAccessibilityStatement: () => void;
}

const FooterActions = ({
  resetAll,
  savePreferences,
  showAccessibilityStatement
}: FooterActionsProps) => {
  return (
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
        onClick={showAccessibilityStatement} 
        variant="ghost" 
        size="sm" 
        className="w-full text-xs text-gray-600 flex items-center justify-center"
        aria-label="הצג הצהרת נגישות"
      >
        <Info size={14} className="ml-1" />
        הצהרת נגישות
      </Button>
    </div>
  );
};

export default FooterActions;
