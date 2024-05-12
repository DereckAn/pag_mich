import Image, { StaticImageData } from "next/image";
import FixStarRating from "../stars";

interface CardMenuProps {
  stars: number;
  title: string;
  description: string;
  price: number;
  image: StaticImageData;
}

export const CardMenu = ({
  stars,
  image,
  price,
  description,
  title,
}: CardMenuProps) => {
  return (
    <div className="border-2 h-[350px] w-[300px] flex items-start flex-col justify-end p-4 rounded-3xl bg-[#f2f1e5] relative">
      <Image src={image} alt="image" className="w-[200px] rounded-3xl absolute top-[-60px] left-0 right-0 m-auto" />
      <FixStarRating stars={stars} />
      <h3 className="text-black font-bold mt-2">{title}</h3>
      <p className="text-gray-600 my-3">{description}</p>
      <div className="flex items-center justify-between w-full">
        <p className="text-black font-bold">${price}</p>
        <button className="border border-red-400 rounded-xl bg-red-400 py-2 px-3">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
