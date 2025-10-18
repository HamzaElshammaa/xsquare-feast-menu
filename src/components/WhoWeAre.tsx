/* import { useEffect, useRef } from "react";
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
 */



import { motion } from "framer-motion";

// It's highly recommended to replace this with a high-quality, authentic video 
// of your team, your food truck in action, or the cooking process.
// This video would go in your `public/videos` folder.
const videoSrc = "src/assets/XsquareLoop.mp4";

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Media (Video/Image Carousel) */}
          <motion.div 
            className="relative rounded-lg overflow-hidden shadow-2xl aspect-video md:aspect-[4/5]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              // Fallback background color in case video fails to load
              style={{ backgroundColor: 'var(--muted)' }}
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                We are a dynamic group of foodie masterminds, a group who roamed the world and tasted top worldwide cuisines, who kickstarted this flavor-packed adventure.
              </p>
              <p className="font-semibold text-primary">
                Our mission? To whip up a storm of fusion-kitchen delights, blending mouthwatering food with a dash of different countries' flair, with special focus on high quality ingredients.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
