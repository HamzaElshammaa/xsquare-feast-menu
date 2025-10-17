import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
// Import static PDF to be served by Vite
import menuPdfUrl from "@/assets/Menu.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const openMenuPdf = () => {
    window.open(menuPdfUrl, "_blank");
  };

  const goToMenuPage = () => {
    navigate("/menu");
    setIsMenuOpen(false);
  };

  // Observe sections on the home page to activate nav links
  useEffect(() => {
    if (location.pathname !== "/") {
      // Only observe when on home page
      setActiveId(null);
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      return;
    }

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Active detection should work regardless of motion settings
    const sections = ["menu", "locations"]; // extendable
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Find the most visible entry
        let best: { id: string; ratio: number } | null = null;
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          const ratio = entry.intersectionRatio;
          if (!best || ratio > best.ratio) best = { id, ratio };
        }
        if (best) setActiveId(best.id);
      },
      {
        root: null,
        // Trigger earlier so link highlights as section approaches center
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      }
    );

    elements.forEach((el) => io.observe(el));
    observerRef.current = io;
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/XsquareLogo.png" 
            alt="X-Square Burgers Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={goToMenuPage}
            className={`text-foreground hover:text-primary transition-colors`}
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("locations")}
            aria-current={activeId === "locations" ? "page" : undefined}
            className={`transition-colors ${activeId === "locations" ? "text-primary" : "text-foreground hover:text-primary"}`}
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
              onClick={goToMenuPage}
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