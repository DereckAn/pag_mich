import Image, { StaticImageData } from "next/image";
import { Buttons } from "./buttons";
import Menuhi from "@/styles/catering-styles.module.css";

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
      <div className="mx-auto cristalblur rounded-3xl sm:h-[350px] flex items-center justify-between p-3 my-3 flex-col-reverse sm:flex-row max-w-7xl">
        <div className="flex flex-col h-full justify-between px-5  ">
          <div>
            <h2 className="text-2xl mt-5">{title}</h2>
            <p className="text-lg">{text}</p>
            <ul>
              {lista.map((item, index) => (
                <li key={index} className="palomita">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-5">
            <Buttons
              href={link}
              text="View Menu"
              className="bg-primary text-vainilla"
            />
          </div>
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
