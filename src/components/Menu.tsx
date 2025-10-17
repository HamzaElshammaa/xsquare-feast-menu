import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import MenuItemModal from "@/components/MenuItemModal";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import classicHotDog from "@/assets/classic-hotdog.png";
import XDog from "@/assets/x-dog.png";
import XBurger from "@/assets/XBurger.png";
import buffaloChicken from "@/assets/buffalochicken.png";
import lotusMilkshake from "@/assets/LotusMilkshake.png";
import pistachioMilkshake from "@/assets/PistachioMilkshake.png";
import vanillaIceCream from "@/assets/vanillaicecream.png";
import seasonalIceCream from "@/assets/seasonalicecream.png";
import iceFriedPotatoFries from "@/assets/icefriedpotatofries.png";
import XBreaker from "@/assets/XBreaker.png";
import ClassicMojito from "@/assets/classicmojito.jpeg";
import PassionFruitMojito from "@/assets/PassionFruitMojito.jpeg";
import StrawberryMojito from "@/assets/strawberrymojito.jpeg";
import BlueMojito from "@/assets/BlueMojito.jpeg";
import CheesyFries from "@/assets/cheesyfries.jpeg";
import XFries from "@/assets/x-fries.jpeg";
import Fries from "@/assets/fries.jpg";
import SoftDrink from "@/assets/softdrink.png";
import Water from "@/assets/water.png";

const beefBurgers = [
  { name: "CLASSIC BURGER", price: 180, description: "Two Smashed beef burger patties, served on Toasted Potato Bun topped with American Cheese, Pickles, Onions, Ketchup, Mustard.", image: classicBurger },
  { name: "X - BURGER", price: 190, description: "Two Onions Mustard Smashed beef burger patties, served on Toasted Potato Bun topped with Cheese Sauce, American Cheese, Pickles, X Sauce.", image: XBurger },
  { name: "X - BREAKER", price: 190, description: "Two Onions Mustard Smashed beef burger patties, served on Toasted Potato Bun, Eggs, American Cheese, Pickles, X Sauce.", image: XBreaker },
  { name: "DUTCH BURGER", price: 190, description: "Two Smashed beef burger patties, served on Toasted Potato Bun topped with Dutch Cheese, Grilled Mushroom, Mayo.", image: "/lovable-uploads/dutch-burger.jpg" },
];

const chickenSandwiches = [
  { name: "FRIED CHICKEN SANDWICH", price: 175, description: "Golden Crispy Chicken, Cheese, Mayo, Lettuce.", image: chickenBurger },
  { name: "BUFFALO CHICKEN SANDWICH", price: 175, description: "Fried Chicken Tossed with Buffalo Sauce, Hot Mayo, Ranch Sauce, Lettuce.", image: buffaloChicken },
];

const hotDogs = [
  { name: "CLASSIC HOTDOG", price: 110, description: "Grilled Hot Dog, Mustard, Ketchup, Relish.", image: classicHotDog },
  { name: "X-DOG", price: 140, description: "Grilled Hot Dog, X Sauce, Grilled Onions, Cheese Sauce, Pickles, Jalapenos.", image: XDog },
];

const xtraStuff1 = [
  { name: "X-TRA PATTY", price: 55 },
  { name: "CRISPY CHICKEN", price: 70 },
  { name: "BEEF BACON", price: 40 },
  { name: "GRILLED ONIONS", price: 15 },
  { name: "GRILLED MUSHROOMS", price: 35 },
  { name: "AMERICAN CHEESE", price: 20 },
  { name: "DUTCH CHEESE", price: 20 },
  { name: "CHEESE SAUCE", price: 45 },
  { name: "JALAPENOS", price: 15 },
  { name: "EGGS", price: 25 },
  { name: "PICKLES", price: 15 },
  { name: "RELISH", price: 15 },
];

const friesItems = [
  { name: "FRENCH FRIES", price: 40, description: "Classic Crispy Fries", image: Fries },
  { name: "CHEESY FRIES", price: 60, description: "Seasoned Fries Coated with Cheese Sauce.", image: CheesyFries },
  { name: "FRIED SWEET POTATO FRIES", price: 65, description: "Fries Sweet Potato Fries" },
  { name: "X-FRIES", price: 125, description: "Golden fries Loaded with Smashed beef burger patty, Grilled Onions, Cheese Sauce, Chopped Pickles, Jalapenos, X Sauce, Hot Mayo, Ranch Sauce.", image: XFries },
]


const milkShakes = [
  { name: "PISTACHIO MILKSHAKE", price: 120, image: pistachioMilkshake },
  { name: "LOTUS MILKSHAKE", price: 120, image: lotusMilkshake },
]

