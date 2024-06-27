import { cn } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";
import { differenceInDays } from 'date-fns';

interface FlipCardProps {
  image: StaticImageData | string;
  description: string;
  link?: string;
  className?: string;
  timestamp?: string;
}

export const FlipCard = ({ image, description, className, link, timestamp }: FlipCardProps) => {

  function calculateDaysSince(timestamp: string): number {
    const givenDate = new Date(timestamp);
    const currentDate = new Date();
    return differenceInDays(currentDate, givenDate);
  }

  return (
    <div className={cn(`squareci rounded-3xl `, className)}>
      <div className={`rounded-3xl cardci`}>
        <div className={`frontci rounded-3xl`}>
          <Image
            src={image}
            alt={description}
            className="rounded-3xl object-cover w-full h-full"
            width={200}
            height={200}
          />
        </div>
        <div
          className={`backci rounded-3xl flex flex-col justify-start items-start p-5`}
        >
          <p className="text-[12px]">about {calculateDaysSince(timestamp!)} days ago</p>
          <p className={`description_text`}>{description}</p>
          <span className="absolute bottom-5 left-5 text-[12px] sm:text-sm md:text-md">@provoproteinhouse</span>
          <a href={link}>
            <i className="fi fi-brands-instagram absolute bottom-3 right-5 text-xl md:text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};