import { Part2Catering } from "../parts/part-2-catering";
import { Part1Catering } from "../parts/part-1-catering";

export const HeroSectionCatering = () => {
  return (
    <section className="w-full lg:h-screen">
      <div className=" flex w-full flex-col lg:flex-row lg:h-screen">
        <div className="basis-1/2 bg-slate-200 ">
          <div className="flex flex-col h-full items-center justify-center ">
            <Part1Catering />
          </div>
        </div>

        <div className="basis-1/2 bg-primary flex justify-center items-center py-6">
          <Part2Catering />
        </div>
      </div>
    </section>
  );
};