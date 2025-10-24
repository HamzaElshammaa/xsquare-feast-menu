import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
/* import premiumBeefImg from "@/assets/premiumBeef.png"; */
import premiumBeefImg from "@/assets/SmashBurger5.jpg";
/* import artisanBunsImg from "@/assets/artisanBuns.png"; */
import artisanBunsImg from "@/assets/PotatoBun1.jpg";
import xSauceImg from "@/assets/XSauce.png";
import freshProduceImg from "@/assets/freshProduce.png";
import meltedCheeseImg from "@/assets/meltedCheese.png";
// TODO: Replace these placeholders with your actual high-quality ingredient photos
const ingredients = [
  {
    name: "Premium Beef",
    description: "Locally sourced, 100% pure beef, smashed to perfection for a crispy crust and juicy center.",
    image: premiumBeefImg,
  },
  {
    name: "Artisan Buns",
    description: "Freshly baked potato buns, toasted with butter for the perfect combination of soft and crisp.",
    image: artisanBunsImg,
  },
  {
    name: "Signature X-Sauce",
    description: "Our secret blend of spices and creamy goodness that gives every X-Burger its unique, addictive flavor.",
    image: xSauceImg,
  },
  {
    name: "Fresh Produce",
    description: "Crisp lettuce, ripe tomatoes, and sharp onions delivered daily to ensure the freshest taste.",
    image: freshProduceImg,
  },
   {
    name: "Melted Cheeses",
    description: "From classic American to rich Dutch cheese, perfectly melted to create an irresistible pull.",
    image: meltedCheeseImg,
  },
];

const OurIngredients = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // This maps the vertical scroll progress to a horizontal scroll (translateX)
  // We use different transform ranges for mobile and desktop for a better experience.
  const x = useTransform(scrollYProgress, 
    [0.1, 0.95], 
    isMobile ? ["5%", "-200%"] : ["50%", "-105%"]
  );

  return (
    <section ref={targetRef} className="relative h-[350vh] md:h-[400vh] bg-background">
      {/* Changed items-center to items-end to prevent overlap on mobile */}
      <div className="sticky top-0 flex h-screen items-end overflow-hidden">
        {/* Removed 'container mx-auto' and used flexbox to properly center the title */}
        <div className="absolute w-full top-16 md:top-24 left-0 right-0 px-4 z-20 pointer-events-none">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: targetRef, once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
             >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-4">
                The X-Factor
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl text-center">
                Quality you can see and taste. Here's what makes our burgers special.
              </p>
            </motion.div>
        </div>
       
        {/* The horizontally scrolling container, added padding-bottom */}
        <motion.div style={{ x }} className="flex gap-4 md:gap-8 pl-[5vw] md:pl-[10vw] pb-16 md:pb-24">
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
    <div className="group relative h-[60vh] w-[75vw] md:w-[45vh] overflow-hidden rounded-lg shadow-xl flex-shrink-0">
      <div
        className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative z-20 flex h-full flex-col justify-end p-4 md:p-6 text-white">
        <h3 className="text-2xl md:text-3xl font-bold font-heading">{item.name}</h3>
        <p className="mt-2 text-sm md:text-base text-white/90 max-w-xs">{item.description}</p>
      </div>
    </div>
  );
};

export default OurIngredients;
