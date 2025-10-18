import { Flame, Sandwich, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import loopVideo from "@/assets/XsquareLoop.mp4";

const features = [
  {
    icon: Flame,
    title: "ultra smash burgers on the go",
    text: "Crisp edges, juicy centers—made fast and fresh wherever you find us.",
    delay: 0,
  },
  {
    icon: Sparkles,
    title: "Original by recipe, unmatched by taste",
    text: "A house recipe tuned for balance, texture, and bold flavor.",
    delay: 120,
  },
  {
    icon: Sandwich,
    title: "No trends jsut the classic taste you love",
    text: "We keep it timeless: quality ingredients, dialed-in technique.",
    delay: 240,
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  // Subtle parallax for background video (drama ~6) - reduced range for smoother perf
  const bgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={sectionRef} id="features" className="relative py-20">
      {/* Background video with overlay */}
      <motion.div className="absolute inset-0 -z-10 will-change-transform" style={{ y: bgY }}>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={loopVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">What Makes Us Different</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Quality ingredients, dialed-in technique, and a little obsession.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map(({ icon: Icon, title, text, delay }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: (delay || 0) / 1000 }}
              whileHover={{ y: -2 }}
              className="bg-white border border-primary/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow will-change-transform"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 will-change-transform"
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-foreground capitalize">{title}</h3>
              <p className="text-muted-foreground">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
