import Image, { StaticImageData } from "next/image";

interface SliderBebidasProps {
  itemActivo: number;
  id: number;
  imagel: StaticImageData;
  name: string;
  className?: string;
}

export const SliderBebidas = ({
  imagel,
  className,
}: SliderBebidasProps) => {
  return (
    <div className={className}>
      <div className="content">
        <Image
          src={imagel}
          alt="Image"
          className=" object-cover"
          fill
          sizes="100%"
          loading="lazy"
        />
      </div>
    </div>
  );
};
