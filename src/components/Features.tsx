import { Flame, Sandwich, Sparkles } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Freshly Smashed",
    text: "Beef smashed to order for a perfect crust and juicy bite.",
    delay: 0,
  },
  {
    icon: Sandwich,
    title: "Premium Buns",
    text: "Toasted potato buns that hold it together without getting soggy.",
    delay: 120,
  },
  {
    icon: Sparkles,
    title: "Signature Sauces",
    text: "House-made sauces crafted for balance and bold flavor.",
    delay: 240,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">What Makes Us Different</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality ingredients, dialed-in technique, and a little obsession.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map(({ icon: Icon, title, text, delay }) => (
            <div
              key={title}
              data-reveal
              style={{ transitionDelay: `${delay}ms` }}
              className="opacity-0 translate-y-10 transition-all duration-1000 ease-out will-change-transform bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-brand"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
              <p className="text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
