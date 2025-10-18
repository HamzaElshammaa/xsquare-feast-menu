/* import { useEffect, useRef } from "react";
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
 */


import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Again, a high-quality, subtly moving video is key here. 
// Think cinematic shots of your location, happy customers, or atmospheric city scenes.
const videoSrc = "https://placehold.co/1920x1080.mp4?text=The+X-Square+Vibe";

const Vision = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // This hook tracks scroll progress within the targetRef element
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  // Animate video scale for a subtle zoom effect
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // --- MOUSE TRACKING SPOTLIGHT ---
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  }

  // --- ENHANCED TEXT ANIMATION ---
  // A function to create a more dramatic animation set for each phrase
  const createTextAnimation = (entry: number, hold: number, exit: number) => {
    const opacity = useTransform(scrollYProgress, [entry, hold, exit], [0, 1, 0]);
    const y = useTransform(scrollYProgress, [entry, hold], ["20px", "0px"]);
    const scale = useTransform(scrollYProgress, [entry, hold], [0.95, 1]);
    const blur = useTransform(scrollYProgress, [entry, hold], ["blur(8px)", "blur(0px)"]);
    return { opacity, y, scale, filter: blur };
  };

  const p1Animation = createTextAnimation(0.1, 0.25, 0.4);
  const p2Animation = createTextAnimation(0.4, 0.55, 0.7);
  const p3Animation = createTextAnimation(0.7, 0.85, 1);

  return (
    // This section is taller than the viewport to allow for scrolling "through" it
    <section ref={targetRef} className="relative h-[250vh] bg-background">
      {/* The sticky container holds the content in the center while the parent scrolls */}
      <div 
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        
        {/* Background Video */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: videoScale }}
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>

        {/* Mouse-tracking spotlight effect */}
        <motion.div
          className="pointer-events-none absolute -inset-4 z-10 transition-opacity"
          style={{
            x: mouseX,
            y: mouseY,
            background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
          }}
        />

        {/* Text Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-12 text-white">
            Our Vision
          </h2>
          <div className="text-2xl md:text-4xl font-semibold leading-tight space-y-4">
            <motion.p style={p1Animation}>
              To set the bar for the gourmet fast-food scene in Egypt.
            </motion.p>
            <motion.p style={p2Animation}>
              To create loyal and happy customers, providing them with the ultimate food experience.
            </motion.p>
             <motion.p style={p3Animation} className="text-primary font-bold">
              Deliver a gratifying and memorable experience through high-quality, innovative fusion.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

