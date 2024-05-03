import { cn } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";
import { Buttons } from "./buttons";

interface SliderItemProps {
  itemActivo: number;
  id: number;
  imagec: StaticImageData;
  titulo: string;
  description: string;
}

export const SliderItem = ({
  itemActivo,
  id,
  imagec,
  titulo,
  description,
}: SliderItemProps) => {
  return (
    <li
      className={cn(
        "absolute top-0 bottom-0 -left-[18%] m-auto flex items-center gap-16 transition-all duration-1000 border-r-2",
        itemActivo === id ? "z-10 opacity-100" : "opacity-0"
      )}
    >
      <div className="rounded-full w-[45vw] h-[45vw]  flex relative items-center justify-center">
        <Image
          src={imagec}
          className="rounded-full object-cover "
          fill
          alt="Image"
          loading="lazy"
        />
      </div>
      <div className=" flex flex-col items-start justify-center gap-5">
        <h2
          className={cn(
            `text-8xl font-bold`,
            itemActivo === id && "animate-show-content"
          )}
        >
          {titulo}
        </h2>
        <p
          className={cn(
            `text-xl max-w-md`,
            itemActivo === id && "animate-show-content"
          )}
        >
          {description}
        </p>
        <Buttons
          href="/"
          text="Buy now"
          className={cn(
            "bg-primary ",
            itemActivo === id && "animate-show-content"
          )}
        />
      </div>

         </li>
  );
};
