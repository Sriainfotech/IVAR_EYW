import BowlHero from "./components/BowlHero";
import QuickPick from "./components/QuickPick";
import {
  WhyIvar,
  StatsStrip,
  FeaturedBowls,
  BreakfastSection,
  Subscriptions,
  PlannerTeaser,
  CorporateTeaser,
} from "./components/HomeSections";
import FAQSection from "./components/FAQSection";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main id="home">
      <BowlHero />
      <QuickPick />
      <WhyIvar />
      <StatsStrip />
      <FeaturedBowls />
      <BreakfastSection />
      <Subscriptions />
      <PlannerTeaser />
      <CorporateTeaser />
      <FAQSection />
      <Newsletter />
    </main>
  );
}
