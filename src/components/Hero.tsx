import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-burger.jpg";
// Import the static PDF so Vite bundles it
import menuPdfUrl from "@/assets/Menu.pdf";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openOnlineOrdering = () => {
    window.open("https://foodics.online", "_blank");
  };

  // New: open the PDF menu in a new tab
  const openMenuPdf = () => {
    window.open(menuPdfUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        /* style={{ backgroundImage: `url(${heroImage})` }} */
        style={{ backgroundColor: `white` }}
      >
        {/* Removed dark overlay to keep pure white background */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="mb-6 flex justify-center">
            <img 
              src="/lovable-uploads/XsquareLogo.png" 
              alt="X-Square Burgers Logo" 
              className="h-44 md:h-48 w-auto filter drop-shadow-2xl translate-y-[25px] md:translate-y-0 scale-[0.6] md:scale-100"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="block md:inline">Welcome to</span>{" "}
            <span className="whitespace-nowrap block md:inline">X-Square</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Gourmet burgers made with premium ingredients, served fresh to your taste buds
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToMenu}
            className="min-w-[200px]"
          >
            View Menu
          </Button>
          <Button 
            variant="menu" 
            size="xl"
            onClick={openOnlineOrdering}
            className="min-w-[200px]"
          >
            Order Online
          </Button>
        </div>

        <div className="mt-12 animate-bounce">
          <div className="w-1 h-16 bg-white/20 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;