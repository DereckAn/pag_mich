'use client';

import { CircleImage } from "@/app/(root)/cart/components/circle-image";
import { cerdo } from "@/assets";
import { useState } from "react";

const CartPage = () => {
  const [itemActivo, setItemActivo] = useState<number>(0);
  return (
    <section className="h-screen w-full">
      <ul className="relative">
        <CircleImage image={cerdo} itemActivo={itemActivo} id={0} />
      </ul>
    </section>
  );
};

export default CartPage;
