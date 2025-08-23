import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-burger.jpg";


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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="mb-6 flex justify-center">
            <img 
              src="/lovable-uploads/0527c946-d139-4c3e-8b53-6e0ea8cb40a8.png" 
              alt="X-Square Burgers Logo" 
              className="h-32 w-auto filter drop-shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Welcome to X-Square
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Gourmet burgers made with premium ingredients, served fresh from our truck to your taste buds
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
          <div className="w-1 h-16 bg-white/50 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;