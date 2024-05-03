import AboutUs from "./sections/about-us-section";
import { FoodSection } from "./sections/food-section";
import { HeroSection } from "./sections/hero-section";
import { HighlightSection } from "./sections/highlights-sections";
import { MenuSection } from "./sections/menu-section";
import { ReviewSection } from "./sections/reviews-section";
import { SliderBeverages } from "./sections/slider-bebidas";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SliderBeverages />
      <MenuSection />
      <FoodSection />
      <AboutUs />
      <HighlightSection />
      <ReviewSection /> 
    </main>
  );
}
