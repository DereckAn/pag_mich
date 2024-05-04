import Image, { StaticImageData } from "next/image";

interface SliderBebidasProps {
  itemActivo: number;
  id: number;
  imagel: StaticImageData;
  name: string;
  onClick: () => void;
}

export const SliderBebidas = ({ imagel, itemActivo, id, name, onClick }: SliderBebidasProps) => {
  return (
    <li className=" h-full w-[100%] relative card">
      <Image
        src={imagel}
        alt="Image"
        className=" object-cover"
        fill
        loading="lazy"
      />
    </li>
  );
};
