import XBurger from "@/assets/XBurger.png";
import XFries from "@/assets/x-fries.jpeg";

const items = [
  {
    title: "X-Burger",
    img: XBurger,
    text: "Two mustard-smash patties, cheese sauce, pickles, and our X sauce.",
    price: 190,
    delay: 0,
  },
  {
    title: "X-Fries",
    img: XFries,
    text: "Loaded fries with smashed patty, onions, jalapeños, and sauces.",
    price: 125,
    delay: 150,
  },
];

const Signature = () => {
  return (
    <section id="signature" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Signature Picks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crowd favorites you can’t go wrong with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map(({ title, img, text, price, delay }) => (
            <article
              key={title}
              data-reveal
              style={{ transitionDelay: `${delay}ms` }}
              className="opacity-0 translate-y-10 transition-all duration-1000 ease-out will-change-transform rounded-2xl border border-primary/30 p-4 sm:p-6 bg-white"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                <img src={img} alt={title} className="w-40 h-40 object-contain" />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-semibold text-primary mb-1">{title}</h3>
                  <p className="text-muted-foreground mb-2">{text}</p>
                  <div className="text-lg font-bold text-primary">{price}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signature;
