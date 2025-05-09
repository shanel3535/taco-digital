
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "בית", href: "#" },
    { title: "שירותים", href: "#services" },
    { title: "עבודות", href: "#portfolio" },
    { title: "יתרונות", href: "#benefits" },
    { title: "צור קשר", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-30">
      <div className="container-padded flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/9070e2b0-d3d1-48b5-b734-585d705c1c22.png" 
            alt="טאקו דיגיטל"
            className="h-10 w-auto"
          />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.title}>
                <a 
                  href={item.href} 
                  className="text-taco-dark hover:text-taco-blue transition-colors font-medium"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Button className="btn-primary">צור קשר</Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-taco-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 shadow-md animate-fade-in">
          <div className="container px-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.title}>
                  <a 
                    href={item.href} 
                    className="block py-2 text-taco-dark hover:text-taco-blue transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button className="btn-primary w-full">צור קשר</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
