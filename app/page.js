import IvarHero from "./components/IvarHero";
import IndiaFoodStory from "./components/IndiaFoodStory";
import IvarJourney from "./components/IvarJourney";
import WhatIvarDoes from "./components/WhatIvarDoes";
import FeaturedCarousel from "./components/FeaturedCarousel";
import MakhanaStory from "./components/MakhanaStory";
import IngredientLibrary from "./components/IngredientLibrary";
import IngredientToProduct from "./components/IngredientToProduct";
import FoodInnovationGrid from "./components/FoodInnovationGrid";
import { GlobalBand } from "./components/HomeBands";
import ContactCTABand from "./components/ContactCTABand";

export default function Home() {
  return (
    <main id="home">
      <IvarHero />
      <IndiaFoodStory />
      <IvarJourney />
      <WhatIvarDoes />
      <FeaturedCarousel />
      <MakhanaStory />
      <IngredientLibrary />
      <IngredientToProduct />
      <FoodInnovationGrid />
      <GlobalBand />
      <ContactCTABand />
    </main>
  );
}
