import { useEffect, useRef } from "react";
import whoWeAreBg from "@/assets/who-we-are-bg.jpg";

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;
      
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
      style={{ backgroundImage: `url(${whoWeAreBg})` }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto text-center animate-fade-in"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            A dynamic group of foodie masterminds, a group who roamed the world and tasted top worldwide 
            cuisines, kickstarted this flavor-packed adventure. Our mission? To whip up a storm of fusion-kitchen 
            delights, blending mouthwatering food with a dash of different countries' flair, with special focus on 
            high quality ingredients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
