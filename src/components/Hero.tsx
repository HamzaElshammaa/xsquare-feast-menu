import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-burger.jpg";
// Import the static PDF so Vite bundles it
import menuPdfUrl from "@/assets/Menu.pdf";

const Hero = () => {
  const navigate = useNavigate();

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

  // Navigate to the menu page
  const goToMenuPage = () => {
    navigate("/menu");
  };

  // Parallax: setup refs and animation loop
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    // Respect reduced motion
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let sectionTop = 0;
    const measure = () => {
      const rect = sectionEl.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;
    };
    measure();

    const targets = Array.from(sectionEl.querySelectorAll<HTMLElement>("[data-parallax-speed]"));
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY - sectionTop;
      for (const el of targets) {
        const sp = parseFloat(el.dataset.parallaxSpeed || "0");
        const translateY = y * sp;
        el.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const onResize = () => {
      measure();
      update();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // initial paint
    update();

    return () => {
      window.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", onResize as EventListener);
      // Clean transforms to avoid lingering styles when hot reloading
      for (const el of targets) {
        el.style.transform = "";
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (slow) */}
      <div
        data-parallax-speed="0.15"
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          {/* Logo (medium-fast) */}
          <div className="mb-6 flex justify-center">
            <div data-parallax-speed="0.35" className="will-change-transform">
              <img
                src="/lovable-uploads/XsquareLogo.png"
                alt="X-Square Burgers Logo"
                className="h-44 md:h-48 w-auto filter drop-shadow-2xl translate-y-[25px] md:translate-y-0 scale-[0.6] md:scale-100"
              />
            </div>
          </div>

          {/* Headline (medium) */}
          <div data-parallax-speed="0.25" className="will-change-transform">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="block md:inline">Welcome to</span>{" "}
              <span className="whitespace-nowrap block md:inline">X-Square</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Gourmet burgers made with premium ingredients, served fresh to your taste buds
            </p>
          </div>
        </div>

        {/* CTAs (slower) */}
        <div data-parallax-speed="0.18" className="flex flex-col sm:flex-row gap-4 justify-center items-center will-change-transform">
          <Button
            variant="hero"
            size="xl"
            onClick={goToMenuPage}
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

        {/* Scroll indicator (fast) */}
        <div className="mt-12">
          <div data-parallax-speed="0.5" className="will-change-transform">
            <div className="w-1 h-16 bg-white/20 mx-auto rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;