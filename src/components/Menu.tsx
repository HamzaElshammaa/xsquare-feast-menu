import type { ReactNode } from "react";

const beefBurgers = [
  { name: "CLASSIC BURGER", price: 180, description: "Two Smashed beef burger patties, served on Toasted Potato Bun topped with American Cheese, Pickles, Onions, Ketchup, Mustard." },
  { name: "X - BURGER", price: 190, description: "Two Onions Mustard Smashed beef burger patties, served on Toasted Potato Bun topped with Cheese Sauce, American Cheese, Pickles, X Sauce." },
  { name: "X - BREAKER", price: 190, description: "Two Onions Mustard Smashed beef burger patties, served on Toasted Potato Bun, Eggs, American Cheese, Pickles, X Sauce." },
  { name: "DUTCH BURGER", price: 190, description: "Two Smashed beef burger patties, served on Toasted Potato Bun topped with Dutch Cheese, Grilled Mushroom, Mayo." },
];

const chickenSandwiches = [
  { name: "FRIED CHICKEN SANDWICH", price: 175, description: "Golden Crispy Chicken, Cheese, Mayo, Lettuce." },
  { name: "BUFFALO CHICKEN SANDWICH", price: 175, description: "Fried Chicken Tossed with Buffalo Sauce, Hot Mayo, Ranch Sauce, Lettuce." },
];

const hotDogs = [
  { name: "CLASSIC HOTDOG", price: 110, description: "Grilled Hot Dog, Mustard, Ketchup, Relish." },
  { name: "X-DOG", price: 140, description: "Grilled Hot Dog, X Sauce, Grilled Onions, Cheese Sauce, Pickles, Jalapenos." },
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

const Fries = [
  { name: "FRENCH FRIES", price: 40, description: "Classic Crispy Fries" },
  { name: "CHEESY FRIES", price: 60, description: "Seasoned Fries Coated with Cheese Sauce." },
  { name: "FRIED SWEET POTATO FRIES", price: 65, description: "Fries Sweet Potato Fries" },
  { name: "X-FRIES", price: 125, description: "Golden fries Loaded with Smashed beef burger patty, Grilled Onions, Cheese Sauce, Chopped Pickles, Jalapenos, X Sauce, Hot Mayo, Ranch Sauce." },
]


const MilkShakes = [
  { name: "PISTACHIO MILKSHAKE", price: 120 },
  { name: "LOTUS MILKSHAKE", price: 120 },
]

const SoftIceCream = [
  { name: "VANILLA ICE-CREAM", price: 80 },
  { name: "SEASONAL ICE-CREAM", price: 80 },
  { name: "ICE FRIED POTATO FRIES", price: 125, description: "Fried Sweet Potato Fries Topped with Cinnamon Sugar, Soft Ice Cream, Caramel Sauce." },
]


const DRINKS = [
  { name: "CLASSIC MOJITO", price: 100 },
  { name: "PASSION FRUIT MOJITO", price: 115 },
  { name: "STRAWBERRY MOJITO", price: 115 },
  { name: "BLUE MOJITO", price: 115 },
  { name: "SOFT DRINK", price: 25 },
  { name: "WATER", price: 15 },
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

const MenuItem = ({ name, price, description }: { name: string; price: number; description?: string }) => (
  <div className="mb-4">
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
  return (
    <section id="menu" className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* PAGE 1 - Burgers, Sandwiches, Hot Dogs */}
        <div className="rounded-3xl border-[6px] border-primary p-3 sm:p-4 bg-white">
          <div className="rounded-2xl border-[3px] border-primary p-6 sm:p-10 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <SectionTitle note="All Sandwhiches are served with French Fries">
                    BEEF BURGERS
                  </SectionTitle>
                  {beefBurgers.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
                <div>
                  <SectionTitle note="All Sandwhiches are served with French Fries">
                    CHICKEN SANDWHICHES
                  </SectionTitle>
                  {chickenSandwiches.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
                <div>
                  <SectionTitle>HOT DOGS</SectionTitle>
                  {hotDogs.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-6 lg:min-w-[280px]">
                <div className="w-full flex justify-center mb-4">
                  <img 
                    src="/lovable-uploads/XsquareLogo.png" 
                    alt="X Square Logo" 
                    className="w-48 sm:w-56 lg:w-64 h-auto"
                  />
                </div>
                <div className="w-full">
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
        <div className="rounded-3xl border-[6px] border-primary p-3 sm:p-4 bg-white">
          <div className="rounded-2xl border-[3px] border-primary p-6 sm:p-10 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <SectionTitle>FRIES</SectionTitle>
                  {Fries.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>

                <div>
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

                <div>
                  <SectionTitle>DRINKS</SectionTitle>
                  {DRINKS.map((item) => (
                    <div key={item.name} className="flex justify-between items-center gap-3 mb-2">
                      <span className="font-sans text-primary uppercase text-sm sm:text-base font-bold">{item.name}</span>
                      <span className="font-sans text-primary text-sm sm:text-base font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <SectionTitle>MILKSHAKES</SectionTitle>
                  {MilkShakes.map((item) => (
                    <div key={item.name} className="flex justify-between items-center gap-3 mb-2">
                      <span className="font-sans text-primary uppercase text-sm sm:text-base font-bold">{item.name}</span>
                      <span className="font-sans text-primary text-sm sm:text-base font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <SectionTitle>SOFT ICE-CREAM</SectionTitle>
                  {SoftIceCream.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>

                <div>
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
    </section>
  );
};

export default Menu;
