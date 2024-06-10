import { ProductSubset } from "@/types";
import Image from "next/image";

interface CardQuantityProductProps {
  product: ProductSubset;
}

export const CardQuantityProduct = ({ product }: CardQuantityProductProps) => {
  const { name, quantity, price, image } = product;

  return (
    <>
      <div className="flex items-center justify-between gap-x-5 ">
        <div className="flex items-center gap-x-4 ">
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="w-14 h-14  object-contain  "
          />
          <h5 className="text-lg font-bold line-clamp-1"> {name} </h5>
        </div>
        <span className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full font-medium text-sm">
          x{quantity}
        </span>
      </div>
      <div className="flex items-center justify-between gap-x-5 mt-3 ">
        <div className="flex items-center gap-x-2 ">
          <button
            type="button"
            className="w-8 h-8 bg-primary hover:bg-amarillo transition-all duration-300 ease-in-out hover:text-primary hover:font-bold rounded-full flex items-center justify-center "
          >
            <i className="fi fi-rr-minus text-white " />
          </button>
          <button
            type="button"
            className="w-8 h-8 bg-primary hover:bg-amarillo transition-all duration-300 ease-in-out hover:text-primary hover:font-bold rounded-full flex items-center justify-center "
          >
            <i className="fi fi-rr-plus text-white " />
          </button>
        </div>
        <h3 className="text-lg font-bold">${(price * quantity).toFixed(2)}</h3>
      </div>
    </>
  );
};
