import { cerdo } from "@/assets";
import { cn } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";

interface CircleImageProps {
  itemActivo?: number;
  id?: number;
  image: StaticImageData | string;
  brand?: string;
  name?: string;
  description?: string;
  className?: string;
}

export const CircleImage = ({
  className,
  itemActivo,
  id,
  image,
}: CircleImageProps) => {
  return (
    <li
      className={cn(
        "absolute transition-all duration-500 rounded-full w-[50vw] h-[50vw] ",
        itemActivo === id ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <Image
        src={image}
        alt={"cerdo"}
        className="object-cover rounded-full w-[50vw] h-[50vw]"
      />
    </li>
  );
};
