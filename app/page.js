import Hero from "./components/Hero";
import PromoStrip from "./components/PromoStrip";
import Story from "./components/Story";
import FeaturedProducts from "./components/FeaturedProducts";
import Feature from "./components/Feature";
import CTASection from "./components/CTASection";
import Wellness from "./components/Wellness";
import CommunityInitiative from "./components/CommunityInitiative";
import FAQSection from "./components/FAQSection";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <PromoStrip />
      <Story />
      <FeaturedProducts />
      <Feature />
      <CTASection />
      <Wellness />
      <CommunityInitiative />
      <FAQSection />
      <Newsletter />
    </main>
  );
}
