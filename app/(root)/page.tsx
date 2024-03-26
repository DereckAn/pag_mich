import Menu from "./menu/page";
import AboutUs from "./sections/about-us-section";
import { FoodSection } from "./sections/food-section";
import { HeroSection } from "./sections/hero-section";
import { MenuSection } from "./sections/menu-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MenuSection />
      <FoodSection />
      <AboutUs />
    </>
  );
}
