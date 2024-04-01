import { comida1, comida10, comida9 } from "@/assets";
import Image from "next/image";

export const Part2Catering = () => {
  return (
    <div className="flex flex-col h-full items-center  gap-6 justify-center">
      <div className="rounded-3xl lg:w-[40vw] w-[80vw] lg:h-[40vw] h-[80vw]">
        <Image
          src={comida1}
          alt="catering"
          className="rounded-3xl object-cover "
        />
      </div>
      <div className="flex w-full items-center justify-center gap-6">
        <Image
          src={comida9}
          alt="catering"
          className="rounded-3xl object-cover lg:w-[12vw] w-[24vw] lg:h-[12vw] h-[24vw]"
        />
        <Image
          src={comida10}
          alt="catering"
          className="rounded-3xl object-cover w-full lg:h-[12vw] h-[24vw]"
        />
      </div>
    </div>
  );
};
