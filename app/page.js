import IvarHero from "./components/IvarHero";
import IndiaJourneyCircles from "./components/IndiaJourneyCircles";
import HomeCategoryCards from "./components/HomeCategoryCards";
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
      <IndiaJourneyCircles />
      <HomeCategoryCards />
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
