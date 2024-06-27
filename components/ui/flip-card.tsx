import { InstagramMedia } from "@/types";
import { differenceInDays } from "date-fns";
import Image from "next/image";

interface FlipCardProps {
  item: InstagramMedia;
}

export const FlipCard = ({ item }: FlipCardProps) => {
  const { caption, media_url, permalink, timestamp } = item;

  function calculateDaysSince(timestamp: string): number {
    const givenDate = new Date(timestamp);
    const currentDate = new Date();
    return differenceInDays(currentDate, givenDate);
  }

  return (
    <div className={`squareci rounded-3xl bg-transparent`}>
      <div className={`rounded-3xl cardci`}>
        <div className={`frontci rounded-3xl`}>
          <Image
            src={media_url}
            alt={caption}
            className="rounded-3xl object-cover w-full h-full"
            width={200}
            height={200}
          />
        </div>
        <div
          className={`backci rounded-3xl flex flex-col justify-start items-start p-5`}
        >
          <p className="text-[12px]">
            about {calculateDaysSince(timestamp)} days ago
          </p>
          <p className={`description_text`}>{caption}</p>
          <span className="absolute bottom-5 left-5 text-[12px] sm:text-sm md:text-md lg:text-lg">
            @provoproteinhouse
          </span>
          <a href={permalink}>
            <i className="fi fi-brands-instagram absolute bottom-3 right-5 text-xl md:text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
