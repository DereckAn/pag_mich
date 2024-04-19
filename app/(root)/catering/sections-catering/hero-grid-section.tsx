'use server';

import {fruits } from "@/assets";
import Image from "next/image";
import { Part1Catering } from "../parts/part-1-catering";
import { Part2GridCatering } from "../parts/part-2-grid-catering";

export const HeroGridSection = () => {
  return (
    <section className=" flex flex-col xl:flex-row relative ">
        <Part1Catering classname="basis-1/2 my-5 ml-5 mr-2" /> 
        <Part2GridCatering classname="basis-1/2  my-5 mr-5 ml-3" />

      {/* Esto es para poner un aimagen de fondo con nextjs. Es un poco complejo y basico  */}
      <div className="absolute -z-10 w-full h-full"> 
        <Image src={fruits} alt={"Comida11"}  className="w-full h-full object-cover"/>
      </div>
    </section>
  );
};
