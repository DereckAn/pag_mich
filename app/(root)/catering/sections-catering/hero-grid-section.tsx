import { Part1Catering } from "../parts/part-1-catering";
import { Part2GridCatering } from "../parts/part-2-grid-catering";

export const HeroGridSection = () => {
  return (
    <section className="h-auto 2xl:h-screen grid 2xl:grid-rows-1 2xl:grid-cols-2 grid-rows-2 grid-cols-1 gap-5 p-5">
      <Part1Catering />
      <Part2GridCatering />
    </section>
  );
};
