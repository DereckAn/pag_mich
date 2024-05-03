import Image, { StaticImageData } from "next/image";
import { Buttons } from "./buttons";

interface SliderItemProps {
  itemActivo: number;
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
}

export const SliderItem = ({
  itemActivo,
  id,
  image,
  name,
  description,
}: SliderItemProps) => {
  return (
    <li className="absolute top-0 bottom-0 -left-[18%] m-auto flex items-center gap-16 border-2">
      <div className="rounded-full w-[45vw] h-[45vw]  flex relative items-center justify-center">
        <Image
          src={image}
          fill
          className="rounded-full object-cover "
          alt="Image"
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <div className=" flex flex-col items-start justify-center gap-5">
        <h2 className="text-6xl font-bold">{name}</h2>
        <p className="text-xl max-w-md">{description}</p>
        <Buttons href="/" text="Buy now" className="bg-primary " />

      </div>

      {/* <div className="spcae-y-4 absolute w-[500px] top-0 left-0 right-0 m-auto z-100">
        <h2
          className={cn(
            "text-6xl lg:text-8xl m-0 text-white font-bold translate-y-[30px] blur-[20px] opacity-0 animation-delay-4",
            // itemActivo === id && "animate-show-content"
          )}
        >
          {name}
        </h2>
        <p
          className={cn(
            "text-gray-200 translate-y-[30px] blur-[20px] opacity-0 animation-delay-5",
            // itemActivo === id && "animate-show-content"
          )}
        >
          {description}
        </p>
      </div> */}
    </li>
  );
};
