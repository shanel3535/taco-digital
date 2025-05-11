
import { Accessibility as AccessibilityIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AccessibilityButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const AccessibilityButton = ({ isOpen, toggleMenu }: AccessibilityButtonProps) => {
  return (
    <Button
      onClick={toggleMenu}
      className="bg-taco-blue text-white p-3 rounded-full shadow-lg hover:bg-taco-blue/90 h-12 w-12 flex items-center justify-center !important"
      style={{ 
        backgroundColor: "var(--taco-blue, #0066cc)", 
        color: "white",
        filter: "none !important"
      }}
      aria-label="פתח תפריט נגישות"
      aria-expanded={isOpen}
      aria-controls="accessibility-menu"
    >
      <AccessibilityIcon size={24} className="accessibility-icon" style={{ filter: "none !important" }} />
    </Button>
  );
};

export default AccessibilityButton;
