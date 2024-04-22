import { comida10 } from "@/assets";
import { Card } from "@/components/ui/card";
import Reviews from "@/styles/sections-styles.module.css";

export const ReviewSection = () => {
  return (
    <section className={`${Reviews.reviews} xl:h-[40vw] relative  w-full `}>
      <Card description="esta es la parte trasera de la card" image={comida10}/>
      <Card description="esta es la parte trasera de la card" className={`${Reviews.spanx2}`} image={comida10}/>
      <Card description="esta es la parte trasera de la card" image={comida10}/>
      <Card description="esta es la parte trasera de la card" image={comida10}/>
      <Card description="esta es la parte trasera de la card" image={comida10}/>
      <Card description="esta es la parte trasera de la card" image={comida10}/>
      <Card description="esta es la parte trasera de la card" image={comida10}/>
    </section>
  );
};
