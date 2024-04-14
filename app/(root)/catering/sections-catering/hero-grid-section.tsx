import { Part1Catering } from "../parts/part-1-catering";
import { Part2GridCatering } from "../parts/part-2-grid-catering";

export const HeroGridSection = () => {
  return (
    <section className=" flex gap-5 xl:h-screen p-5 flex-col xl:flex-row ">
      <Part1Catering classname="xl:basis-1/2 "/>
      <Part2GridCatering classname="xl:basis-1/2" />
    </section>
  );
};
