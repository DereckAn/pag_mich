"use client";

import { productscart } from "@/assets/dummydb";
import { cn } from "@/utils/utils";
import { useState } from "react";
import { CardQuantityProduct } from "./card-quantityproduct";

export const MiniCart = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const subtotal = productscart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

  return (
    <>
      <aside
        className={cn(
          "fixed right-0 flex flex-col h-full z-50 w-[90%] sm:w-[70%] xl:w-[33%] transition-all space-y-5 bg-vainilla p-3",
          showCart ? "top-0 delay-300" : "-top-full"
        )}
      >
        <div className=" overflow-y-auto  flex flex-col bg-white rounded-3xl p-6 ">
          <section className="basis-1/12 ">
            <h1 className="text-2xl font-medium">Order Details</h1>
          </section>
          <ul className="basis-8/12 max-h-full overflow-y-auto scrollbar-hidden ">
            {productscart.map((product) => (
              <li key={product.name} className="border p-3 rounded-3xl mb-3">
                <CardQuantityProduct product={product} />
              </li>
            ))}
          </ul>
          <section className="basis-3/12 pt-2 flex flex-col justify-between gap-y-2 ">
            <ul className="space-y-1 2xl:space-y-3 ">
              <li className="flex items-center justify-between">
                <p className="text-gray-500 ">Subtotal</p>
                <h3 className="text-lg font-bold">{subtotal.toFixed(2)}</h3>
              </li>
              <li className="flex items-center justify-between">
                <p className="text-gray-500 ">Taxes (10%)</p>
                <h3 className="text-lg font-bold">{taxes.toFixed(2)}</h3>
              </li>
              <li className="flex items-center justify-between">
                <p className="text-gray-500 ">Total</p>
                <h3 className="text-lg font-bold">{total.toFixed(2)}</h3>
              </li>
            </ul>
            <button
              type="button"
              className="bg-primary w-full text-white py-4 rounded-full font-medium hover:tracking-widest transition-all"
            >
              Confirm Order
            </button>
          </section>
        </div>
      </aside>
      <button
        type="button"
        onClick={() => setShowCart(true)}
        className="fixed bottom-3 right-3 w-14 h-14 bg-black text-white text-xl rounded-full z-30 flex items-center justify-center" 
      >
        <i className="fi fi-br-shopping-cart"></i>
      </button>
      <button
        type="button"
        className={cn(
          "fixed bg-black/40 transition-all",
          showCart
            ? "w-full h-full right-0 top-0"
            : "w-0 h-0 bottom-0 delay-300 left-0 "
        )}
        onClick={() => setShowCart(false)}
      ></button>
    </>
  );
};
