import Image, { StaticImageData } from "next/image";
import { FaRegHeart } from "react-icons/fa";
import FixStarRating from "../stars";

interface CardMenuProps {
  stars: number;
  title: string;
  description: string;
  price: number;
  image: StaticImageData;
}

export const CardMenu2 = ({
  stars,
  image,
  price,
  description,
  title,
}: CardMenuProps) => {
  return (
    <div className="h-[350px] w-[300px] flex items-start flex-col justify-end p-2 rounded-3xl  relative">
      <div className="cristalblur p-1 rounded-3xl">
        <FixStarRating stars={stars} className="ml-2" />
        <h3 className="text-white font-bold mt-2 text-lg">{title}</h3>
        <p className="text-gray-300 my-3">{description}</p>
        <div className="flex items-center justify-between w-full">
          <p className="text-white font-bold">${price}</p>
          <button className="border border-red-400 rounded-xl bg-red-400 py-2 px-3">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="absolute -z-10 w-full h-full inset-0 rounded-3xl ">
        <Image
          src={image}
          alt={"Comida11"}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="absolute top-4 right-4">
        <FaRegHeart className="text-white text-2xl" />
      </div>
    </div>
  );
};
