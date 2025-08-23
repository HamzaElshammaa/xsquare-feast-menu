import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";

const menuItems = [
  {
    id: 1,
    name: "Classic X-Square",
    description: "Beef patty, cheese, lettuce, tomato, pickles, special sauce",
    price: "$12.99",
    image: classicBurger,
    category: "Signature"
  },
  {
    id: 2,
    name: "BBQ Bacon Deluxe",
    description: "Beef patty, bacon, BBQ sauce, onion rings, lettuce",
    price: "$15.99",
    image: bbqBurger,
    category: "Premium"
  },
  {
    id: 3,
    name: "Crispy Chicken",
    description: "Fried chicken breast, lettuce, tomato, mayo",
    price: "$13.99",
    image: chickenBurger,
    category: "Chicken"
  },
  {
    id: 4,
    name: "Double Trouble",
    description: "Double beef patties, double cheese, special sauce",
    price: "$18.99",
    image: classicBurger,
    category: "Signature"
  },
  {
    id: 5,
    name: "Spicy Jalapeño",
    description: "Beef patty, jalapeños, pepper jack cheese, spicy mayo",
    price: "$14.99",
    image: bbqBurger,
    category: "Spicy"
  },
  {
    id: 6,
    name: "Mushroom Swiss",
    description: "Beef patty, sautéed mushrooms, swiss cheese",
    price: "$14.99",
    image: classicBurger,
    category: "Gourmet"
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
            Handcrafted burgers made with premium ingredients and served fresh daily
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                  <span className="text-lg font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary bg-accent px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
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
            Order Now on Foodics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;