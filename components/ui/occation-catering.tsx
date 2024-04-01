import Image, { StaticImageData } from "next/image";

interface OccationCateringProps {
  title: string;
  text: string;
  image: StaticImageData;
  lista: string[];
}

export const OccationCatering = ({
  title,
  text,
  image,
  lista,
}: OccationCateringProps) => {
  return (
    <div className="flex flex-col justify-star items-center gap-3 h-full mx-6">
      <Image src={image} alt={title} width={200} height={200} />
      <h3 className="text-3xl font-bold">{title}</h3>
      <div className="h-[100px]">
        <p className="text-xl max-w-sm text-center">{text}</p>
      </div>
      <ul>
        {lista.map((item) => (
          <li key={item} className="palomita">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
