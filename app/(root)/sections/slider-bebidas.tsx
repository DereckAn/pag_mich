"use client";
import { bebidasSliderSection } from "@/assets/constants";
import { ArrowsLR } from "@/components/ui/arrows-lr";
import { SliderBebidas } from "@/components/ui/slider-bebidas";
import { SliderItem } from "@/components/ui/slider-items";
import { cn } from "@/utils/utils";
import { useRef, useState } from "react";

export const SliderBeverages = () => {
  const [itemActivo, setItemActivo] = useState<number>(0);
  const carouselRef = useRef<HTMLUListElement>(null);
  const [listaaa, setListaaa] = useState(bebidasSliderSection);

  const handleNext = () => {
    setListaaa(listaaa.slice(1).concat(listaaa.slice(0, 1)));
  };

  const handlePrev = () => {
    setListaaa(listaaa.slice(-1).concat(listaaa.slice(0, -1)));

  };

  return (
    <section className="w-full h-screen relative overflow-hidden  ">
      <ul>
        {listaaa.map((bebida, index ) => (
          <SliderItem
            key={bebida.titulo + index}
            itemActivo={itemActivo}
            id={index}
            imagec={bebida.imagenc}
            titulo={bebida.titulo}
            description={bebida.description}
          />
        ))}
      </ul>
      <ArrowsLR handleNext={handleNext} handlePrev={handlePrev} />
      <div id="slide" className=" absolute right-[10%] top-0 bottom-0 m-auto h-[80%] flex items-center justify-center">
        {listaaa.map((bebida, index) => (
          <SliderBebidas
            key={bebida.titulo}
            imagel={bebida.imagenl}
            id={index}
            itemActivo={itemActivo}
            name={bebida.titulo}
            className={` item`}
          />
        ))}
      </div> 
    </section>
  );
};
