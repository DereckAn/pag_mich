import { comida11 } from "@/assets";
import Image from "next/image";
import { Part1Catering } from "../parts/part-1-catering";
import { Part2GridCatering } from "../parts/part-2-grid-catering";

export const HeroGridSection = () => {
  return (
    <section className=" flex flex-col xl:flex-row relative  ">
        <Part1Catering classname="xl:basis-1/2 m-5" />
        <Part2GridCatering classname="xl:basis-1/2 m-5 " />


      <div className="absolute -z-10 w-full h-full">
        <Image src={comida11} alt={"Comida11"}  className="w-full h-full"/>
      </div>
    </section>
  );
};
