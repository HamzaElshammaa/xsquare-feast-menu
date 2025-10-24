import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
/* import whoWeAreBg from "../assets/who-we-are-bg.jpg"; */
import whoWeAreBg from "../assets/SmashBurger6.jpg";
import videoSrc from "../assets/XsquareLoop.mp4";

// This is the "Vision" part, self-contained to manage its own animations
const VisionContent = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Mouse-tracking spotlight logic
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

  // Text animation logic
  const createTextAnimation = (entry: number, hold: number, exit: number) => {
    const opacity = useTransform(scrollYProgress, [entry, hold, exit], [0, 1, 0]);
    const y = useTransform(scrollYProgress, [entry, hold], ["20px", "0px"]);
    return { opacity, y };
  };

  const p1Animation = createTextAnimation(0.1, 0.25, 0.35);
  const p2Animation = createTextAnimation(0.35, 0.55, 0.65);
  const p3Animation = createTextAnimation(0.65, 0.85, 0.9);

  return (
    <div ref={targetRef} className="relative h-[250vh]">
      <div 
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Transparent overlay for the content */}
        <div className="absolute inset-0 bg-secondary/10 backdrop-blur-lg" />

         {/* Mouse-tracking spotlight effect */}
         <motion.div
          className="pointer-events-none absolute -inset-4 z-10 transition-opacity"
          style={{
            x: mouseX,
            y: mouseY,
            background: "radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 50%)",
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
             <motion.p style={p3Animation} className="text-primary font-extrabold">
              Deliver a gratifying and memorable experience through high-quality, innovative fusion.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};


// This is the "Who We Are" part
const WhoWeAreContent = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 px-4">
       {/* Transparent overlay for the content */}
       {/* <div className="absolute inset-0 bg-secondary/10 backdrop-blur-lg" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white/70 backdrop-blur-sm border border-white/0 p-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
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
              style={{ backgroundColor: "var(--muted)" }}
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

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
      </div>
    </div>
  );
};

// The main component that combines everything
const StorySection = () => {
  return (
    <section className="relative bg-background">
      {/* Shared Sticky Background */}
      <div className="sticky top-0 h-screen w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${whoWeAreBg})` }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Scrolling Content Wrapper */}
      <div className="relative z-10 -mt-[100vh]">
        <WhoWeAreContent />
        <VisionContent />
      </div>
    </section>
  );
};

export default StorySection;

