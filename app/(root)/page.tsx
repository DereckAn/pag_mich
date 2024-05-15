import { DetailsCatering } from "./catering/sections-catering/details-section";
import AboutUs from "./sections/about-us-section";
import { HeroSection } from "./sections/hero-section";
import { HighlightSection } from "./sections/highlights-sections";
import { ReviewSection } from "./sections/reviews-section";
import { SeassonCards } from "./sections/season-cards";
import { SliderBeverages } from "./sections/slider-bebidas";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SliderBeverages />
      <HighlightSection />
      <SeassonCards />
      <AboutUs />
      <DetailsCatering />
      <ReviewSection />
    </main>
  );
}
