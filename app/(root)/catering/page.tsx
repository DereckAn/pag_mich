import { Part2Catering } from "./parts/par-2-catering";
import { Part1Catering } from "./parts/part-1-catering";

const Catering = () => {
  return (
    <section className="w-full h-screen">
      <div className=" flex w-full h-screen p-5 rounded-3xl">
        <div className="basis-1/2 bg-slate-200 rounded-l-3xl">
          <div className="flex flex-col h-full items-center justify-center ">
            <Part1Catering />
          </div>
        </div>

        <div className="basis-1/2 bg-primary  rounded-r-3xl flex justify-center items-center  flex-col gap-5">
          <Part2Catering />
        </div>
      </div>
    </section>
  );
};

export default Catering;
