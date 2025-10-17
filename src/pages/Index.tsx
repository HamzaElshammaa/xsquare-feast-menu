import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import LocationsMap from "@/components/LocationsMap";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Signature from "@/components/Signature";
import Story from "@/components/Story";
import { useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  useReveal(pageRef, { rootMargin: "0px 0px -10% 0px", threshold: 0.15 });

  return (
    <div ref={pageRef} className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Signature />
      {/* <Menu /> */}
      <Story />
      <LocationsMap />
      <Footer />
    </div>
  );
};

export default Index;
