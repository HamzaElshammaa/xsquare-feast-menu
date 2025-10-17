const Story = () => {
  return (
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Story</h2>
        </div>
        <div className="space-y-6">
          <p
            data-reveal
            style={{ transitionDelay: `0ms` }}
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out will-change-transform text-lg text-muted-foreground"
          >
            We started X-Square to do one thing really well: serve the burger we wanted to eat every day.
            Simple, focused, and dialed into the details that matter.
          </p>
          <p
            data-reveal
            style={{ transitionDelay: `150ms` }}
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out will-change-transform text-lg text-muted-foreground"
          >
            That means quality ingredients, consistency in the process, and a love for the craft. You’ll taste it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
