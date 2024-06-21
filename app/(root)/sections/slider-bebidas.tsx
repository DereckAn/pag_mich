"use client";
import { drinkSlider } from "@/assets/constants";
import { ArrowsLR } from "@/components/ui/arrows-lr";
import { SliderItem } from "@/components/ui/slider-items";
import { useState } from "react";

export const SliderBeverages = () => {
  const [activeDrink, setActiveDrink] = useState<number>(0);
  const listDrink = drinkSlider;

  // Set index for drinks and ingredients
  const handleNext = () => {
    const drink = activeDrink === listDrink.length - 1 ? 0 : activeDrink + 1;

    setActiveDrink(drink);
  };

  const handlePrev = () => {
    const drink = activeDrink === 0 ? listDrink.length - 1 : activeDrink - 1;

    setActiveDrink(drink);
  };

  // Functions to go back or forward
  const handleNextCombined = () => {
    handleNext();
  };

  const handlePrevCombined = () => {
    handlePrev();
  };

  return (
    <section className="relative w-screen py-20 min-[500px]:py-24 md:py-0">
      <ul>
        {listDrink.map((drink, index) => (
          <SliderItem
            key={drink.titulo + index}
            itemActivo={activeDrink}
            id={index}
            imageDrink={drink.imageDrink}
            imageIngredients={drink.imageIngredients}
            ingredients={drink.ingredients}
            titulo={drink.titulo}
            description={drink.description}
          />
        ))}
      </ul>
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 ">
        <ArrowsLR
          handleNext={handleNextCombined}
          handlePrev={handlePrevCombined}
        />
      </div>
    </section>
  );
};
