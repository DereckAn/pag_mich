import { comida1, comida10, comida9 } from "@/assets";
import Image from "next/image";

export const Part2Catering = () => {
  return (
    <>
      <div className="rounded-3xl w-[30vw] h-[30vw] ">
        <Image
          src={comida1}
          alt="catering"
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="flex w-[30vw] items-center justify-center gap-5">
        <Image
          src={comida9}
          alt="catering"
          className="rounded-3xl object-cover w-[10vw] h-[10vw]"
        />
        <Image
          src={comida10}
          alt="catering"
          className="rounded-3xl object-cover basis-2/3 w-[10vw] h-[10vw]"
        />
      </div>
    </>
  );
};

