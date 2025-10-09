import type { ReactNode } from "react";

// Format prices with EGP while avoiding double prefixing
// Utilities
const formatPrice = (p: number | string) => `EGP ${p}`;

type Item = { name: string; price: number; description?: string };

// Data from PDF screenshots
const beefBurgers: Item[] = [
  { name: "CLASSIC BURGER", price: 180, description: "Two Smashed beef burger patties, served on Toasted Potato Bun topped with American Cheese, Pickles, Onions, Ketchup, Mustard." },
  { name: "X - BURGER", price: 190, description: "Two Onions Mustard Smashed beef burger patties, served on Toasted Potato Bun topped with Cheese Sauce, American Cheese, Pickles, X Sauce." },
  { name: "X - BREAKER", price: 190, description: "Two Onions Mustard Smashed beef burger patties, served on Toasted Potato Bun, Eggs, American Cheese, Pickles, X Sauce." },
  { name: "DUTCH BURGER", price: 190, description: "Two Smashed beef burger patties, served on Toasted Potato Bun topped with Dutch Cheese, Grilled Mushroom, Mayo." },
];

const chickenSandwiches: Item[] = [
  { name: "FRIED CHICKEN SANDWHICH", price: 175, description: "Golden Crispy Chicken, Cheese, Mayo, Lettuce." },
  { name: "BUFFALO CHICKEN SANDWHICH", price: 175, description: "Fried Chicken Tossed with Buffalo Sauce, Hot Mayo, Ranch Sauce, Lettuce." },
];

const hotDogs: Item[] = [
  { name: "CLASSIC HOTDOG", price: 110, description: "Grilled Hot Dog, Mustard, Ketchup, Relish." },
  { name: "X - DOG", price: 140, description: "Grilled Hot Dog, X Sauce, Grilled Onions, Cheese Sauce, Pickles, Jalapenos." },
];

