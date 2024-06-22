'use client';
import { Products } from "@/types";
import { cn } from "@/utils/utils";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/data/cart";

interface CardProductsProps {
  product: Products;
}

export const CardProducts = ({ product }: CardProductsProps) => {
  const carts = useSelector((store: any) => store.cart.items);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ productId: product.id, quantity: 1 }));
  }
  console.log(carts);
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
    <div className="bg-white p-6 rounded-3xl shadow-md space-y-5 text-primary ">
      <div className="flex items-center gap-x-6 ">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-2xl w-24 h-24 object-contain"
        />
        <div className="spcae-y-2">
          <div className="flex items-center gap-x-2">
            {discount > 0 && (
              <span className="bg-primary text-vainilla px-2 py-1.5 rounded-full text-xs font-bold">
                {discount}% OFF
              </span>
            )}
            {stock <= 0 && (
              <span className="py-1.5 px-2  bg-red-500/10 text-red-500 rounded-full text-sm font-bold">
                Out of stock
              </span>
            )}
          </div>
          <h3 className="text-xl md:text-3xl font-extrabold line-clamp-1">
            {name}
          </h3>
        </div>
      </div>
      <p className="text-gray-500 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-bold">${price.toFixed(2)}</h4>
        <button
          onClick={handleAddToCart}
          type="button"
          disabled={stock <= 0}
          className={cn(
            "flex bg-primary w-14 h-14 items-center justify-center rounded-full text-xl border-4 border-white/10 box-content transition-transform",
            stock > 0
              ? "hover:rotate-90 hover:bg-amarillo transition-transform duration-300 ease-in-out cursor-pointer"
              : "hover:rotate-0 bg-gray-500 cursor-not-allowed"
          )}
        >
          <i className="fi fi-rr-plus text-white"></i>
        </button>
      </div>
    </div>
  );
};
