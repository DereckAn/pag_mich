import { Part2Catering } from "./parts/par-2-catering";
import { Part1Catering } from "./parts/part-1-catering";

const Catering = () => {
  return (
    <section className="w-full h-screen">
      <div className=" flex w-full h-screen flex-col lg:flex-row">
        <div className="basis-1/2 bg-slate-200 ">
          <div className="flex flex-col h-full items-center justify-center relative">
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

export default Catering;
