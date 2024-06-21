import Image, { StaticImageData } from "next/image";
import { Buttons } from "./buttons";

interface MenuHighlightCateringProps {
  title: string;
  text: string;
  image: StaticImageData;
  lista: string[];
  link: string;
}

export const MenuHighlightCatering = ({
  title,
  text,
  image,
  lista,
  link,
}: MenuHighlightCateringProps) => {
  return (
    <div className="w-full">
      <div className="mx-auto cristalblur rounded-3xl sm:h-[350px] md:h-[450px] flex items-center justify-between p-3 my-3 flex-col-reverse sm:flex-row max-w-7xl">
        <div className="flex flex-col h-full justify-between px-5">
          <h2 className="text-2xl mt-5">{title}</h2>
          <p className="text-lg">{text}</p>
          <ul className={`list-disc list-inside space-y-2 sm:hidden md:block`}>
            {lista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Buttons
            href={link}
            text="View Menu"
            className="bg-primary text-vainilla w-fit mt-4 sm:mt-0 md:mt-2"
          />
          <div className="my-5"></div>
        </div>
        <Image
          src={image}
          alt="comida11"
          className="h-full object-cover rounded-2xl "
        />
      </div>
    </div>
  );
};
