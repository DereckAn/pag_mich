'use client';

import { CircleImageSlider } from "@/app/(root)/cart/components/circle-image";
import { cerdo } from "@/assets";
import { useState } from "react";
import { TextSlider } from "./components/text-slider";
import { drinkSlider } from "@/assets/constants";

const CartPage = () => {
  const [itemActivo, setItemActivo] = useState<number>(0);
  const lista = drinkSlider.map((bebida) => bebida);
  return (
    <section className="h-[100dvh] w-full relative overflow-hidden">
        <CircleImageSlider itemActivo={itemActivo} id={0} />
        <TextSlider />
    </section>
  );
};

export default CartPage;
