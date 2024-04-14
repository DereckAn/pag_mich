import { Part1Catering } from "../parts/part-1-catering";
import { Part2GridCatering } from "../parts/part-2-grid-catering";

export const HeroGridSection = () => {
  return (
    <section className=" flex xl:h-screen p-5 flex-col xl:flex-row xl:gap-5">
      <Part1Catering classname="basis-1/2"/>
      <Part2GridCatering classname="basis-1/2" />
    </section>
  );
};
