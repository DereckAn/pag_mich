import { cerdo } from "@/assets";
import { drinkSliderType } from "@/types";
import { cn } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";

interface CircleImageProps {
  itemActivo?: number;
  id?: number;
  item?: drinkSliderType;
  className?: string;
}

export const CircleImageSlider = ({
  itemActivo,
  id,
  item,
  className
}: CircleImageProps) => {
  return (
    <div
      id="circular-image"
      className={cn(
        "transition-all duration-500 cicular_image_slider",
        itemActivo === id ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <Image
        src={cerdo}
        alt={"cerdo"}
        className="object-cover rounded-full w-full h-full"
      />
    </div>
  );
};
