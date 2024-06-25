import Image, { StaticImageData } from "next/image";
import { LinkPro } from "./link-pro";

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
          <div className="space-y-1">
            <h2 className="text-2xl mt-5">{title}</h2>
            <p className="text-lg">{text}</p>
            <ul className="list-inside sm:hidden lg:block">
              {lista.map((item) => (
                <li key={item} className="palomita ">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-5">
            <LinkPro
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
