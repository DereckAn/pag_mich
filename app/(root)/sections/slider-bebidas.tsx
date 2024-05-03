"use client";
import { cerdo } from "@/assets";
import { ArrowsLR } from "@/components/ui/arrows-lr";
import { SliderItem } from "@/components/ui/slider-items";
import { useState } from "react";

export const SliderBeverages = () => {
  const [itemActivo, setItemActivo] = useState<number>(1);
  const countItems = 10;

  const handleNext = () => {
    setItemActivo((prev) => (prev === countItems ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setItemActivo((prev) => (prev === 1 ? countItems : prev - 1));
  };
  return (
    <section className="w-full h-screen relative">
      <ul>
        <SliderItem
          itemActivo={itemActivo}
          id={1}
          image={cerdo}
          name="Fresh Grapes"
          description="loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
      </ul>
      <ArrowsLR handleNext={handleNext} handlePrev={handlePrev} />
      <ul>

      </ul>
    </section>
  );
};
