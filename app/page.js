import IvarHero from "./components/IvarHero";
import FeaturedCarousel from "./components/FeaturedCarousel";
import { CategoryCards, ProcessSteps, InnovationTrust, GlobalBand } from "./components/HomeBands";

export default function Home() {
  return (
    <main id="home" className="bg-ivar-paper">
      <IvarHero />
      <CategoryCards />
      <FeaturedCarousel />
      <ProcessSteps />
      <InnovationTrust />
      <GlobalBand />
    </main>
  );
}
