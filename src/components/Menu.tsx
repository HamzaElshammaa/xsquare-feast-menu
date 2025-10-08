import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import dutchBurger from "@/assets/dutch-burger.png";
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

// Format prices with EGP while avoiding double prefixing
const formatPrice = (price: string) => {
  if (!price) return "";
  const trimmed = String(price).trim();
  if (/^free$/i.test(trimmed)) return "Free";
  if (/^EGP\s*/i.test(trimmed)) return trimmed.replace(/^EGP/i, "EGP");
  if (/^\d+(?:[.,]\d+)?$/.test(trimmed)) return `EGP ${trimmed.replace(/,/g, "")}`;
  return trimmed;
};

const menuCategories = [
  {
    id: "beef-burgers",
    name: "Beef Burgers",
    items: [
      {
        id: 1,
        name: "Classic Burger",
        description: "Two Smashed beef burger patties, served on Toasted Potato Bun topped with American Cheese, Pickles, Onions, Ketchup, Mustard.",
        price: "180",
        image: classicBurger
      },
      {
        id: 2,
        name: "X-Burger",
        description: "Two Onions Mustard Smashed beef burger patties, served on Toasted Potato Bun topped with Cheese Sauce, American Cheese, Pickles, X Sauce.",
        price: "190",
        image: XBurger
      },
      {
        id: 3,
        name: "X-Breaker",
        description: "Two Onions Mustard Smashed beef burger patties, served on Toasted Potato Bun, Eggs, American Cheese, Pickles, X Sauce.",
        price: "190",
        image: XBreaker
      },
      {
        id: 4,
        name: "Dutch Burger",
        description: "Two Smashed beef burger patties, served on Toasted Potato Bun topped with Dutch Cheese, Grilled Mushroom, Mayo.",
        price: "190",
        image: dutchBurger
      }
  ]
  },
  {
    id: "chicken-sandwiches",
    name: "Chicken Sandwiches",
    items: [
      {
        id: 5,
        name: "Fried Chicken Sandwich",
        description: "Golden Crispy Chicken, Cheese, Mayo, Lettuce.",
        price: "175",
        image: chickenBurger
      },
      {
        id: 6,
        name: "Buffalo Chicken Sandwich",
        description: "Fried Chicken Tossed with Buffalo Sauce, Hot Mayo, Ranch Sauce, Lettuce.",
        price: "140",
        image: buffaloChicken
      },
      // ...you can add more chicken items if present in the PDF
    ]
  },
  {
    id: "hot-dogs",
    name: "Hot Dogs",
    items: [
      {
        id: 8,
        name: "Classic Hotdog",
        description: "Grilled Hot Dog, Mustard, Ketchup, Relish.",
        price: "110",
        image: classicHotDog
      },
      {
        id: 9,
        name: "X-Dog",
        description: "Grilled Hot Dog, X Sauce, Grilled Onions, Cheese Sauce, Pickles, Jalapenos.",
        price: "175",
        image:XDog
      }
    ]
  },
  {
    id: "fries",
    name: "Fries",
    hasAddons: true,
    addonTitle: "Add a Dipping Sauce",
    items: [
      {
        id: 11,
        name: "French Fries",
        description: "Classic Crispy Fries.",
        price: "20",
        image: Fries
      },
/*       {
        id: 12,
        name: "Fried Sweet Potato Fries",
        description: "Fried Sweet Potato Fries",
        price: "40"
      }, */
      {
        id: 13,
        name: "Cheesy Fries",
        description: "Seasoned Fries Coated with Cheese Sauce.",
        price: "65",
        image: CheesyFries
      },
      {
        id: 24,
        name: "X-Fries",
        description: "Golden Fries Loaded with Smashed beef burger patty, Grilled Onions, Cheese Sauce, Chopped Pickles, Jalapenos, X Sauce, Hot Mayo, Ranch Sauce.",
        price: "60",
        image: XFries
      }
    ],
    addons: [
      { name: "Hot Mayo", price: "15" },
      { name: "Ranch Sauce", price: "15" },
      { name: "X-Sauce", price: "15" },
      { name: "Buffalo Sauce", price: "15" }
    ]
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    items: [
      {
        id: 15,
        name: "Pistachio Milkshake",
        description: "Rich pistachio milkshake.",
        price: "120",
        image: pistachioMilkshake
      },
      {
        id: 16,
        name: "Lotus Milkshake",
        description: "Lotus-flavored milkshake.",
        price: "115",
        image: lotusMilkshake
      }
    ]
  },
  {
    id: "soft-ice-cream",
    name: "Soft Ice-cream",
    items: [
      {
        id: 17,
        name: "Vanilla Ice-cream",
        description: "Classic vanilla soft serve.",
        price: "80",
        image: vanillaIceCream
      },
/*       {
        id: 18,
        name: "Seasonal Ice-cream",
        description: "Seasonal flavor soft serve.",
        price: "80",
        image: seasonalIceCream
      },
      {
        id: 19,
        name: "Ice Fried Potato Fries",
        description: "Fried Sweet Potato Fries Topped with Cinnamon Sugar, Soft Ice Cream, Caramel Sauce.",
        price: "125",
        image: iceFriedPotatoFries
      } */
  ]
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: 20,
        name: "Soft Drink",
        description: "Cola, Orange, Lemon-Lime, etc.",
        price: "15",
        image: SoftDrink
      },
      {
        id: 21,
        name: "Water",
        description: "Bottled water.",
        image: Water,
        price: "15"
      },
      {
        id: 22,
        name: "Classic Mojito",
        description: "Refreshing lime and mint mojito.",
        price: "100",
        image: ClassicMojito
      },
      {
        id: 23,
        name: "Passion Fruit Mojito",
        description: "Passion fruit flavored mojito.",
        price: "120",
        image: PassionFruitMojito
      },
      {
        id: 25,
        name: "Strawberry Mojito",
        description: "Strawberry flavored mojito.",
        image: StrawberryMojito,
        price: "115"
      },
      {
        id: 26,
        name: "Blue Mojito",
        description: "Blue mojito.",
        price: "115",
        image: BlueMojito
      }
    ]
  }
];

const Menu = () => {
  const openOnlineOrdering = () => {
    window.open("https://foodics.online", "_blank");
  };

  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh food made with premium ingredients and served from our truck
          </p>
        </div>

        <Tabs defaultValue="beef-burgers" className="w-full">
          <div className="w-full overflow-x-auto mb-8">
            <TabsList className="inline-flex w-max min-w-full h-auto p-1 gap-1">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex-shrink-0 px-3 py-2 text-xs sm:text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {category.items.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-brand transition-all duration-300 hover:-translate-y-1 border border-border/60">
                    {item.image && (
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    <CardContent className="p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground line-clamp-2">{item.name}</h3>
                      <span className="mt-1 text-sm sm:text-base font-medium text-primary/90">{formatPrice(item.price)}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {category.hasAddons && category.addons && (
                <Card className="mt-6">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                      {category.addonTitle}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {category.addons.map((addon, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                          <span className="text-sm font-medium text-foreground">{addon.name}</span>
                          <Badge variant="secondary" className="text-primary">
                            {formatPrice(addon.price)}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground">
              Place your order online for quick pickup or delivery
            </p>
          </div>
          <Button 
            variant="cta" 
            size="xl"
            onClick={openOnlineOrdering}
            className="min-w-[250px]"
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;