"use client";

import { drinkSlider } from "@/assets/constants";
import { ArrowsLR } from "@/components/ui/arrows-lr";
import { CircleImageSlider } from "@/components/ui/circle-image";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { usePrevNextButtons } from "@/components/ui/EmblaCarouselArrowButtons";
import { TextSlider } from "@/components/ui/text-slider";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useMemo, useState } from "react";

export const SliderBeverages = () => {
  const [itemActivo, setItemActivo] = useState(0);
  const Slides2 = useMemo(() => drinkSlider.map((bebida) => bebida.imageR), []);
  const lenlist = drinkSlider.length;
  const OPTIONS: EmblaOptionsType = useMemo(
    () => ({
      align: "start",
      loop: true,
      watchDrag: false,
    }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleNextCombined = useCallback(() => {
    onNextButtonClick();
    setItemActivo((prevItemActivo) => (prevItemActivo + 1) % lenlist);
  }, [onNextButtonClick, lenlist]);

  const handlePrevCombined = useCallback(() => {
    onPrevButtonClick();
    setItemActivo((prevItemActivo) => (prevItemActivo - 1 + lenlist) % lenlist);
  }, [onPrevButtonClick, lenlist]);

  const bebidaActiva = drinkSlider[itemActivo];

  return (
    <section
      className={`h-[100dvh] w-full relative overflow-hidden flex flex-col items-center justify-end  `}
    >
      <div className={`bg-transition ${drinkSlider[itemActivo].bgcolor}`} />

      <CircleImageSlider
        key={bebidaActiva.titulo}
        itemActivo={itemActivo}
        id={itemActivo}
        item={bebidaActiva}
      />
      <TextSlider
        key={bebidaActiva.description}
        itemActivo={itemActivo}
        id={itemActivo}
        item={bebidaActiva}
      />
      <ArrowsLR
        handleNext={handleNextCombined}
        handlePrev={handlePrevCombined}
        disableNext={prevBtnDisabled}
        disablePrev={nextBtnDisabled}
        className="mb-10"
      />
      <EmblaCarousel slides={Slides2} emblaRef={emblaRef} />
    </section>
  );
};
