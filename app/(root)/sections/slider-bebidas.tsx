"use client";
import { bebidasSliderSection } from "@/assets/constants";
import { ArrowsLR } from "@/components/ui/arrows-lr";
import { SliderBebidas } from "@/components/ui/slider-bebidas";
import { SliderItem } from "@/components/ui/slider-items";
import sec from "@/styles/sections-styles.module.css";
import { cn } from "@/utils/utils";
import { useRef, useState } from "react";

export const SliderBeverages = () => {
  const [itemActivo, setItemActivo] = useState<number>(0);
  const carouselRef = useRef<HTMLUListElement>(null);
  const [transformX, setTransformX] = useState(0);
  const  listaOriginal = bebidasSliderSection;
  const [listaaa, setListaaa] = useState(listaOriginal);


  const handleNext = () => {
    setListaaa(listaaa.slice(1).concat(listaaa.slice(0, 1)));
  };

  const handlePrev = () => {
    setListaaa(listaaa.slice(-1).concat(listaaa.slice(0, -1)));

  };

  return (
    <section className="w-full h-screen relative overflow-hidden  ">
      {/* <ul>
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
      </ul> */}
      <ArrowsLR handleNext={handleNext} handlePrev={handlePrev} />
      <ul
        ref={carouselRef}
        className={cn(
          ` absolute h-[80%] border-4 top-0 bottom-0 left-0 right-0  m-auto ${sec.carusell} `
        )}
        
      >
        {listaaa.map((bebida, index) => (
          <SliderBebidas
          transformX={transformX}
            key={bebida.titulo + index}
            imagel={bebida.imagenl}
            id={index}
            onClick={() => setItemActivo(index)}
            itemActivo={itemActivo}
            name={bebida.titulo}
            className={`${sec.card_carusell} ${sec.cardd} ${sec.first_card} `}
          />
        ))}
      </ul>
    </section>
  );
};