const xtraStuffLeft: Item[] = [
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

const fries: Item[] = [
  { name: "FRENCH FRIES", price: 40, description: "Classic Crispy Fries." },
  { name: "CHEESY FRIES", price: 60, description: "Seasoned Fries Coated with Cheese Sauce." },
  { name: "FRIED SWEET POTATO FRIES", price: 65, description: "Fried Sweet Potato Fries" },
  { name: "X- FRIES", price: 125, description: "Golden Fries Loaded with Smashed beef burger patty, Grilled Onions, Cheese Sauce, Chopped Pickles, Jalapenos, X Sauce, Hot Mayo, Ranch Sauce." },
];

const dipping: Item[] = [
  { name: "Hot mayo", price: 20 },
  { name: "Ranch sauce", price: 20 },
  { name: "X - sauce", price: 20 },
  { name: "Buffalo sauce", price: 20 },
];

const drinks: Item[] = [
  { name: "CLASSIC MOJITO", price: 100 },
  { name: "PASSION FRUIT MOJITO", price: 115 },
  { name: "STRAWBERRY MOJITO", price: 115 },
  { name: "BLUE MOJITO", price: 115 },
  { name: "SOFT DRINK", price: 25 },
  { name: "WATER", price: 15 },
];

const milkshakes: Item[] = [
  { name: "PISTACHIO MILKSHAKE", price: 120 },
  { name: "LOTUS MILKSHAKE", price: 120 },
];

const softIceCream: Item[] = [
  { name: "VANILLA ICE-CREAM", price: 80 },
  { name: "SEASONAL ICE-CREAM", price: 80 },
  { name: "ICE FRIED POTATO FRIES", price: 125, description: "Fried Sweet Potato Fries Topped with Cinnamon Sugar, Soft Ice Cream, Caramel Sauce." },
];

// Right page extras
const xtraStuffExtras: { title: string; price: number; description?: string; flavors?: string[] }[] = [
  { title: "HARD SHELL COATING", price: 15, description: "Milk Chocolate or White Chocolate" },
  { title: "ADD SAUCE", price: 15, flavors: ["Chocolate", "Pistachio", "Caramel", "Cherry", "Strawberry"] },
];

// Presentational components
const Section = ({ title, note, children }: { title: string; note?: string; children: ReactNode }) => (
  <section className="mb-8">
    <h3 className="text-2xl font-heading text-primary uppercase mb-1">{title}</h3>
    {note && <p className="text-sm text-foreground/70 italic mb-3">{note}</p>}
    {children}
  </section>
);

const MenuRow = ({ item }: { item: Item }) => (
  <div className="mb-3">
    <div className="flex items-baseline justify-between gap-4">
      <span className="font-heading uppercase text-lg text-foreground">{item.name}</span>
      <span className="font-heading text-primary text-lg">{formatPrice(item.price)}</span>
    </div>
    {item.description && (
      <p className="text-sm text-foreground/70 italic leading-snug mt-1">{item.description}</p>
    )}
  </div>
);

const DoubleBorder = ({ children }: { children: ReactNode }) => (
  <div className="rounded-2xl border-4 border-primary p-2">
    <div className="rounded-xl border-2 border-primary p-5 sm:p-8 bg-white">
      {children}
    </div>
  </div>
);

const VATNote = () => (
  <p className="text-center text-xs text-foreground/70 mt-4">All prices are inclusive of 14% VAT</p>
);

const Menu = () => {
  return (
    <section id="menu" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Page 1 */}
        <DoubleBorder>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left column */}
            <div>
              <Section title="BEEF BURGERS" note="All Sandwhiches are served with French Fries">
                {beefBurgers.map((i) => (
                  <MenuRow key={i.name} item={i} />
                ))}
              </Section>

              <Section title="CHICKEN SANDWHICHES" note="All Sandwhiches are served with French Fries">
                {chickenSandwiches.map((i) => (
                  <MenuRow key={i.name} item={i} />
                ))}
              </Section>

              <Section title="HOT DOGS">
                {hotDogs.map((i) => (
                  <MenuRow key={i.name} item={i} />
                ))}
              </Section>
            </div>

            {/* Right column */}
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/XsquareLogo.png" alt="Xsquare Logo" className="w-64 sm:w-72 mb-8" />
              <Section title="X-TRA STUFF">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                  {xtraStuffLeft.map((i) => (
                    <div key={i.name} className="flex items-baseline justify-between gap-4 py-1">
                      <span className="font-heading uppercase text-lg text-foreground">{i.name}</span>
                      <span className="font-heading text-primary text-lg">{formatPrice(i.price)}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          </div>
          <VATNote />
        </DoubleBorder>

        {/* Page 2 */}
        <div className="mt-10">
          <DoubleBorder>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left */}
              <div>
                <Section title="FRIES">
                  {fries.map((i) => (
                    <MenuRow key={i.name} item={i} />
                  ))}
                </Section>

                <Section title="ADD A DIPPING SAUCE">
                  <div className="grid grid-cols-2 gap-x-8 max-w-md">
                    {dipping.map((i) => (
                      <div key={i.name} className="flex items-baseline justify-between gap-4 py-1">
                        <span className="text-base text-foreground/80">{i.name}</span>
                        <span className="font-heading text-primary">{formatPrice(i.price)}</span>
                      </div>
                    ))}
                  </div>
                </Section>

                <Section title="DRINKS">
                  {drinks.map((i) => (
                    <div key={i.name} className="flex items-baseline justify-between gap-4 py-1">
                      <span className="font-heading uppercase text-lg text-foreground">{i.name}</span>
                      <span className="font-heading text-primary text-lg">{formatPrice(i.price)}</span>
                    </div>
                  ))}
                </Section>
              </div>

              {/* Right */}
              <div>
                <Section title="MILKSHAKES">
                  {milkshakes.map((i) => (
                    <div key={i.name} className="flex items-baseline justify-between gap-4 py-1">
                      <span className="font-heading uppercase text-lg text-foreground">{i.name}</span>
                      <span className="font-heading text-primary text-lg">{formatPrice(i.price)}</span>
                    </div>
                  ))}
                </Section>

                <Section title="SOFT ICE-CREAM">
                  {softIceCream.map((i) => (
                    <MenuRow key={i.name} item={i} />
                  ))}
                </Section>

                <Section title="X-TRA STUFF">
                  <div className="space-y-4">
                    {xtraStuffExtras.map((x) => (
                      <div key={x.title}>
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="font-heading uppercase text-lg text-foreground">{x.title}</span>
                          <span className="font-heading text-primary text-lg">{formatPrice(x.price)}</span>
                        </div>
                        {x.description && (
                          <p className="text-sm text-foreground/70 italic leading-snug">{x.description}</p>
                        )}
                        {x.flavors && (
                          <div className="text-sm text-foreground/80 mt-1 grid grid-cols-2 gap-x-8 max-w-xs">
                            {x.flavors.map((f) => (
                              <span key={f}>{f}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Section>
              </div>
            </div>
            <VATNote />
          </DoubleBorder>
        </div>
      </div>
    </section>
  );
};

export default M enu;
