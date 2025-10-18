import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Vision from "@/components/Vision";
import OurIngredients from "@/components/OurIngredients";
import Menu from "@/components/Menu";
import FromTheGram from "@/components/FromTheGram";
import LocationsMap from "@/components/LocationsMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhoWeAre />
      <Vision />
      <OurIngredients />
      <FromTheGram />
      {/* <Menu /> */}
      <LocationsMap />
      <Footer />
    </div>
  );
};

export default Index;
