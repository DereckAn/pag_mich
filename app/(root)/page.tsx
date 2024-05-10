import { DetailsCatering } from "./catering/sections-catering/details-section";
import AboutUs from "./sections/about-us-section";
import { FoodSection } from "./sections/food-section";
import { HeroSection } from "./sections/hero-section";
import { HighlightSection } from "./sections/highlights-sections";
import { MenuSection } from "./sections/menu-section";
import { ReviewSection } from "./sections/reviews-section";
import { SliderBeverages } from "./sections/slider-bebidas";
import { OrderCard } from "@/components/ui/order-card";
import { orderCards } from "@/assets/constants";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SliderBeverages />
      <HighlightSection />
      <Container className=" flex justify-center items-center flex-row">
        {orderCards.map((card) => (
          <OrderCard
            key={card.title}
            title={card.title}
            text={card.text}
            image={card.image}
            href={card.href}
          />
        ))}
      </Container>
      {/* <MenuSection /> */}
      {/* <FoodSection /> */}
      <AboutUs />
      <DetailsCatering />

      <ReviewSection /> 
    </main>
  );
}
