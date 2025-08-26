import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";


const Footer = () => {
  const openOnlineOrdering = () => {
    window.open("https://foodics.online", "_blank");
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/Logo-H-Full Color.png" 
                alt="X-Square Burgers Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-background/80">
              Gourmet burgers made with premium ingredients, served fresh to your taste buds.
            </p>
            <Button 
              variant="cta" 
              size="sm"
              onClick={openOnlineOrdering}
            >
              Order Online
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Locations
                </button>
              </li>
              <li>
                <a 
                  href="https://foodics.online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Online Ordering
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@xsquareburgers.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Multiple locations throughout the city</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hours</h3>
            <div className="space-y-2 text-background/80">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <div>
                  <p>Mon - Fri: 11:00 AM - 9:00 PM</p>
                  <p>Sat - Sun: 12:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 X-Square Burgers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;