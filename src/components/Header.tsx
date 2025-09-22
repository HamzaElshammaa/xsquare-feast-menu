import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
// Import static PDF to be served by Vite
import menuPdfUrl from "@/assets/Menu.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openMenuPdf = () => {
    window.open(menuPdfUrl, "_blank");
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/Icon-X.png" 
            alt="X-Square Burgers Logo" 
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            // onClick={() => scrollToSection("menu")} // old behavior: in-page scroll
            onClick={openMenuPdf}
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
            className="h-10 py-2 leading-none"
            onClick={() => window.open("https://xsquare.foodics.online", "_blank")}
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
              // onClick={() => scrollToSection("menu")} // old behavior: in-page scroll
              onClick={openMenuPdf}
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
              className="w-full h-auto py-2 leading-none"
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