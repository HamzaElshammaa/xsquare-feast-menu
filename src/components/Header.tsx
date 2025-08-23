import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/0527c946-d139-4c3e-8b53-6e0ea8cb40a8.png" 
            alt="X-Square Burgers Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("menu")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("locations")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Locations
          </button>
          <Button 
            variant="cta" 
            size="sm"
            onClick={() => window.open("https://foodics.online", "_blank")}
          >
            Order Online
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("locations")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Locations
            </button>
            <Button 
              variant="cta" 
              size="sm" 
              className="w-full"
              onClick={() => window.open("https://foodics.online", "_blank")}
            >
              Order Online
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;