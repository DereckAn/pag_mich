import { cn } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";

interface SliderBebidasProps {
  itemActivo: number;
  id: number;
  imagel: StaticImageData;
  name: string;
  onClick: () => void;
  className?: string;
  onLoad?: () => void;
  transformX: number;
}

export const SliderBebidas = ({
  imagel,
  itemActivo,
  id,
  onLoad,
  name,
  onClick,
  className, transformX
}: SliderBebidasProps) => {
  return (
    <li style={{ transform: `translateX(${transformX}px)` }} className={cn(" h-full w-[100%] relative card", className)}>
      <Image
        src={imagel}
        alt="Image"
        className=" object-cover"
        fill
        sizes="100%"
        loading="lazy"
        onLoad={onLoad}
      />
    </li>
  );
};
