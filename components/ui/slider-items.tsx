import Image, { StaticImageData } from "next/image";
import { cn } from "@/utils/utils";
import { Buttons } from "./buttons";

interface SliderItemProps {
  itemActivo: number;
  id: number;
  imageDrink: StaticImageData;
  imageIngredients: StaticImageData;
  ingredients: string[];
  titulo: string;
  description: string;
}

export const SliderItem = ({
  itemActivo,
  id,
  imageDrink,
  imageIngredients,
  ingredients,
  titulo,
  description,
}: SliderItemProps) => {
  return (
    <li
      className={cn(
        "flex relative transition-all duration-1000 md:flex-row-reverse  md:portrait:max-h-[750px]",
        itemActivo === id ? "" : "hidden"
      )}
    >
      {/* Circle Container - Small Devices*/}
      <div className="rounded-full w-[100vw] h-[100vw] bg-[#81A782] -translate-x-[30%] md:hidden"></div>

      {/* Drink Container  */}
      <div className="absolute flex w-screen h-full md:relative md:flex-[0_0_70%] md:items-stretch">
        {/* Drink Description */}
        <div
          className="flex flex-col justify-center w-[50vw] text-primary
                      space-y-3 min-[560px]:space-y-6 2xl:space-y-4 pl-[5%] 
                      md:basis-[60%] md:-translate-x-[5%] md:justify-center md:pb-36 md:pt-10"
        >
          <h2
            className={cn(
              `font-bold text-4xl min-[560px]:text-5xl sm:text-5xl md:text-6xl  3xl:text-8xl whitespace-pre-wrap`,
              itemActivo === id && "animate-show-content"
            )}
          >
            {titulo.split(" ").slice(0, 2).join("\n")}
          </h2>
          <p
            className={cn(
              `line-clamp-2 text-lg min-[560px]:text-xl  sm:leading-relaxed md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl/relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed`,
              "sm:max-w-80 md:max-w-[35rem] lg:max-w-md xl:max-w-lg 3xl:max-w-xl",
              itemActivo === id && "animate-show-content"
            )}
          >
            {description}
          </p>
          <ul className="list-disc list-inside text-lg min-[560px]:text-xl sm:leading-relaxed md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl  md:leading-relaxed lg:leading-relaxed xl:leading-relaxed 3xl:leading-relaxed">
            {ingredients
              .filter((_, index) => index < 3)
              .map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
          <Buttons
            href="/menu"
            text="Buy Now"
            className={cn(
              "bg-primary text-vainilla font-bold w-fit text-sm min-[560px]:text-lg lg:text-2xl  3xl:text-4xl",
              itemActivo === id && "animate-show-content"
            )}
          />
        </div>

        {/* Drink Image */}
        <div className="flex items-center md:flex-[0_0_40%] md:items-stretch">
          <div className="absolute w-[70vw] h-[70vw] translate-x-[5%] md:relative md:w-auto md:h-auto md:translate-x-0">
            <Image
              src={imageDrink}
              alt="Drink"
              className="object-cover h-full w-full rounded-full shadow-rounded md:rounded-none md:shadow-none"
            />
          </div>
        </div>
      </div>

      {/* Ingredient Container */}
      <div className="hidden md:flex flex-[0_0_30%] h-auto w-auto items-center">
        <div className="-translate-x-[10%] w-[40vw] h-[40vw]">
          <Image
            src={imageIngredients}
            alt="Drink Ingredients"
            loading="lazy"
            className="object-cover h-full w-full rounded-full shadow-rounded"
          />
        </div>
      </div>
    </li>
  );
};
