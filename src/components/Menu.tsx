import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";

const menuCategories = [
  {
    id: "beef-burgers",
    name: "Beef Burgers",
    hasAddons: true,
    addonTitle: "X-tra Stuff",
    items: [
      {
        id: 1,
        name: "Classic X-Square",
        description: "Beef patty, cheese, lettuce, tomato, pickles, special sauce",
        price: "$12.99",
        image: classicBurger
      },
      {
        id: 2,
        name: "BBQ Bacon Deluxe",
        description: "Beef patty, bacon, BBQ sauce, onion rings, lettuce",
        price: "$15.99",
        image: bbqBurger
      },
      {
        id: 3,
        name: "Double Trouble",
        description: "Double beef patties, double cheese, special sauce",
        price: "$18.99",
        image: classicBurger
      },
      {
        id: 4,
        name: "Spicy Jalapeño",
        description: "Beef patty, jalapeños, pepper jack cheese, spicy mayo",
        price: "$14.99",
        image: bbqBurger
      }
    ],
    addons: [
      { name: "Extra Cheese", price: "$1.50" },
      { name: "Bacon", price: "$2.00" },
      { name: "Avocado", price: "$2.50" },
      { name: "Extra Patty", price: "$4.00" }
    ]
  },
  {
    id: "chicken-sandwiches",
    name: "Chicken Sandwiches",
    items: [
      {
        id: 5,
        name: "Crispy Chicken",
        description: "Fried chicken breast, lettuce, tomato, mayo",
        price: "$13.99",
        image: chickenBurger
      },
      {
        id: 6,
        name: "Spicy Chicken",
        description: "Spicy fried chicken, lettuce, pickles, hot sauce",
        price: "$14.99",
        image: chickenBurger
      },
      {
        id: 7,
        name: "Grilled Chicken Club",
        description: "Grilled chicken, bacon, lettuce, tomato, mayo",
        price: "$15.99",
        image: chickenBurger
      }
    ]
  },
  {
    id: "hot-dogs",
    name: "Hot Dogs",
    items: [
      {
        id: 8,
        name: "Classic Dog",
        description: "All-beef hot dog with mustard and ketchup",
        price: "$6.99"
      },
      {
        id: 9,
        name: "Chili Dog",
        description: "Hot dog topped with chili and cheese",
        price: "$8.99"
      },
      {
        id: 10,
        name: "Chicago Style",
        description: "Hot dog with onions, relish, tomato, peppers",
        price: "$9.99"
      }
    ]
  },
  {
    id: "fries",
    name: "Fries",
    hasAddons: true,
    addonTitle: "Dipping Sauces",
    items: [
      {
        id: 11,
        name: "Regular Fries",
        description: "Crispy golden fries",
        price: "$4.99"
      },
      {
        id: 12,
        name: "Loaded Fries",
        description: "Fries with cheese, bacon, and green onions",
        price: "$7.99"
      },
      {
        id: 13,
        name: "Sweet Potato Fries",
        description: "Crispy sweet potato fries",
        price: "$5.99"
      }
    ],
    addons: [
      { name: "Ketchup", price: "Free" },
      { name: "Ranch", price: "$0.50" },
      { name: "BBQ Sauce", price: "$0.50" },
      { name: "Cheese Sauce", price: "$1.00" }
    ]
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    items: [
      {
        id: 14,
        name: "Vanilla Shake",
        description: "Creamy vanilla milkshake",
        price: "$5.99"
      },
      {
        id: 15,
        name: "Chocolate Shake",
        description: "Rich chocolate milkshake",
        price: "$5.99"
      },
      {
        id: 16,
        name: "Strawberry Shake",
        description: "Fresh strawberry milkshake",
        price: "$5.99"
      }
    ]
  },
  {
    id: "soft-ice-cream",
    name: "Soft Ice-cream",
    hasAddons: true,
    addonTitle: "X-tra Stuff",
    items: [
      {
        id: 17,
        name: "Vanilla Cone",
        description: "Classic vanilla soft serve",
        price: "$3.99"
      },
      {
        id: 18,
        name: "Chocolate Cone",
        description: "Rich chocolate soft serve",
        price: "$3.99"
      },
      {
        id: 19,
        name: "Twist Cone",
        description: "Vanilla and chocolate swirl",
        price: "$4.49"
      }
    ],
    addons: [
      { name: "Sprinkles", price: "$0.50" },
      { name: "Chocolate Chips", price: "$0.75" },
      { name: "Caramel Sauce", price: "$0.75" },
      { name: "Whipped Cream", price: "$0.50" }
    ]
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: 20,
        name: "Soft Drinks",
        description: "Coke, Pepsi, Sprite, Orange",
        price: "$2.99"
      },
      {
        id: 21,
        name: "Fresh Lemonade",
        description: "House-made fresh lemonade",
        price: "$3.99"
      },
      {
        id: 22,
        name: "Iced Tea",
        description: "Sweet or unsweetened",
        price: "$2.99"
      },
      {
        id: 23,
        name: "Coffee",
        description: "Hot or iced coffee",
        price: "$3.49"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
                    {item.image && (
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground">{item.name}</h3>
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-3">{item.description}</p>
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
                            {addon.price}
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