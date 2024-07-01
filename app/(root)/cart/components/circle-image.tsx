import { drinkSliderType } from "@/types";
import { cn } from "@/utils/utils";
import Image from "next/image";

interface CircleImageProps {
  itemActivo?: number;
  id?: number;
  item: drinkSliderType;
  className?: string;
}

export const CircleImageSlider = ({
  itemActivo,
  id,
  item,
  className,
}: CircleImageProps) => {
  const { imageC, titulo } = item || {};

  return (
    <li
      id="circular-image"
      className={cn(
        "transition-all duration-500 cicular_image_slider",
        itemActivo === id ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <Image
        src={imageC}
        alt={titulo}
        className="object-cover rounded-full w-full h-full"
      />
    </li>
  );
};
