import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user has scrolled more than 50px, false otherwise
      setScrolled(window.scrollY > 50);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

    const goToMenuPage = () => {
    navigate("/menu");
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "h-16 bg-background/95 backdrop-blur-sm border-b border-border shadow-md" 
          : "h-20 bg-transparent border-b border-transparent",
        isMenuOpen && "bg-background/95 backdrop-blur-sm border-b border-border" // Ensure bg on mobile open
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/Icon-X.png" 
            alt="X-Square Burgers Logo" 
            className={cn(
              "w-auto transition-all duration-300 ease-in-out",
              scrolled ? "h-10" : "h-12"
            )}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("menu")}
            className={cn(" hover:text-primary transition-colors",
              scrolled ? "text-foreground" : "text-background")}
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("locations")}
            className={cn(" hover:text-primary transition-colors",
              scrolled ? "text-foreground" : "text-background")}
          >
            Locations
          </button>
          <Button 
            variant="cta" 
            size="sm"
            className="h-10 py-2 leading-none"
            onClick={() => window.open("https://foodics.online", "_blank")}
          >
            Order Online
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden", scrolled ? "text-foreground" : "text-background")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
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
