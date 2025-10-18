import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-burger.jpg";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 20, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 260, damping: 20, mass: 0.3 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const radius = 120; // px influence
    if (dist < radius) {
      const strength = 0.18;
      mx.set(dx * strength);
      my.set(dy * strength);
    } else {
      mx.set(0);
      my.set(0);
    }
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };
  return (
    <motion.div ref={wrapRef} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x: sx, y: sy }} className="will-change-transform">
      {children}
    </motion.div>
  );
};


const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgMouseRef = useRef<HTMLDivElement | null>(null);
  const fgMouseRef = useRef<HTMLDivElement | null>(null);
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openOnlineOrdering = () => {
    window.open("https://foodics.online", "_blank");
  };

  // Mouse parallax within hero
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onPointerMove = (e: PointerEvent) => {
      const rect = sectionEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const px = (e.clientX - cx) / (rect.width / 2);
      const py = (e.clientY - cy) / (rect.height / 2);
      const clamp = (v: number) => Math.max(-1, Math.min(1, v));
      const x = clamp(px);
      const y = clamp(py);
      const bg = bgMouseRef.current;
      const fg = fgMouseRef.current;
      if (bg) bg.style.transform = `translate3d(${(-10 * x).toFixed(2)}px, ${(-8 * y).toFixed(2)}px, 0)`;
      if (fg) fg.style.transform = `translate3d(${(6 * x).toFixed(2)}px, ${(4 * y).toFixed(2)}px, 0)`;
    };
    const onPointerLeave = () => {
      const bg = bgMouseRef.current;
      const fg = fgMouseRef.current;
      if (bg) bg.style.transform = "translate3d(0,0,0)";
      if (fg) fg.style.transform = "translate3d(0,0,0)";
    };
    sectionEl.addEventListener("pointermove", onPointerMove);
    sectionEl.addEventListener("pointerleave", onPointerLeave);
    return () => {
      sectionEl.removeEventListener("pointermove", onPointerMove);
      sectionEl.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div ref={bgMouseRef} className="absolute inset-0 will-change-transform">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content */}
  <div ref={fgMouseRef} className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto will-change-transform">
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
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Gourmet burgers made with premium ingredients, served fresh to your taste buds
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Magnetic>
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToMenu}
              className="min-w-[200px]"
            >
              View Menu
            </Button>
          </Magnetic>
          <Magnetic>
            <Button 
              variant="menu" 
              size="xl"
              onClick={openOnlineOrdering}
              className="min-w-[200px]"
            >
              Order Online
            </Button>
          </Magnetic>
        </div>

        <div className="mt-12 animate-bounce">
          <div className="w-1 h-16 bg-white/50 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;