"use client";
import { bebidasSliderSection } from "@/assets/constants";
import { ArrowsLR } from "@/components/ui/arrows-lr";
import { SliderBebidas } from "@/components/ui/slider-bebidas";
import { SliderItem } from "@/components/ui/slider-items";
import sec from "@/styles/sections-styles.module.css";
import { useState } from "react";

export const SliderBeverages = () => {
  const [itemActivo, setItemActivo] = useState<number>(0);
  const countItems = bebidasSliderSection.length - 1;

  const handleNext = () => {
    setItemActivo((prev) => (prev === countItems ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setItemActivo((prev) => (prev === 0 ? countItems : prev - 1));
  };

  return (
    <section className="w-full h-screen relative overflow-hidde">
      <ul>
        {bebidasSliderSection.map((bebida, index) => (
          <SliderItem
            key={bebida.titulo}
            itemActivo={itemActivo}
            id={index}
            imagec={bebida.imagenc}
            titulo={bebida.titulo}
            description={bebida.description}
          />
        ))}
      </ul>
      <ArrowsLR handleNext={handleNext} handlePrev={handlePrev} />
      <ul
        className={` absolute h-[80%] border-4 top-0 bottom-0 left-[55%] m-auto ${sec.carusell} `}
      >
        {bebidasSliderSection.map((bebida, index) => (
          <SliderBebidas
            key={bebida.titulo}
            imagel={bebida.imagenl}
            id={index}
            onClick={() => setItemActivo(index)}
            itemActivo={itemActivo}
            name={bebida.titulo}
          />
        ))}
      </ul>
    </section>
  );
};
