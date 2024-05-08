"use client";
import { bebidasSliderSection } from "@/assets/constants";
import { ArrowsLR } from "@/components/ui/arrows-lr";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { usePrevNextButtons } from "@/components/ui/EmblaCarouselArrowButtons";
import { SliderItem } from "@/components/ui/slider-items";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

export const SliderBeverages = () => {
  const [itemActivo, setItemActivo] = useState<number>(0);
  const [listaaa, setListaaa] = useState(bebidasSliderSection);

  const handleNext = () => {
    setListaaa(listaaa.slice(1).concat(listaaa.slice(0, 1)));
  };

  const handlePrev = () => {
    setListaaa(listaaa.slice(-1).concat(listaaa.slice(0, -1)));
  };

  const handleNextCombined = () => {
    handleNext();
    onNextButtonClick();
  };

  const handlePrevCombined = () => {
    handlePrev();
    onPrevButtonClick();
  };

  const OPTIONS: EmblaOptionsType = { align: "start", loop: true, watchDrag: false, };
  const Slides2 = bebidasSliderSection.map((bebida) => bebida.imagenl);

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-full h-screen relative overflow-hidden  ">
      <ul>
        {listaaa.map((bebida, index) => (
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
      <ArrowsLR
        handleNext={handleNextCombined}
        handlePrev={handlePrevCombined}
      />
      <EmblaCarousel
        slides={Slides2}
        emblaRef={emblaRef}
      />
    </section>
  );
};
