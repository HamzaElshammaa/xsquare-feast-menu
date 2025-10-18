import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import IGDutch from "@/assets/IGDutch.png";
import IGFries from "@/assets/IGFries.png";
import IGXFries from "@/assets/IGXFries.jpeg";
import IGStrawberryMojito from "@/assets/IGStrawberryMojito.png";
import IGHotDog from "@/assets/IGHotDog.png";
import IGLemonMint from "@/assets/IGLemonMint.png";

// TODO: Replace these placeholders with real data from your Instagram
const posts = [
  {
    image: IGDutch,
    user: "@burgerlover",
    caption: "The Dutch Burger is insane! 🔥",
    link: "https://www.instagram.com/",
  },
  {
    image: IGFries,
    user: "@cairofoodie",
    caption: "Best Fries  in New Cairo.",
    link: "https://www.instagram.com/",
  },
  {
    image: IGXFries,
    user: "@sarahs.eats",
    caption: "Literally obsessed with the X-Fries.",
    link: "https://www.instagram.com/",
  },
  {
    image: IGStrawberryMojito,
    user: "@ahmedexplores",
    caption: "Cooling down with a Strawberry Mojito.",
    link: "https://www.instagram.com/",
  },
  {
    image: IGHotDog,
    user: "@thefoodiesquad",
    caption: "Lunch sorted with X-Square!",
    link: "https://www.instagram.com/",
  },
  {
    image: IGLemonMint,
    user: "@dessertdiary",
    caption: "The Lemon mint mojito is a must-try!",
    link: "https://www.instagram.com/",
  },
];

const FromTheGram = () => {
  // We duplicate the posts array to create the seamless scrolling effect
  const duplicatedPosts = [...posts, ...posts];

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            From the 'Gram
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the X-Square community! Tag us{" "}
            <a 
              href="https://www.instagram.com/xsquare_burger/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              @xsquare_burger
            </a>
            {" "}on Instagram to be featured.
          </p>
        </div>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <motion.ul 
          className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 200, ease: "linear", repeat: Infinity }}
        >
          {duplicatedPosts.map((post, index) => (
            <li key={index} className="flex-shrink-0">
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative block w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={post.image}
                  alt={`Instagram post by ${post.user}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-5 h-5" />
                    <p className="font-semibold">{post.user}</p>
                  </div>
                  <p className="text-sm mt-1">{post.caption}</p>
                </div>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default FromTheGram;
