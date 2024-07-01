"use client";

import { CircleImageSlider } from "@/app/(root)/cart/components/circle-image";
import { drinkSlider } from "@/assets/constants";
import { ArrowsLR } from "@/components/ui/arrows-lr";
import { useState } from "react";
import { TextSlider } from "./components/text-slider";

const CartPage = () => {
  const [itemActivo, setItemActivo] = useState<number>(0);
  const handleNextCombined = () => {
    setItemActivo((prevItemActivo) => {
      // Si es el último elemento, vuelve al primero
      return prevItemActivo === drinkSlider.length - 1 ? 0 : prevItemActivo + 1;
    });
  };

  const handlePrevCombined = () => {
    setItemActivo((prevItemActivo) => {
      // Si es el primer elemento, va al último
      return prevItemActivo === 0 ? drinkSlider.length - 1 : prevItemActivo - 1;
    });
  };
  return (
    <section className="h-[100dvh] w-full relative overflow-hidden flex flex-col items-center justify-end">
      <ul>
        {drinkSlider.map((bebida, index) => (
          <CircleImageSlider
            key={bebida.titulo}
            itemActivo={itemActivo}
            id={index}
            item={bebida}
          />
        ))}
      </ul>
      <ul>
        {drinkSlider.map((bebida, index) => (
          <TextSlider
            key={bebida.titulo}
            itemActivo={itemActivo}
            id={index}
            item={bebida}
          />
        ))}
      </ul>
      <ArrowsLR
        handleNext={handleNextCombined}
        handlePrev={handlePrevCombined}
        className="mb-10"
      />
    </section>
  );
};

export default CartPage;
