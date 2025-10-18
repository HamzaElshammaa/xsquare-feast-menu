import { useEffect, useRef } from "react";
import visionBg from "@/assets/vision-bg.jpg";

const Vision = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      
      if (scrollProgress > 0 && scrollProgress < 1) {
        const parallaxOffset = (scrollProgress - 0.5) * 100;
        sectionRef.current.style.backgroundPositionY = `${50 + parallaxOffset * 0.3}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-cover bg-center bg-fixed transition-all duration-300"
      style={{ backgroundImage: `url(${visionBg})` }}
    >
      <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground">
            Vision
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Set the bar for the gourmet fastfood scene in Egypt, and to create loyal and happy 
            customers, providing them with the ultimate food experience and deliver a gratifying and memorable food 
            experience to customers, we aim to offer high-quality food through an innovative 
            international fusion menu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
