import AboutUs from "./sections/about-us-section";
import { FoodSection } from "./sections/food-section";
import { HeroSection } from "./sections/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FoodSection />
      <AboutUs />
    </>
  );
}
