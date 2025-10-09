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

const xtraStuff = [
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
      <div className="max-w-5xl mx-auto">
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
                    {xtraStuff.map((item) => (
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
      </div>
    </section>
  );
};

export default Menu;
