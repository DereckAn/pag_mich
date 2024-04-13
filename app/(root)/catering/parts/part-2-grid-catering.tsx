import { comida1 } from "@/assets";
import Image from "next/image";

export const Part2GridCatering = () => {
  return (
    <div className=" w-full h-full grid grid-rows-3 grid-cols-3 gap-5 ">
      <Image
        src={comida1}
        alt="catering"
        className="rounded-3xl  col-start-1 col-end-3 row-start-1 row-end-3"
      />
      <Image
        src={comida1}
        alt="catering"
        className="rounded-3xl object-cover  w-[100%] h-[100%]"
      />
      <Image
        src={comida1}
        alt="catering"
        className="rounded-3xl object-cover  w-[100%] h-[100%]"
      />
      <Image
        src={comida1}
        alt="catering"
        className="rounded-3xl object-cover  w-[100%] h-[100%]"
      />
      <Image
        src={comida1}
        alt="catering"
        id="ultima"
        className="rounded-3xl object-cover  col-start-2  col-span-2 w-[100%] h-[100%] " 
      />
    </div>
  );
};