const softIceCream = [
  { name: "VANILLA ICE-CREAM", price: 80, image: vanillaIceCream },
  { name: "SEASONAL ICE-CREAM", price: 80, image: seasonalIceCream },
  { name: "ICE FRIED POTATO FRIES", price: 125, description: "Fried Sweet Potato Fries Topped with Cinnamon Sugar, Soft Ice Cream, Caramel Sauce.", image: iceFriedPotatoFries },
]


const drinks = [
  { name: "CLASSIC MOJITO", price: 100, image: ClassicMojito },
  { name: "PASSION FRUIT MOJITO", price: 115, image: PassionFruitMojito },
  { name: "STRAWBERRY MOJITO", price: 115, image: StrawberryMojito },
  { name: "BLUE MOJITO", price: 115, image: BlueMojito },
  { name: "SOFT DRINK", price: 25, image: SoftDrink },
  { name: "WATER", price: 15, image: Water },
]

const xtraStuff2 = [
  { name: "HARD SHELL COATING", price: 15, description: "Milk Chocolate or White Chocolate" },
];

const addSauceFlavors = ["Chocolate", "Pistachio", "Caramel", "Cherry", "Strawberry"];

const DippingSauce = [
  { name: "Hot mayo", price: 20 },
  { name: "X - sauce", price: 20 },
  { name: "Ranch sauce", price: 20 },
  { name: "Buffalo sauce", price: 20 },
]

type MenuItemType = {
  name: string;
  price: number;
  description?: string;
  image?: string;
};

const MenuItem = ({ name, price, description, onClick }: MenuItemType & { onClick?: () => void }) => (
  <div className={`mb-4 ${onClick ? 'cursor-pointer hover:bg-primary/5 transition-colors p-2 -m-2 rounded' : ''}`} onClick={onClick}>
    <div className="flex justify-between items-start gap-3">
      <span className="font-sans text-primary uppercase text-base sm:text-lg leading-tight font-bold">{name}</span>
      <span className="font-sans text-primary text-base sm:text-lg whitespace-nowrap font-bold">{price}</span>
    </div>
    {description && (
      <p className="font-sans text-xs sm:text-sm text-primary italic mt-0.5 leading-snug">{description}</p>
    )}
  </div>
);

const XtraItem = ({ name, price }: { name: string; price: number }) => (
  <div className="flex justify-between items-center gap-2 mb-1.5">
    <span className="font-sans text-primary uppercase text-sm sm:text-base">{name}</span>
    <span className="font-sans text-primary text-sm sm:text-base">{price}</span>
  </div>
);

