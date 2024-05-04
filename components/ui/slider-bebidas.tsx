import { cn } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";

interface SliderBebidasProps {
  itemActivo: number;
  id: number;
  imagel: StaticImageData;
  name: string;
  onClick: () => void;
  className?: string;
}

export const SliderBebidas = ({
  imagel,
  itemActivo,
  id,
  name,
  onClick,
  className,
}: SliderBebidasProps) => {
  return (
    <li className={cn(" h-full w-[100%] relative card", className)}>
      <Image
        src={imagel}
        alt="Image"
        className=" object-cover"
        fill
        sizes="100%"
        loading="lazy"
      />
    </li>
  );
};
