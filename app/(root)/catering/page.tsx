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

        <div className="basis-1/2 bg-orange-900  rounded-r-3xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum
          perspiciatis earum dolor illo nam vero facilis non, totam tempora ut
          vel odio, saepe vitae, aperiam temporibus fugiat. Quidem, ipsam.
        </div>
      </div>
    </section>
  );
};

export default Catering;