const SectionTitle = ({ children, note }: { children: ReactNode; note?: string }) => (
  <div className="mb-3">
    <h3 className="font-heading text-primary uppercase text-2xl sm:text-3xl lg:text-4xl tracking-wide">{children}</h3>
    {note && <p className="font-sans text-xs text-primary italic mt-0.5">{note}</p>}
  </div>
);

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleItemClick = (item: MenuItemType) => {
    if (item.image) {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Reveal-on-scroll using IntersectionObserver
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce) {
      // If user prefers reduced motion, show everything immediately
      for (const el of targets) {
        el.classList.remove("opacity-0", "translate-y-6");
        el.classList.add("opacity-100", "translate-y-0");
      }
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-6");
            io.unobserve(el);
          }
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    for (const el of targets) io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="menu" className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* PAGE 1 - Burgers, Sandwiches, Hot Dogs */}
        <div
          data-reveal
          className="rounded-3xl border-[6px] border-primary p-3 sm:p-4 bg-white opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
        >
          <div className="rounded-2xl border-[3px] border-primary p-6 sm:p-10 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12">
              <div className="space-y-6">
                <div
                  data-reveal
                  style={{ transitionDelay: "0ms" }}
                  className="opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <SectionTitle note="All Sandwhiches are served with French Fries">
                    BEEF BURGERS
                  </SectionTitle>
                  {beefBurgers.map((item) => (
                    <MenuItem key={item.name} {...item} onClick={() => handleItemClick(item)} />
                  ))}
                </div>
                <div
                  data-reveal
                  style={{ transitionDelay: "120ms" }}
                  className="opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <SectionTitle note="All Sandwhiches are served with French Fries">
                    CHICKEN SANDWHICHES
                  </SectionTitle>
                  {chickenSandwiches.map((item) => (
                    <MenuItem key={item.name} {...item} onClick={() => handleItemClick(item)} />
                  ))}
                </div>
                <div
                  data-reveal
                  style={{ transitionDelay: "240ms" }}
                  className="opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <SectionTitle>HOT DOGS</SectionTitle>
                  {hotDogs.map((item) => (
                    <MenuItem key={item.name} {...item} onClick={() => handleItemClick(item)} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-6 lg:min-w-[280px]">
                <div
                  data-reveal
                  style={{ transitionDelay: "180ms" }}
                  className="w-full flex justify-center mb-4 opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <img 
                    src="/lovable-uploads/XsquareLogo.png" 
                    alt="X Square Logo" 
                    className="w-48 sm:w-56 lg:w-64 h-auto"
                  />
                </div>
                <div
                  data-reveal
                  style={{ transitionDelay: "300ms" }}
                  className="w-full opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <SectionTitle>X-TRA STUFF</SectionTitle>
                  <div className="space-y-1">
                    {xtraStuff1.map((item) => (
                      <XtraItem key={item.name} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="font-sans text-xs sm:text-sm text-primary">All prices are inclusive of 14% VAT</p>
            </div>
          </div>
        </div>

        {/* PAGE 2 - Fries, Drinks, Milkshakes, Ice Cream */}
        <div
          data-reveal
          className="rounded-3xl border-[6px] border-primary p-3 sm:p-4 bg-white opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
        >
          <div className="rounded-2xl border-[3px] border-primary p-6 sm:p-10 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left Column */}
              <div className="space-y-6">
                <div
                  data-reveal
                  style={{ transitionDelay: "0ms" }}
                  className="opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <SectionTitle>FRIES</SectionTitle>
                  {friesItems.map((item) => (
                    <MenuItem key={item.name} {...item} onClick={() => handleItemClick(item)} />
                  ))}
                </div>

                <div
                  data-reveal
                  style={{ transitionDelay: "120ms" }}
                  className="opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <SectionTitle>ADD A DIPPING SAUCE</SectionTitle>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {DippingSauce.map((item) => (
                      <div key={item.name} className="flex justify-between items-center gap-2">
                        <span className="font-sans text-primary text-sm">{item.name}</span>
                        <span className="font-sans text-primary text-sm font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  data-reveal
                  style={{ transitionDelay: "240ms" }}
                  className="opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <SectionTitle>DRINKS</SectionTitle>
                  {drinks.map((item) => (
                    <div key={item.name} className={`flex justify-between items-center gap-3 mb-2 ${item.image ? 'cursor-pointer hover:bg-primary/5 transition-colors p-2 -m-2 rounded' : ''}`} onClick={() => item.image && handleItemClick(item)}>
                      <span className="font-sans text-primary uppercase text-sm sm:text-base font-bold">{item.name}</span>
                      <span className="font-sans text-primary text-sm sm:text-base font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div
                  data-reveal
                  style={{ transitionDelay: "0ms" }}
                  className="opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <SectionTitle>MILKSHAKES</SectionTitle>
                  {milkShakes.map((item) => (
                    <div key={item.name} className={`flex justify-between items-center gap-3 mb-2 ${item.image ? 'cursor-pointer hover:bg-primary/5 transition-colors p-2 -m-2 rounded' : ''}`} onClick={() => item.image && handleItemClick(item)}>
                      <span className="font-sans text-primary uppercase text-sm sm:text-base font-bold">{item.name}</span>
                      <span className="font-sans text-primary text-sm sm:text-base font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div
                  data-reveal
                  style={{ transitionDelay: "120ms" }}
                  className="opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <SectionTitle>SOFT ICE-CREAM</SectionTitle>
                  {softIceCream.map((item) => (
                    <MenuItem key={item.name} {...item} onClick={() => handleItemClick(item)} />
                  ))}
                </div>

                <div
                  data-reveal
                  style={{ transitionDelay: "240ms" }}
                  className="opacity-0 translate-y-12 transition-all duration-1000 ease-out will-change-transform"
                >
                  <SectionTitle>X-TRA STUFF</SectionTitle>
                  {xtraStuff2.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                  
                  <div className="mt-4">
                    <div className="flex justify-between items-center gap-3 mb-2">
                      <span className="font-sans text-primary uppercase text-sm sm:text-base font-bold">ADD SAUCE</span>
                      <span className="font-sans text-primary text-sm sm:text-base font-bold">15</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
                      {addSauceFlavors.map((flavor) => (
                        <span key={flavor} className="font-sans text-primary text-sm italic">{flavor}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="font-sans text-xs sm:text-sm text-primary">All prices are inclusive of 14% VAT</p>
            </div>
          </div>
        </div>

      </div>

      {/* Menu Item Modal */}
      <MenuItemModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </section>
  );
};

export default Menu;
