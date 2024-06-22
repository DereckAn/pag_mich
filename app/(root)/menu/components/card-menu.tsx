import { Products } from "@/types";
import Image from "next/image";

interface CardMenuProps {
  product: Products;
}

export const CardMenu = ({ product }: CardMenuProps) => {
  const {
    id,
    name,
    price,
    image,
    description,
    category,
    discount,
    stock,
  } = product;
  return (
    <div className="shadow-md bg-white w-[500px] min-h-[300px] rounded-3xl flex flex-row items-start">
      <div className="w-[300px] h-[300px]">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          loading="lazy"
          className="rounded-l-3xl"
        />
      </div>
      <div className="p-5 pb-2 pr-2 flex-1 min-h-[300px] flex flex-col justify-between">
        <div className="flex flex-col">
          <h1 className=" relative text-2xl font-bold after:block after:absolute after:h-[4px] after:bg-primary after:w-full after:right-0 after:bottom-[-5px] ">{name}</h1>
          <p className="mt-2">{description}</p>
        </div>
        <div className=" flex items-center justify-between">
          <p className="text-2xl font-bold text-start "> ${price.toFixed(2)}</p>
          <div className="w-8 h-8 p-8 rounded-full text-vainilla bg-primary hover:bg-amarillo transition-all duration-300 ease-in-out hover:text-primary hover:font-bold flex items-center justify-center">
            <i className="fi fi-br-shopping-cart-add text-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};
