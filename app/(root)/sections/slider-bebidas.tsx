"use client";
import { bebidasSliderSection } from "@/assets/constants";
import { ArrowsLR } from "@/components/ui/arrows-lr";
import { SliderBebidas } from "@/components/ui/slider-bebidas";
import { SliderItem } from "@/components/ui/slider-items";
import sec from "@/styles/sections-styles.module.css";
import { useRef, useState } from "react";

export const SliderBeverages = () => {
  const [itemActivo, setItemActivo] = useState<number>(0);
  const countItems = bebidasSliderSection.length - 1;
  const carouselRef = useRef<HTMLUListElement>(null);
  // const newList = bebidasSliderSection;

  //TODO: Insert copies of the last few cards ti beginning of the carousel at once
  // to make the carousel infinite
  const itemsToDuplicate = 3;
  const newList = [
    ...bebidasSliderSection.slice(-itemsToDuplicate),
    ...bebidasSliderSection,
    ...bebidasSliderSection.slice(0, itemsToDuplicate),
  ];
  // Esto es para calcular cuantas cartas se ven en el carousel
  // let cardPerView = Math.round((carousel?.offsetWidth || 0) / firstCardWidth);

  const handleNext = () => {
    setItemActivo((prev) => (prev === countItems ? 0 : prev + 1));
    if (carouselRef.current) {
      const firstCardWidth =
        (carouselRef.current.querySelector(".card") as HTMLElement)
          ?.offsetWidth || 0;
      carouselRef.current.scrollLeft += firstCardWidth;
    }
  };

  const handlePrev = () => {
    setItemActivo((prev) => (prev === 0 ? countItems : prev - 1));
    if (carouselRef.current) {
      const firstCardWidth =
        (carouselRef.current.querySelector(".card") as HTMLElement)
          ?.offsetWidth || 0;
      carouselRef.current.scrollLeft -= firstCardWidth;
    }
  };

  return (
    <section className="w-full h-screen relative overflow-hidden  ">
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
        ref={carouselRef}
        className={` absolute h-[80%] border-4 top-0 bottom-0 left-[55%] m-auto ${sec.carusell} `}
      >
        {newList.map((bebida, index) => (
          <SliderBebidas
            key={bebida.titulo + index}
            imagel={bebida.imagenl}
            id={index}
            onClick={() => setItemActivo(index)}
            itemActivo={itemActivo}
            name={bebida.titulo}
            className={`${sec.card_carusell} card`}
          />
        ))}
      </ul>
    </section>
  );
};
