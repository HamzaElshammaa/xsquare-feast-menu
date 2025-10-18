import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// TODO: Replace these placeholders with your actual high-quality ingredient photos
const ingredients = [
  {
    name: "Premium Beef",
    description: "Locally sourced, 100% pure beef, smashed to perfection for a crispy crust and juicy center.",
    image: "/src/assets/premiumBeef.png",
  },
  {
    name: "Artisan Buns",
    description: "Freshly baked potato buns, toasted with butter for the perfect combination of soft and crisp.",
    image: "/src/assets/artisanBuns.png",
  },
  {
    name: "Signature X-Sauce",
    description: "Our secret blend of spices and creamy goodness that gives every X-Burger its unique, addictive flavor.",
    image: "/src/assets/XSauce.png",
  },
  {
    name: "Fresh Produce",
    description: "Crisp lettuce, ripe tomatoes, and sharp onions delivered daily to ensure the freshest taste.",
    image: "/src/assets/freshProduce.png",
  },
   {
    name: "Melted Cheeses",
    description: "From classic American to rich Dutch cheese, perfectly melted to create an irresistible pull.",
    image: "/src/assets/meltedCheese.png",
  },
];

const OurIngredients = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // This maps the vertical scroll progress to a horizontal scroll (translateX)
  // Tuned for 5 cards to scroll smoothly from the first to the last.
  const x = useTransform(scrollYProgress, [0.1, 0.95], ["75%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute w-full top-16 md:top-24 container mx-auto px-4 z-20 pointer-events-none">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: targetRef, once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
             >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-4">
                The X-Factor
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
                Quality you can see and taste. Here's what makes our burgers special.
              </p>
            </motion.div>
        </div>
       
        {/* The horizontally scrolling container */}
        <motion.div style={{ x }} className="flex gap-8 pl-[10vw]">
          {ingredients.map((item, index) => (
            <IngredientCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const IngredientCard = ({ item }: { item: typeof ingredients[0] }) => {
  return (
    <div className="group relative h-[60vh] w-[45vh] overflow-hidden rounded-lg shadow-xl flex-shrink-0">
      <div
        className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative z-20 flex h-full flex-col justify-end p-6 text-white">
        <h3 className="text-3xl font-bold font-heading">{item.name}</h3>
        <p className="mt-2 text-base text-white/90 max-w-xs">{item.description}</p>
      </div>
    </div>
  );
};

export default OurIngredients;

