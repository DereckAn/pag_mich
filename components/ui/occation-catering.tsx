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
    <div className="flex lg:flex-col flex-row lg:justify-star justify-center items-center gap-3 h-full lg:mx-6 my-6 lg:w-auto  ">
      <Image src={image} alt={title} width={200} height={200} className="" />
      <div className="flex flex-col justify-center lg:items-center w-[40vw] lg:w-auto  ">
        <h3 className="text-3xl font-bold ">{title}</h3>
        <div className="h-[100px]  hidden lg:flex items-center justify-center  ">
          <p className="text-xl max-w-sm text-center">{text}</p>
        </div>
        <ul className="flex flex-col p-5 ml-5 lg:left-[25%]  ">
          {lista.map((item) => (
            <li key={item} className="palomita">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
